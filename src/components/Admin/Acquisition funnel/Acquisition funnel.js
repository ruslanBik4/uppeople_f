import React, {Component} from "react";
import {Button,Col, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import {getUsers} from "../../../utils/api/users"; // вакансии
import {getCompanies} from "../../../utils/api/company"; // компании
import {getVacancies, getTags} from "../../../utils/api/vacancy"; // вакансии и теги
import {getStatuses, getCandidatesAmountByTags} from "../../../utils/api/candidates"; // вакансии и теги
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartTooltip,
  ChartSeriesLabels,
} from "@progress/kendo-react-charts";
import moment from "moment";
import withOptionsForSelects from "../../hoc/withOptionsForSelects";

// Import the styles
import {styles} from "../../../assets/css/analitycs.css";

class AcquisitionFunnel extends Component {
  constructor(props) {
    super(props);

    // let date = new Date();
    // let end_date = date.toJSON().slice(0, 10);
    // date.setMonth(date.getMonth() - 1);
    // let start_date = date.toJSON().slice(0, 10);


    let date = new Date(), y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 2).toJSON().slice(0, 10);
    let lastDay = new Date(y, m + 1, 0).toJSON().slice(0, 10);

    this.state = {
      recruiters: [],
      companies: [],
      vacancies: [],
      tags: [],
      // statuses: [],

      selectedRecruiter: null,
      selectedCompany: null,
      selectedVacancy: null,
      selectedTags: null,
      selectedStartDate: firstDay,
      selectedEndDate: lastDay,

      recruitersIsClearable: true,

      funnelData: null,
      pieChartData: null,
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

    this.fetchCandidatesData();
    this.fetchStatuses(options);

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedRecruiter !== prevState.selectedRecruiter ||
      this.state.selectedCompany !== prevState.selectedCompany ||
      this.state.selectedVacancy !== prevState.selectedVacancy ||
      this.state.selectedTags !== prevState.selectedTags ||
        (this.state.selectedStartDate !== prevState.selectedStartDate &&
            typeof moment(this.state.selectedStartDate).toDate() === 'object') ||
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
    // const users = await getUsers();
    //
    // if (users === 401) {
    //   this.props.history.push('/login/')
    // } else if (users.users !== undefined) {
    //   const recruiters = users.users.filter((user) => user.id_roles === 2); // recruiter
    //   this.setState({recruiters});
    //   this.setState({selectedRecruiter: recruiters[0]});
    // } else if (users.recruiters !== undefined) {
    //   const recruiters = users.recruiters; // recruiter
    //   this.setState({recruiters});
    //   this.setState({selectedRecruiter: recruiters[0]});
    //   this.setState({recruitersIsClearable: false});
    // }
    this.setState({recruiters: options.recruiters});
    this.setState({selectedRecruiter: options.recruiters[0]});
    this.setState({recruitersIsClearable: false});
  };

  fetchCompanies = async () => {
    let companies_result = await getCompanies(0, true, true);
    const {selectedRecruiter} = this.state;

    const companies = companies_result.companies.filter((company) => company.vacancies > 0 &&
      (selectedRecruiter !== null && company.recruiters && company.recruiters.indexOf(selectedRecruiter.id) > -1
          || selectedRecruiter === undefined || selectedRecruiter === null));
    this.setState({companies});
  };

  fetchVacancies = async () => {
    const {selectedCompany, selectedRecruiter} = this.state;
    const vacancies_result = await getVacancies(selectedCompany !== null ? selectedCompany.id : null, true, true);
    const vacancies = vacancies_result.filter((vacancy) =>
      (selectedRecruiter !== null && vacancy.recruiters && vacancy.recruiters.indexOf(selectedRecruiter.id) > -1 || selectedRecruiter === null)
    );
    this.setState({vacancies});
  };

  fetchTags = async (options) => {
    // const tags = await getTags({'main': true});
    this.setState({tags: options.tags});
    this.setState({selectedTags: options.tags});
    // this.setState({tags});
    // this.setState({selectedTags: tags});
  };

