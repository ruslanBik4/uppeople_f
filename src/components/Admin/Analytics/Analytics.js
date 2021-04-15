import React, {Component} from "react";
import {Button, Col, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import {getUsers} from "../../../utils/api/users"; // вакансии
import {getCompanies} from "../../../utils/api/company"; // компании
import {getVacancies, getTags} from "../../../utils/api/vacancy"; // вакансии и теги
import {
  getStatuses,
  getCandidatesAmountByStatuses,
  getReportAmountByStatus
} from "../../../utils/api/candidates"; // вакансии и теги
import { saveAs } from 'file-saver';
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
    let {options} = this.props;
    if (options === undefined || options.recruiters === undefined || options.recruiters.length === 0 ){
      const opts = localStorage.getItem("optionsForSelects");
      options = JSON.parse(opts);
    }
    this.fetchRecruiters(options);
    this.fetchCompanies();
    this.fetchVacancies();
    this.fetchTags(options);
    // this.fetchCandidatesData();
    this.fetchStatuses(options);
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

  fetchRecruiters = async (options) => {
    this.setState({recruiters: options.recruiters});
    this.setState({selectedRecruiter: options.recruiters[0]});
    this.setState({recruitersIsClearable: true});
  };

  fetchCompanies = async () => {
    let companies_result = await getCompanies(0, true, true);
    const {selectedRecruiter} = this.state;
    const companies = companies_result.companies.filter((company) => company.vacancies > 0 &&
      (selectedRecruiter !== null && company.recruiters && company.recruiters.indexOf(selectedRecruiter.id) > -1  || selectedRecruiter === null));
    this.setState({companies});
  };

  fetchVacancies = async () => {
    const {selectedCompany, selectedRecruiter} = this.state;
    const vacancies_result = await getVacancies(selectedCompany !== null ? selectedCompany.id : null, true, true);
    const vacancies = vacancies_result.filter((vacancy) =>
      (selectedRecruiter !== null && vacancy.recruiters && vacancy.recruiters.indexOf(selectedRecruiter.id)  > -1 || selectedRecruiter === null)
    );
    this.setState({vacancies});
  };

  fetchTags = async (options) => {
    this.setState({tags: options.tags});
    // this.setState({selectedTags: options.tags});
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

  fetchStatuses = async (options) => {
    this.setState({statuses: options.vacancyStatus});
    this.setState({selectedStatuses: options.vacancyStatus});
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
      // const result = Object.entries(funnelData).reduceRight(
      //   (acc, [currentKey, currentValue], index, array) => {
      //     const prev = array[index + 1];
      //     if (prev) {
      //       const [prevKey] = prev;
      //       acc[currentKey] = {
      //         ...currentValue,
      //         count: acc[prevKey].count + currentValue.count,
      //       };
      //     } else {
      //       acc[currentKey] = currentValue;
      //     }
      //     return acc;
      //   },
      //   {}
      // );

      let data = [];
      for (const [index, value] of Object.entries(funnelData).reverse()) {
        let in_statuses = selectedStatuses.filter((selectedStatus) => selectedStatus.label === value.name);
        if (in_statuses.length > 0) {
          data.push({
            stat: value.name,
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

  handleExportClick = async () => {
    const {selectedRecruiter, selectedCompany, selectedVacancy, selectedStartDate, selectedEndDate} = this.state;
    await getReportAmountByStatus(
        selectedRecruiter ? selectedRecruiter.id : 0,
        selectedCompany ? selectedCompany.id : 0,
        selectedVacancy ? selectedVacancy.id : 0,
        selectedStartDate, selectedEndDate).then(blob =>
        saveAs(blob, (selectedRecruiter ? selectedRecruiter.label :
            (selectedCompany ? selectedCompany.name :
                (selectedVacancy ? selectedVacancy.name : ''))) + ' ' +
            + selectedStartDate + '-' + selectedEndDate + '.csv'));
  };



  render() {
      const {recruiters, selectedRecruiter, recruitersIsClearable} = this.state;
      const {companies, selectedCompany} = this.state;
      const {vacancies, selectedVacancy} = this.state;
      const {statuses, selectedStatuses} = this.state;
      const {selectedStartDate, selectedEndDate} = this.state;

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
                  getOptionLabel={(user) => user.label}
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
                  getOptionLabel={(vacancy) => vacancy.name}
                  placeholder="Vacancies"
                  onChange={this.handleVacancySelect}
                />
              </FormGroup>

              <FormGroup className="filter-select">
                <Select
                  isMulti
                  value={selectedStatuses}
                  options={statuses}
                  placeholder="Statuses"
                  onChange={this.handleStatusChange}
                />
              </FormGroup>
              <Button
                  style={{position: "relative", left: "30%", top: "3px", width: "100px", background: "#4dbd74"}}
                  onClick={this.handleExportClick}
              >
                Export
              </Button>
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
