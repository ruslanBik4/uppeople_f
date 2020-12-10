// Core;
import React, {Component} from "react";
import Select from "react-select";
import {Col, Row, Table, FormGroup} from "reactstrap";
import Board from 'react-trello'
// Components
import TableRow from "./TableRow";
import {getUsers} from "../../../utils/api/users";
import {getCompanies} from "../../../utils/api/company";
import {changeStatus, getCandidatesGrouped, getStatuses} from "../../../utils/api/candidates";

export default class Kanban extends Component {
  state = {
    recruiters: [],
    companies: [],
    statuses: [],

    selectedRecruiter: null,
    selectedCompany: null,

    recruitersIsClearable: true,

    canbanData: {
      lanes: []
    },
  };

  componentDidMount() {
    this.fetchCompanies();
    this.fetchRecruiters();
    this.fetchStatuses();
    this.fetchCanbanData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.selectedRecruiter !== prevState.selectedRecruiter ||
      this.state.selectedCompany !== prevState.selectedCompany ||
      this.state.statuses !== prevState.statuses
    ) {
      this.fetchCanbanData();
    }

    if (this.state.selectedRecruiter !== prevState.selectedRecruiter) {
      this.fetchCompanies();
    }
  }

  fetchCompanies = async () => {
    let companies_result = await getCompanies(0, 1, 1);
    const {selectedRecruiter} = this.state;
    const companies = companies_result.companies.filter((company) => company.vacancies > 0 &&
      (selectedRecruiter !== null && company.recruiters.indexOf(selectedRecruiter.id) + 1 > 0 || selectedRecruiter === null));
    this.setState({companies});
  };

  fetchStatuses = async () => {
    const statuses = await getStatuses();
    this.setState({statuses});
  };

  fetchCanbanData = async () => {
    const {selectedCompany, selectedRecruiter, statuses} = this.state;

    let candidates = await getCandidatesGrouped(
      selectedRecruiter ? selectedRecruiter.id : 0,
      selectedCompany ? selectedCompany.id : 0,
    );
    let canbanData = {
      lanes: []
    };

    if (statuses.length > 0 && candidates !== null) {

      statuses.forEach(function (status, i, arr) {
        let cards = [];
        Object.entries(candidates.data).forEach(function (candidate, i, arr) {

          let main = candidate[1].main;
          let other_vacancies = candidate[1].vacancies;

          if (main.status_id === status.id) {
            let vacancies = '';
            if (other_vacancies.length > 0) {
              vacancies = other_vacancies.map(vacancy => (
                <span style={{
                  backgroundColor: vacancy.color,
                  display: "inline-block",
                  padding: "1px 5px",
                  margin: "3px",
                  fontSize: "10px"
                }}>
              {vacancy.company_name} ({vacancy.platform_name})
              </span>));
            }
            let candidate_url = "/#/candidates/" + main.candidate_id;
            cards.push(
              {
                id: main.candidate_id + ':' + main.vacancy_id + ':' + main.company_id,
                title: (<>< a href={candidate_url}>{main.candidate_name}</a></>),
                description: (
                  <>
                    <h4 style={{
                      fontSize: "14px",
                      marginLeft: "5px"
                    }}>
                      {main.company_name} ({main.platform_name})
                    </h4>
                    {vacancies}
                  </>
                ),

                label: main.date,
                // metadata: {sha: 'be312a1'}
              })
          }
        });
        canbanData.lanes.push({
          id: status.id,
          title: status.label,
          label: cards.length,
          cards: cards
        });

      });
    }

    this.setState({canbanData});
  };

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

  loading = () => (
    <div className='animated fadeIn pt-1 text-center'>Loading...</div>
  );

  handleRecruiterSelect = (selectedRecruiter) => {
    this.setState({selectedRecruiter});
  };

  handleCompanySelect = (selectedCompany) => {
    this.setState({selectedCompany});
  };

  handleCardDragEnd = async (candidateIdVacancyId, prevStatusId, newStatusId, position, cardDetails) => {
    const result = await changeStatus(candidateIdVacancyId.split(':')[0], candidateIdVacancyId.split(':')[1], candidateIdVacancyId.split(':')[2], newStatusId);
  };

  handleCardDelete = async (candidateIdVacancyId, StatusId) => {
    // const conf = window.confirm("Are you sure you want to delete candidate from this vacancy?");
    //   if (conf) {
    const result = await changeStatus(candidateIdVacancyId.split(':')[0], candidateIdVacancyId.split(':')[1], candidateIdVacancyId.split(':')[2]);
    // }
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
        canbanData,
        recruiters,
        companies,
        selectedRecruiter,
        recruitersIsClearable,
        selectedCompany,
      } = this.state;

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
                Canban
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
              <Board
                style={{backgroundColor: '#edf0f4'}}
                data={canbanData}
                handleDragEnd={this.handleCardDragEnd}
                onCardDelete={this.handleCardDelete}
              />
            </Col>
          </Row>
        </div>
      );
    }
  // }
}