  fetchCandidatesData = async () => {
    const {selectedRecruiter, selectedCompany, selectedVacancy, selectedStartDate, selectedEndDate} = this.state;
    let data = await getCandidatesAmountByTags(
      selectedRecruiter ? selectedRecruiter.id : 0,
      selectedCompany ? selectedCompany.id : 0,
      selectedVacancy ? selectedVacancy.id : 0,
      selectedStartDate, selectedEndDate);
    if (data === 401) {
      this.props.history.push('/login/')
    } else if (data !== undefined) {
      let funnelData = data.main;
      let pieChartData = data.reject;

      this.setState({funnelData});
      this.setState({pieChartData});
    } else {
      this.setState({funnelData: null});
    }
  };

  handleExportClick = async () => {
    const {selectedRecruiter, selectedCompany, selectedVacancy, selectedStartDate, selectedEndDate} = this.state;
    let data = await getCandidatesAmountByTags(
        selectedRecruiter ? selectedRecruiter.id : 0,
        selectedCompany ? selectedCompany.id : 0,
        selectedVacancy ? selectedVacancy.id : 0,
        selectedStartDate, selectedEndDate);
  }

  fetchStatuses = async (options) => {
    this.setState({statuses: options.candidateStatus});
    this.setState({selectedStatuses: options.statuses});
    // const statuses = await getStatuses();
    // this.setState({statuses});
    // this.setState({selectedStatuses: statuses});
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

  handleTagsSelect = (selectedTags) => {
    this.setState({selectedTags});
  };

  handleStatusChange = (selectedStatuses) => {
    this.setState({selectedStatuses});
  };

  handleDate = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };


  renderPieChart = () => {

    const {pieChartData} = this.state;
    let total = 0;
    if (pieChartData !== undefined && pieChartData !== null) {
      for (const [index, value] of Object.entries(pieChartData)) {
        total += value.count;
      }

      let series = [];
      for (const [index, value] of Object.entries(pieChartData)) {
        if (value.count > 0) {
          series.push({
            category: value.name,
            value: value.count / total,
            color: value.color,
            count: value.count
          });
        }
      }

      const labelContent = (props) => {
        let formatedNumber = Number(props.dataItem.value).toLocaleString(undefined, {
          style: 'percent',
          minimumFractionDigits: 2
        });
        // return `${props.dataItem.category.replaceAll(" ", "\n") + "\n"} ${props.dataItem.count} -  ${formatedNumber}`;
        return `${this.formatLabel(props.dataItem.category)} \n ${props.dataItem.count} -  ${formatedNumber}`;
        // return `${props.dataItem.category.replaceAll(" ", "\n")} ${props.dataItem.value}`;

      };
      return (

        <Chart title="World Population by Broad Age Groups">
          <ChartLegend position="bottom"/>
          <ChartSeries>
            <ChartSeriesItem type="pie" data={series} field="value" categoryField="category"
                             labels={{visible: true, content: labelContent}}/>
          </ChartSeries>
        </Chart>
      );
    }
    // }
    // else {
    //   return (<p>No data found</p>);
    // }
    // }

  };

  formatLabel = (label) => {
    let formatted_labels = new Map();
// setting the values
    formatted_labels.set('closed to offers', "closed" + "\n" + "to offers");
    formatted_labels.set('low salary rate', "low" + "\n" + "salary rate");
    formatted_labels.set('was contacted earlier', "was contacted" + "\n" + "earlier");
    formatted_labels.set('does not like the project', "does not like" + "\n" + "the project");
    formatted_labels.set('terms don’t fit', "terms" + "\n" + "don’t fit");
    formatted_labels.set('remote only', "remote" + "\n" + "only");
    formatted_labels.set("does not fit", "doesn't fit");

    return formatted_labels.get(label);
  };

