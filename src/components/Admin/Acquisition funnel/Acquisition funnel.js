import React, {Component} from "react";
import PropTypes from "prop-types";
import {Button,Col, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import { saveAs } from 'file-saver';
import {getCompanies} from "../../../utils/api/company"; // компании
import {getVacancies} from "../../../utils/api/vacancy"; // вакансии и теги
import {getStatuses, getCandidatesAmountByTags, getReportAmountByTags} from "../../../utils/api/candidates"; // вакансии и теги
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
// import styles from "./Form.module.css";
import Label from "reactstrap/lib/Label";
// import { platform } from "chart.js";
// import { isEmpty } from "../../../utils/selectors";

class AcquisitionFunnel extends Component {

  static propTypes = {
    options: PropTypes.shape({
      platforms: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      recruiters: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      companies: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      tags: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired
    }).isRequired,
    onCreateVacancy: PropTypes.func.isRequired
  };

  state = {
    platform_id: [],
    seniority_id: [],
    company_id: [],
    location_id: [],
    user_ids: [],
    salary: 0,
    comment: "",
    link: "",
    selectedVacancyStatus: 0,
    
  };

  constructor(props) {
    super(props);

    // let date = new Date();
    // let end_date = date.toJSON().slice(0, 10);
    // date.setMonth(date.getMonth() - 1);
    // let start_date = date.toJSON().slice(0, 10);


    let date = new Date(), y = date.getFullYear(), m = date.getMonth()
    //  d = date.getDate()
    // , y = date.getFullYear(), m = date.getMonth();
    let firstDay = new Date(y, m, 2, 0, 0, 0).toJSON().slice(0, 10);
    // .toJSON().slice(0, 10);
    let lastDay = new Date(y, m + 1, 1, 0, 0, 0).toJSON().slice(0, 10);
    // .toJSON().slice(0, 10);
    console.log(firstDay)
    console.log(lastDay)

    this.state = {
      recruiters: [],
      companies: [],
      vacancies: [],
      tags: [],
      platforms: [],
      // statuses: [],

      selectedRecruiter: null,
      selectedCompany: null,
      selectedVacancy: null,
      selectedTags: null,
      platform_id: null,
      selectedStartDate: firstDay,
      selectedEndDate: lastDay,

      recruitersIsClearable: true,

      funnelData: null,
      pieChartData: null,
      dynamicSlope: true,
      dynamicHeight: false
    };
    console.log(this.props)
  }

  componentDidMount() { // тут пишеться те, що потрібно підгрузити з АПІ
    let {options} = this.props;
    if (options === undefined || options.recruiters === undefined || options.recruiters.length === 0 ){
      const opts = localStorage.getItem("optionsForSelects");
      options = JSON.parse(opts);
    }
    console.log(this.props)

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
      this.state.platform_id !== prevState.platform_id ||
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
    
    this.setState({recruiters: options.recruiters});
    // this.setState({selectedRecruiter: options.recruiters[0]});
    this.setState({recruitersIsClearable: false});
  };

  // fetchCompanies = async () => {
  //   let companies_result = await getCompanies(0, true, false);
  //   const {selectedRecruiter} = this.state;

  //   const companies = companies_result.companies.filter((company) => company.vacancies > 0 &&
  //     (selectedRecruiter !== null && company.recruiters && company.recruiters.indexOf(selectedRecruiter.id) > -1
  //         || selectedRecruiter === undefined || selectedRecruiter === null));
  //   this.setState({companies});
  // };

  fetchCompanies = async () => {
    let companies_result = await getCompanies(0, true, false);
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
      (selectedRecruiter !== null && vacancy.recruiters && vacancy.recruiters.indexOf(selectedRecruiter.id) > -1 || selectedRecruiter === null)
    );
    this.setState({vacancies});
  };

  fetchTags = async (options) => {
    // const tags = await getTags({'main': true});
    // this.setState({tags: options.tags});
    this.setState({selectedTags: options.tags});
    // this.setState({selectedTag: options.tags})
    // this.setState({tags});
    // this.setState({selectedTags: tags});
  };
  // selectedVacancy = selectedVacancy.id
// todo 1. Порядок запросов соблюсти 2. даты сверху. 3. обработка 204 4. таги - массивом
  fetchCandidatesData = async () => {
    const {selectedRecruiter, platform_id, selectedCompany, selectedVacancy, selectedStartDate, selectedEndDate, selectedTags} = this.state;
    let names = 'selectedRecruiter, platform_id, selectedCompany, selectedVacancy, selectedStartDate, selectedEndDate, selectedTags'
    console.log(names)
    let data = await getCandidatesAmountByTags(
      selectedStartDate, selectedEndDate,
      selectedRecruiter ? selectedRecruiter.id : 0,
      selectedCompany ? selectedCompany.id : 0,
      selectedVacancy ? selectedVacancy.id : 0,
      platform_id ? platform_id.id : 0,
      selectedTags ? selectedTags.map(item => item.id) : null)
      // let value = String( selectedEndDate)
      // let value = data.join(';')
      // console.log(value)
      console.log(data)
      console.log(getCandidatesAmountByTags)
      console.log(selectedRecruiter)
      console.log(platform_id, selectedCompany)
    if (data === 401) {
      this.props.history.push('/login/')
    } else if (data === 204) {
      this.setState({funnelData: null});
      this.setState({pieChartData: null});
      this.setState({total: null});
      let lblErrors = document.querySelector(".errorlist label");
      document.querySelector(".errorlist label").classList.add('error');
      lblErrors.textContent = ("Нет данных по выбранным параметрам")
      if (selectedRecruiter.length > 0) {
        lblErrors.textContent = ("selectedRecruiter")
      }
      
      // let result = names.filter(item => item.id == 1)
      // console.log(result)
    } else if (data !== undefined) {
      let lblErrors = document.querySelector(".errorlist label");
      lblErrors.textContent = ("")
      document.querySelector(".errorlist label").classList.remove('error');
      let funnelData = data.main;
      let pieChartData = data.reject;
      let total = data.total;

      this.setState({funnelData});
      this.setState({pieChartData});
      this.setState({total})
      console.log(data)
    } else {
      this.setState({funnelData: null});
      this.setState({pieChartData: null});
      this.setState({total: null});
      let lblErrors = document.querySelector(".errorlist label");
      document.querySelector(".errorlist label").classList.add('error');
      lblErrors.textContent = ("Нет данных по выбранным параметрам")
    }
    console.log(data)
    // console.log(response)
  };

  handleExportClick = async () => {
    const {selectedRecruiter, selectedCompany, selectedVacancy, selectedStartDate, selectedEndDate, platform_id} = this.state;
     await getReportAmountByTags(
        selectedRecruiter ? selectedRecruiter.id : 0,
        selectedCompany ? selectedCompany.id : 0,
        selectedVacancy ? selectedVacancy.id : 0,
        // selectedVacancy,
        selectedStartDate, selectedEndDate,
        platform_id ? platform_id.id : 0).then(blob =>
         saveAs(blob, (selectedRecruiter ? selectedRecruiter.label :
             (selectedCompany ? selectedCompany.name :
                 (selectedVacancy ? selectedVacancy.name : ''))) + ' '
             + selectedStartDate + '-' + selectedEndDate + '.csv'));
  };

  fetchStatuses = async (options) => {
    if (options.candidateStatus.lenght === 0) {
      this.setState({statuses: options.candidateStatus});
      this.setState({selectedStatuses: options.statuses});
    } else {
      const statuses = await getStatuses();
      this.setState({statuses});
      this.setState({selectedStatuses: statuses});
    }
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

  handlePlatformsSelect = (platform_id) => {
    this.setState({platform_id});
  };

  handleStatusChange = (selectedStatuses) => {
    this.setState({selectedStatuses});
  };

  handleDate = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };


  renderPieChart = () => {

    const {pieChartData} = this.state;
    console.log(pieChartData)
    let total = 0;
    if (pieChartData !== undefined && pieChartData !== null) {
      for (const [index, value] of Object.entries(pieChartData)) {
        // total += value.count;
      }

      let series = [];
      for (const [index, value] of Object.entries(pieChartData)) {
        if (value.count > 0) {
          series.push({
            category: value.name,
            value: value.percent,
            color: value.color,
            count: value.count
          });
        }
      }

      const labelContent = (props) => {
        let formatedNumber = Number((props.dataItem.value)/100).toLocaleString(undefined, {
          style: 'percent',
          minimumFractionDigits: 2
        });
        // let formatedNumber = this.state.value.percent
        // return `${props.dataItem.category.replaceAll(" ", "\n") + "\n"} ${props.dataItem.count} -  ${formatedNumber}`;
        return `${this.formatLabel(props.dataItem.category)} \n ${props.dataItem.count} - ${formatedNumber}`;
        // -  ${formatedNumber}
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
    const total = this.state.total;
    console.log(total)
  
  
    let arrtotal = [{color: "gray", count: total, id: "0", name: "Total", parent_id: "0", percent: "100"}]
    console.log(arrtotal)
    let arr = arrtotal.find(item => item.id == 0);
    console.log(arr)
    // funnelData.unshift([arr])
    // arr.push(funnelData)
    // funnelData.push(arrtotal)
    console.log(arrtotal)
    console.log(funnelData)
    // console.log(funnelData1)
    console.log(total)
    console.log(this.state.total)

    if (funnelData !== null && funnelData !== undefined) {

      // //////
      //
      // console.log('до нового циклу');
      // console.log(funnelData);
      let final_data = [];

      // let total = 0;
      // for (const [index, value] of Object.entries(funnelData)) {
      //   total += value.count;
      // }
      if (this.state.total !== 0) {
        final_data.push({
          stat: "Total",
          count: this.state.total,
          color: "#edf0f4",
          percentage: 100
        });
      } 

      for (const [index, value] of Object.entries(funnelData)) {
        if (selectedTags !== null) {
          let in_tags = selectedTags.filter((selectedTag) => selectedTag.id === value.id);
          if (in_tags.length > 0) {
            // console.log(index);
           
             if (parseInt(index) === 0) {
              final_data.push({
                stat: value.name + ' ' + value.percent,
                //  + ' ' + parseFloat(parseInt(value.count) / total * 100).toFixed(2) + '%',
                count: value.count,
                color: value.color,
                percentage: value.percent
              });
            }
            if (index > 0) {
              final_data.push({
                stat: value.name + ' ' + value.percent,
                count: value.count,
                color: value.color,
                percentage: value.percent
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
      let lblErrors = document.querySelector(".errorlist label");
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
      const {companies, selectedCompany} = this.state;
      const {vacancies, selectedVacancy} = this.state;
      // const platform_id = this.state;
      const {selectedTags} = this.state;
      const {selectedStartDate, selectedEndDate} = this.state;
      const {
        recruiters,
        selectedRecruiter,
        platforms,
        platform_id,
        // recruitersIsClearable,
        tags
        // selectedTags,
        // selectedStartDate,
        // selectedEndDate
       } = this.props.options;
       console.log(this.props);
       console.log(this.props.options);
       console.log(this.state);
       console.log(this.state.options)
      //  this.state.tags = this.props.tags;
      //  this.state.selectedTags = this.props.selectedTags;



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
                  // style={{marginBottom: "1rem"}}
                  value={selectedTags}
                  options={tags}
                  isClearable
                  // getOptionValue={(tag) => tag.id}
                  // getOptionLabel={(tag) => tag.label}
                  placeholder="Tags"
                  onChange={this.handleTagsSelect}
                />
              </FormGroup>
              <FormGroup className="filter-select">
                <Select
                  style={{marginBottom: "1rem"}}
                  value={platform_id}
                  options={platforms}
                  isClearable
                  placeholder="Platforms"
                  onChange={this.handlePlatformsSelect}
                />
              </FormGroup>
                <Button
              style={{position: "relative", left: "30%", top: "3px", width: "100px", background: "#4dbd74"}}
              onClick={this.handleExportClick}
              >
                Export
              </Button>
            </Col>
            <Col xs="12" sm="12" md="12" lg="3" xl="3">
              <Row>
                <Col className={"errorlist"} row>
                  <Label></Label>
                </Col>
              </Row>
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
