// Core;
import React, {Component} from "react";
import Select from "react-select";
import {Col, Row, Table, FormGroup} from "reactstrap";
// Components
import TableRow from "./TableRow";
import {getUsers} from "../../../utils/api/users";
import {getCompanies} from "../../../utils/api/company";
import {getCandidatesAmountByVacancies} from "../../../utils/api/candidates";

export default class Dashboard extends Component {
  state = {
    recruiters: [],
    companies: [],

    selectedRecruiter: null,
    selectedCompany: null,

    recruitersIsClearable: true,

    dashboardData: null,
  };

  componentDidMount() {
    this.fetchCompanies();
    this.fetchRecruiters();
    this.fetchCandidatesData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.selectedRecruiter !== prevState.selectedRecruiter ||
      this.state.selectedCompany !== prevState.selectedCompany
    ) {
      this.fetchCandidatesData();
    }

    if (this.state.selectedRecruiter !== prevState.selectedRecruiter) {
      this.fetchCompanies();
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
    if (companies_result !== undefined) {
      const companies = companies_result.companies.filter((company) => company.vacancies > 0 &&
        (selectedRecruiter !== null && company.recruiters.indexOf(selectedRecruiter.id) + 1 > 0 || selectedRecruiter === null));
      this.setState({companies});
    }
  };

  fetchCandidatesData = async () => {
    const {selectedCompany, selectedRecruiter} = this.state;

    const dashboardData = await getCandidatesAmountByVacancies(
      selectedRecruiter ? selectedRecruiter.id : null,
      selectedCompany ? selectedCompany.id : null
    );
    if (dashboardData !== undefined) {
      dashboardData.data.sort((a, b) =>
        a.company_name > b.company_name ? 1 : -1
      );

      this.setState({dashboardData});
    }
  };

  loading = () => (
    <div className='animated fadeIn pt-1 text-center'>Loading...</div>
  );

  handleRecruiterSelect = (selectedRecruiter) => {
    this.setState({selectedRecruiter});
  };

  handleCompanySelect = (selectedCompany) => {
    this.setState({selectedCompany});
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


      const {
        dashboardData,
        recruiters,
        companies,
        selectedRecruiter,
        recruitersIsClearable,
        selectedCompany,
      } = this.state;

      const vacansiesAndCompaniesJSX =
        dashboardData &&
        dashboardData.data.map((data) => {
          return (
            <TableRow
              vacancyId={data.vacancy_id}
              key={data.vacancy_id}
              vacancy={data.platform_name}
              conpanyName={data.company_name}
              recruiterName={data.user_name}
              quantity={data.quantity}
              recruiters={recruiters}
              companies={companies}
            />
          );
        });

      return (
        <div className='animated fadeIn'>
          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 180,
                marginBottom: "0.5rem",
              }}
            >
              <h1 style={{marginBottom: 0, marginTop: 20, fontSize: 24}}>
                Dashboard
              </h1>
              <span
                style={{
                  alignSelf: "flex-end",
                  color: "var(--gray)",
                }}
              ></span>
            </Col>
          </Row>
          <Row>
            <Col xs='12' sm='12' md='12' lg='3' xl='3'>
              <FormGroup className='filter-select'>
                <Select
                  style={{marginBottom: 15}}
                  value={selectedRecruiter}
                  options={recruiters}
                  isClearable={recruitersIsClearable}
                  getOptionValue={(user) => user.id}
                  getOptionLabel={(user) => user.name}
                  placeholder='Recruiters'
                  onChange={this.handleRecruiterSelect}
                />
              </FormGroup>
            </Col>
            <Col xs='12' sm='12' md='12' lg='3' xl='3'>
              <FormGroup className='filter-select'>
                <Select
                  style={{marginBottom: "1rem"}}
                  value={selectedCompany}
                  options={companies}
                  isClearable
                  getOptionValue={(company) => company.id}
                  getOptionLabel={(company) => company.name}
                  placeholder='Companies'
                  onChange={this.handleCompanySelect}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs='12' md='12' xl='12'>
              <Table style={{background: "var(--white)"}} responsive hover>
                <thead>
                <tr>
                  <th className='text-center'>Vacancies</th>
                  <th className='text-center'>Company</th>
                  <th className='text-center'>Recruiter</th>
                  <th className='text-center'>Quantity</th>
                </tr>
                </thead>
                <tbody>{vacansiesAndCompaniesJSX}</tbody>
              </Table>
            </Col>
          </Row>
        </div>
      );
    }
  // }
}
