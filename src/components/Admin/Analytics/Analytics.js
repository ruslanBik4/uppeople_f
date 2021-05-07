import React, {Component} from "react";
import {Button, Col, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
// import {getUsers} from "../../../utils/api/users"; // вакансии
import {getCompanies} from "../../../utils/api/company"; // компании
import {getVacancies} from "../../../utils/api/vacancy"; // вакансии и теги
import {
  // getStatuses, get Tags
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
import withOptionsForSelects from "../../hoc/withOptionsForSelects";
// Import the styles
import {styles} from "../../../assets/css/analitycs.css";
import Label from "reactstrap/lib/Label";

class Analytics extends Component {
  constructor(props) {
    super(props);

    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 2).toJSON().slice(0, 10);
    let lastDay = new Date(y, m + 1, 1).toJSON().slice(0, 10);
    console.log(firstDay)
    console.log(lastDay)

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
    this.fetchCompanies(options);
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
    // this.setState({selectedRecruiter: options.recruiters[0]});
    this.setState({recruitersIsClearable: true});
  };

  fetchCompanies = async () => {
    let companies_result = await getCompanies(
      0,
      false,
      true);
    const {selectedRecruiter} = this.state;
    const companies = companies_result.companies.filter((company) => company.vacancies > 0 &&
      (selectedRecruiter !== null && company.recruiters && company.recruiters.indexOf(selectedRecruiter.id) > -1  || selectedRecruiter === null));
    this.setState({companies});
  };

  fetchVacancies = async () => {
    const {selectedCompany, selectedRecruiter} = this.state;
    const vacancies_result = await getVacancies(
      selectedCompany !== null ? selectedCompany.id : null,
      false, 
      true);
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
      if (funnelData === 401) {
    this.props.history.push('/login/')
    } else if (funnelData === 204) {
      this.setState({funnelData: null});
      this.setState({total: null});
      let lblErrors = document.querySelector(".errorlist label");
      document.querySelector(".errorlist label").classList.add('error');
      lblErrors.textContent = ("Нет данных по выбланным параметрам")
    } else if (funnelData !== undefined) {
      let lblErrors = document.querySelector(".errorlist label");
      lblErrors.textContent = ("")
      document.querySelector(".errorlist label").classList.remove('error');
      console.log(funnelData)
      let total = funnelData.total
      funnelData = funnelData.data;
      this.setState({funnelData});
      this.setState({total});
      console.log(funnelData)
      console.log(total)
      console.log(this.state)
    } else {
      this.setState({funnelData: null});
      let lblErrors = document.querySelector(".errorlist label");
      document.querySelector(".errorlist label").classList.add('error');
      lblErrors.textContent = ("Нет данных по выбланным параметрам")
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
      let data = [];
      if (this.state.total !== 0) {
        data.push({
          stat: "Total",
          count: this.state.total,
          color: "#edf0f4",
          percentage: 100
        });
      } 
      for (const [index, value] of Object.entries(funnelData)) {
        let in_statuses = selectedStatuses.filter((selectedStatus) => selectedStatus.label === value.name);
        
        if (in_statuses.length > 0) {
          data.push({
            stat: value.name,
            count: value.count,
            color: value.color,
            percentage: value.percent,
          });
        }
      }

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
      const { companies, selectedCompany} = this.state;
      const {vacancies, selectedVacancy} = this.state;
      const {selectedStatuses} = this.state;
      const {selectedStartDate, selectedEndDate} = this.state;
      const {
        recruiters,
        selectedRecruiter,
        // statuses,
        vacancyStatus
       } = this.props.options;
       console.log(this.props);
       console.log(this.props.options);
       console.log(this.state);
       console.log(this.state.options)
      
      
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
                  isClearable
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
                  options={vacancyStatus}
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
              <Row>
                <Col className={"errorlist"} row>
                  <Label></Label>
                </Col>
              </Row>
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
export default withOptionsForSelects(Analytics);