import React, {Component} from "react";
import {Col, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import {getUsers} from "../../../utils/api/users"; // вакансии
import {getCompanies} from "../../../utils/api/company"; // компании
import {getVacancies, getTags} from "../../../utils/api/vacancy"; // вакансии и теги
import {getStatuses, getCandidatesAmountByStatuses} from "../../../utils/api/candidates"; // вакансии и теги
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTooltip,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
// Import the styles
import {styles} from "../../../assets/css/analitycs.css";

export default class Analytics extends Component {
  constructor(props) {
    super(props);

    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 2).toJSON().slice(0, 10);
    let lastDay = new Date(y, m + 1, 0).toJSON().slice(0, 10);

    this.state = {
      recruiters: [],
      companies: [],
      vacancies: [],
      tags: [],
      statuses: [],

      selectedRecruiter: null,
      selectedCompany: null,
      selectedVacancy: null,
      selectedTag: null,
      selectedStatuses: null,
      selectedStartDate: firstDay,
      selectedEndDate: lastDay,

      recruitersIsClearable: true,

      funnelData: null,
      dynamicSlope: true,
      dynamicHeight: false
    };
  }

  componentDidMount() { // тут пишеться те, що потрібно підгрузити з АПІ
    this.fetchRecruiters();
    this.fetchCompanies();
    this.fetchVacancies();
    this.fetchTags();
    // this.fetchCandidatesData();
    this.fetchStatuses();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedRecruiter !== prevState.selectedRecruiter ||
      this.state.selectedCompany !== prevState.selectedCompany ||
      this.state.selectedVacancy !== prevState.selectedVacancy ||
      this.state.selectedTag !== prevState.selectedTag ||
      this.state.selectedStatuses !== prevState.selectedStatuses ||
      this.state.selectedStartDate !== prevState.selectedStartDate ||
      this.state.selectedEndDate !== prevState.selectedEndDate) {
      this.fetchCandidatesData();
    }

    if (this.state.selectedRecruiter !== prevState.selectedRecruiter) {
      this.fetchCompanies();
      this.fetchVacancies();
    }

    if (this.state.selectedCompany !== prevState.selectedCompany) {
      this.fetchVacancies();
    }
  }

  fetchRecruiters = async () => {
    const users = await getUsers();

    if (users.staff !== undefined) {
      const recruiters = users.staff.filter((user) => user.role_id === 2); // recruiter
      this.setState({recruiters});
    } else if (users.recruiters !== undefined) {
      const recruiters = users.recruiters; // recruiter
      this.setState({recruiters});
      this.setState({selectedRecruiter: recruiters[0]});
      this.setState({recruitersIsClearable: false});
    }
  };

  fetchCompanies = async () => {
    let companies_result = await getCompanies(0, 1, 1);
    const {selectedRecruiter} = this.state;
    const companies = companies_result.companies.filter((company) => company.vacancies > 0 &&
      (selectedRecruiter !== null && company.recruiters.indexOf(selectedRecruiter.id) + 1 > 0 || selectedRecruiter === null));
    this.setState({companies});
  };

  fetchVacancies = async () => {
    const {selectedCompany, selectedRecruiter} = this.state;
    const vacancies_result = await getVacancies(selectedCompany !== null ? selectedCompany.id : null, true, true);
    const vacancies = vacancies_result.vacancies.filter((vacancy) =>
      (selectedRecruiter !== null && vacancy.recruiters.indexOf(selectedRecruiter.id) + 1 > 0 || selectedRecruiter === null)
    );
    this.setState({vacancies});
  };

  fetchTags = async () => {
    const tags = await getTags();
    this.setState({tags});
  };

  fetchCandidatesData = async () => {
    const {selectedRecruiter, selectedCompany, selectedVacancy, selectedTag, selectedStartDate, selectedEndDate} = this.state;
    let funnelData = await getCandidatesAmountByStatuses(
      selectedRecruiter ? selectedRecruiter.id : 0,
      selectedCompany ? selectedCompany.id : 0,
      selectedVacancy ? selectedVacancy.id : 0,
      selectedTag ? selectedTag.id : 0,
      selectedStartDate, selectedEndDate);
    if (funnelData !== undefined) {
      funnelData = funnelData.data;
      this.setState({funnelData});
    } else {
      this.setState({funnelData: null});
    }
  };

  fetchStatuses = async () => {
    const statuses = await getStatuses();
    this.setState({statuses});
    this.setState({selectedStatuses: statuses});
  };


  handleRecruiterSelect = (selectedRecruiter) => {
    this.setState({selectedRecruiter});
  };

  handleCompanySelect = (selectedCompany) => {
    this.setState({selectedCompany});
  };

  handleVacancySelect = (selectedVacancy) => {
    let {selectedCompany, companies} = this.state;
    if (selectedVacancy !== null) {
      selectedCompany = companies.filter((company) => company.id === selectedVacancy.company_id)[0];
    }
    this.setState({selectedVacancy, selectedCompany});
  };

  handleTagsSelect = (selectedTag) => {
    this.setState({selectedTag});
  };

  handleStatusChange = (selectedStatuses) => {
    this.setState({selectedStatuses});
  };

  handleDate = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  renderChart = () => {
    const {funnelData, selectedStatuses} = this.state;

    if (funnelData !== null && funnelData !== undefined) {
      const result = Object.entries(funnelData).reduceRight(
        (acc, [currentKey, currentValue], index, array) => {
          const prev = array[index + 1];
          if (prev) {
            const [prevKey] = prev;
            acc[currentKey] = {
              ...currentValue,
              count: acc[prevKey].count + currentValue.count,
            };
          } else {
            acc[currentKey] = currentValue;
          }
          return acc;
        },
        {}
      );

      let data = [];
      for (const [status, value] of Object.entries(result).reverse()) {
        let in_statuses = selectedStatuses.filter((selectedStatus) => selectedStatus.label === status);
        if (in_statuses.length > 0) {
          data.push({
            stat: status,
            count: value.count,
            color: value.color,
            percentage: 100
          });
        }
      }

      data = data.reduce(
        (acc_, currentValue, index, array) => {
          const prev = array[index - 1];

          if (prev) {
            if (prev.count > 0) {
              currentValue.percentage = (parseFloat(currentValue.count) * 100 / parseFloat(prev.count)).toFixed(0)
            } else {
              currentValue.percentage = 0;
            }
          }

          acc_[index] = currentValue;

          return acc_;
        },
        {}
      );

      let final_data = [];
      for (const [index, value] of Object.entries(data)) {
        final_data.push({
          stat: value.stat + ' ' + value.percentage + '%',
          count: value.count,
          color: value.color,
        });
      }

      const tooltipRender = (({point = {}}) => (point.category));

      const {dynamicSlope, dynamicHeight} = this.state;
      return (

        <Chart style={{margin: "0 auto", width: 300, height: 350}}>
          <ChartTitle text="Recruitment funnel"/>
          <ChartSeries style={{height: 350}}>
            <ChartSeriesItem
              type="funnel"
              data={final_data}
              categoryField="stat"
              field="count"
              colorField="color"
              dynamicHeight={dynamicHeight}
              dynamicSlope={dynamicSlope}
            >
              <ChartSeriesLabels color="black" background="none" format="N0"/>
            </ChartSeriesItem>
          </ChartSeries>
          <ChartTooltip render={tooltipRender}/>
          <ChartLegend visible={false}/>
        </Chart>
      );
      // }
      // else {
      //   return (<p>No data found</p>);
      // }
    }

  };


  render() {
    // захист
    // if (Date.now() > 1603379532000) {
    //   return (
    //     <>
    //       <Row style={{marginBottom: "1rem"}}>
    //         <Col>
    //           <h1 style={{marginBottom: 0, fontSize: 24}}>Sorry, but this page is not payed yet. Please pay to make it
    //             available</h1>
    //         </Col>
    //       </Row>
    //     </>
    //   )
    // } else {



      const {recruiters, selectedRecruiter, recruitersIsClearable} = this.state;
      const {companies, selectedCompany} = this.state;
      const {vacancies, selectedVacancy} = this.state;
      const {tags, selectedTag} = this.state;
      const {statuses, selectedStatuses} = this.state;
      const {selectedStartDate, selectedEndDate} = this.state;
      const {clearable} = true;

      return (
        <>
          <Row style={{marginBottom: "1rem"}}>
            <Col>
              <h1 style={{marginBottom: 0, fontSize: 24}}>Recruitment funnel</h1>
            </Col>
          </Row>
          <Row style={{marginBottom: "1rem"}}>
            <Col xs="12" sm="12" md="12" lg="4" xl="4">
              <FormGroup className="filter-select">
                <label className="date-filter-label">Filters</label>
                <Select
                  style={{marginBottom: 15}}
                  value={selectedRecruiter}
                  options={recruiters}
                  isClearable={recruitersIsClearable}
                  getOptionValue={(user) => user.id}
                  getOptionLabel={(user) => user.name}
                  placeholder="Recruiters"
                  onChange={this.handleRecruiterSelect}
                />
              </FormGroup>
              <FormGroup className="filter-select">
                <Select
                  style={{marginBottom: "1rem"}}
                  value={selectedCompany}
                  options={companies}
                  isClearable
                  getOptionValue={(company) => company.id}
                  getOptionLabel={(company) => company.name}
                  placeholder="Companies"
                  onChange={this.handleCompanySelect}
                />
              </FormGroup>
              <FormGroup className="filter-select">
                <Select
                  style={{marginBottom: "1rem"}}
                  value={selectedVacancy}
                  options={vacancies}
                  isClearable
                  getOptionValue={(vacancy) => vacancy.id}
                  getOptionLabel={(vacancy) => vacancy.label}
                  placeholder="Vacancies"
                  onChange={this.handleVacancySelect}
                />
              </FormGroup>

              {/*<FormGroup className="filter-select" >*/}
              {/*  <Select*/}
              {/*    style={{marginBottom: "1rem"}}*/}
              {/*    value={selectedTag}*/}
              {/*    options={tags}*/}
              {/*    getOptionValue={(tag) => tag.id}*/}
              {/*    getOptionLabel={(tag) => tag.name}*/}
              {/*    placeholder="Tags"*/}
              {/*    onChange={this.handleTagsSelect}*/}
              {/*  />*/}
              {/*</FormGroup>*/}
              <FormGroup className="filter-select">
                <Select
                  isMulti
                  value={selectedStatuses}
                  options={statuses}
                  placeholder="Statuses"
                  onChange={this.handleStatusChange}
                />
              </FormGroup>
            </Col>
            <Col xs="12" sm="12" md="12" lg="4" xl="4">
              <Row style={{marginBottom: "1rem"}}>
                {this.renderChart()}
              </Row>
            </Col>
            <Col lg={2} md={2}>
              <FormGroup>
                <label className="date-filter-label">Date From</label>
                <Input
                  id="date-from"
                  type="date"
                  name="selectedStartDate"
                  value={selectedStartDate}
                  onChange={this.handleDate}
                />
              </FormGroup>
            </Col>
            <Col lg={2} md={2}>
              <FormGroup>
                <label className="date-filter-label">Date To</label>
                <Input
                  id="date-to"
                  type="date"
                  name="selectedEndDate"
                  value={selectedEndDate}
                  onChange={this.handleDate}
                />
              </FormGroup>
            </Col>
          </Row>
        </>

      );
    }
  // }
}