  renderFunnelChart = () => {
    const {funnelData, selectedTags} = this.state;

    if (funnelData !== null && funnelData !== undefined) {

      // //////
      //
      // console.log('до нового циклу');
      // console.log(funnelData);
      let final_data = [];

      let total = 0;
      for (const [index, value] of Object.entries(funnelData)) {
        total += value.count;
      }


      for (const [index, value] of Object.entries(funnelData)) {
        if (selectedTags !== null) {
          let in_tags = selectedTags.filter((selectedTag) => selectedTag.id === value.id);
          if (in_tags.length > 0) {
            // console.log(index);
            if (parseInt(index) === 0) {
              final_data.push({
                stat: value.name,
                count: total,
                color: value.color,
                percentage: 100
              });
            }
            if (index > 0) {
              final_data.push({
                stat: value.name + ' ' + parseFloat(parseInt(value.count) / total * 100).toFixed(2) + '%',
                count: value.count,
                color: value.color,
                percentage: parseInt(value.count) / total * 100
              });
            }
            // data.push({
            //   stat: value.name,
            //   count: value.count,
            //   color: value.color,
            //   percentage: 100
            // });
          }
        }
      }
      // console.log("після нового циклу");
      // console.log(final_data);

      /////////
//
//       console.log('до циклу');
//       console.log(funnelData);
//       const result = Object.entries(funnelData).reduceRight(
//         (acc, [currentKey, currentValue], index, array) => {
//           console.log(currentValue);
//           const prev = array[index + 1];
//           if (prev) {
//             // console.log(prev);
//             const [prevKey] = prev;
//             acc[currentKey] = {
//               ...currentValue,
//               count: acc[prevKey].count + currentValue.count
//             };
//           } else {
//             acc[currentKey] = currentValue;
//           }
//           return acc;
//         },
//         {}
//       );
//       console.log('після циклу');
//       console.log(result);
//       console.log(' ');
//       // let data = [];
//       for (const [index, value] of Object.entries(result)) {
//         if (selectedTags !== null) {
//           let in_tags = selectedTags.filter((selectedTag) => selectedTag.id === value.id);
//           if (in_tags.length > 0) {
//             data.push({
//               stat: value.name,
//               count: value.count,
//               color: value.color,
//               percentage: 100
//             });
//           }
//         }
//       }
// //
//       data = data.reduce(
//         (acc_, currentValue, index, array) => {
//           const prev = array[index - 1];
//
//           if (prev) {
//             if (prev.count > 0) {
//               currentValue.percentage = (parseFloat(currentValue.count) * 100 / parseFloat(prev.count)).toFixed(0)
//             } else {
//               currentValue.percentage = 0;
//             }
//           }
//
//           acc_[index] = currentValue;
//
//           return acc_;
//         },
//         {}
//       );
//
//       let final_data = [];
//       for (const [index, value] of Object.entries(data)) {
//         final_data.push({
//           stat: value.stat + ' ' + value.percentage + '%',
//           count: value.count,
//           color: value.color,
//         });
//       }

      const tooltipRender = (({point = {}}) => (point.category));

      const {dynamicSlope, dynamicHeight} = this.state;
      return (

        <Chart style={{margin: "25px auto 0", width: 300, height: 350}} className={"pie_chart"}>
          <ChartTitle text="Acquisition funnel"/>
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
      const {tags, selectedTags} = this.state;
      const {selectedStartDate, selectedEndDate} = this.state;

      return (
        <>
          <Row style={{marginBottom: "1rem"}}>
            <Col>
              <h1 style={{marginBottom: 0, fontSize: 24}}>Acquisition funnel</h1>
            </Col>
          </Row>
          <Row style={{marginBottom: "1rem"}}>
            <Col xs="12" sm="12" md="12" lg="3" xl="3">
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
                  style={{marginBottom: "1rem"}}
                  isMulti
                  value={selectedTags}
                  options={tags}
                  isClearable
                  getOptionValue={(tag) => tag.id}
                  getOptionLabel={(tag) => tag.label}
                  placeholder="Tags"
                  onChange={this.handleTagsSelect}
                />
              </FormGroup>
              {/*<a*/}
              {/*    target="_blank"*/}
              {/*    href="api/reports/by_tags"*/}
              {/*    rel="noopener noreferrer"*/}
              {/*    className={styles.downloadPdf}*/}
              {/*>*/}
                <Button
              style={{position: "relative", left: "30%", top: "3px", width: "100px", background: "#4dbd74"}}
              onClick={this.handleExportClick}
              >
                Export
            </Button>
              {/*</a>*/}
            </Col>
            <Col xs="12" sm="12" md="12" lg="3" xl="3">
              <Row style={{marginBottom: "1rem"}}>
                {this.renderFunnelChart()}
              </Row>
            </Col>
            <Col lg={6} md={6}>
              <Row style={{marginBottom: "1rem"}}>
                <Col lg={6} md={6}>
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
                <Col lg={6} md={6}>
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
              <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                  {this.renderPieChart()}
                </Col>
              </Row>
            </Col>

          </Row>

        </>

      );
    }
  // }
}
String.prototype.replaceAll = function (search, replace) {
  return this.split(search).join(replace);
};

export default withOptionsForSelects(AcquisitionFunnel);
