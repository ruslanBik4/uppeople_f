// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Form, FormGroup, Input, Row } from "reactstrap";
// Components
import Select from "../shared/Select";

class CandidatesForm extends Component {
  static propTypes = {
    platforms: PropTypes.arrayOf(
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
    statuses: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    seniority: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    onFilter: PropTypes.func.isRequired,
    activeTabId: PropTypes.string.isRequired,
    onAllFilter: PropTypes.func.isRequired,
    onSentFilter: PropTypes.func.isRequired
  };

  state = {
    search: "",
    dateFrom: "",
    dateTo: "",
    dateFromAllCandidates: "",
    dateToAllCandidates: "",
    dateFromSentCandidates: "",
    dateToSentCandidates: "",
    dateFromFreelancersCandidates: "",
    dateToFreelancersCandidates: "",
    dateFollowUpFrom: "",
    dateFollowUpTo: "",
    selectPlatforms: [],
    selectCompanies: [],
    selectStatuses: [],
    selectSeniority: []
  };

  handleInputChange = ({ target: { name, value } }) => {
    const { onFilter } = this.props;

    this.setState({ [name]: value }, () => onFilter(this.state));
  };

  handleAllInputChange = ({ target: { name, value } }) => {
    const { onAllFilter } = this.props;
    console.log('>>>>>>>>>name', [name]);
    console.log('>>>>>>>>>value', value);

    if([name] == 'dateFromAllCandidates'){
      this.setState({ [name]: value });
      this.setState({ dateFrom: value }, () => onAllFilter(this.state));
    }else if([name] == 'dateToAllCandidates'){
      this.setState({ [name]: value });
      this.setState({ dateTo: value }, () => onAllFilter(this.state));
    }else if([name] == 'dateFollowUpFrom'){
      this.setState({ [name]: value }, () => onAllFilter(this.state));
    }else if([name] == 'dateFollowUpTo'){
      this.setState({ [name]: value }, () => onAllFilter(this.state));
    }

  };



  handleSentInputChange = ({ target: { name, value } }) => {
    const { onSentFilter } = this.props;

    if([name] == 'dateFromSentCandidates'){
      this.setState({ [name]: value });
      this.setState({ dateFrom: value }, () => onSentFilter(this.state));
    }else if([name] == 'dateToSentCandidates'){
      this.setState({ [name]: value });
      this.setState({ dateTo: value }, () => onSentFilter(this.state));
    }

    // this.setState({ [name]: value }, () => onSentFilter(this.state));
  };

  handlePlatformChange = value => {
    const { onFilter } = this.props;

    this.setState(
      {
        selectPlatforms: value
      },
      () => onFilter(this.state)
    );
  };

  handleCompanyChange = value => {
    const { onFilter } = this.props;

    this.setState(
      {
        selectCompanies: value
      },
      () => onFilter(this.state)
    );
  };

  handleStatusChange = value => {
    const { onFilter } = this.props;

    this.setState(
      {
        selectStatuses: value
      },
      () => onFilter(this.state)
    );
  };

  handleSeniorityChange = value => {
    const { onFilter } = this.props;

    this.setState(
      {
        selectSeniority: value
      },
      () => onFilter(this.state)
    );
  };

  render() {
    const {
      search,
      dateFrom,
      dateTo,
      dateFromAllCandidates,
      dateToAllCandidates,
      dateFromSentCandidates,
      dateToSentCandidates,
      dateFromFreelancersCandidates,
      dateToFreelancersCandidates,
      dateFollowUpFrom,
      dateFollowUpTo,
      selectPlatforms,
      selectSeniority,
      selectCompanies,
      selectStatuses,
    } = this.state;
    const { platforms, companies, statuses, seniority, activeTabId, userRole } = this.props;

    return (
      <Form>
        <Row>
          <Col lg={12}>
            <FormGroup className="search-wrap">
              <Input
                id="search"
                type="text"
                name="search"
                value={search}
                placeholder="Search"
                onChange={this.handleInputChange}
                autoComplete="off"
              />
              <i
                className="fa fa-search"
                style={{
                  position: "absolute",
                  top: "0.6rem",
                  right: "1.75rem",
                  color: "var(--gray)"
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        {userRole !== 4 ? (
          <Row>

            { activeTabId === "1" ? (
              <>
                <Col lg={2} md={12}>
                  <FormGroup>
                    <label htmlFor={dateFromAllCandidates} className="date-filter-label">Date From</label>
                    <Input
                      id="date-from"
                      type="date"
                      name="dateFromAllCandidates"
                      value={dateFromAllCandidates}
                      onChange={this.handleAllInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={2} md={12}>
                  <FormGroup>
                    <label htmlFor={dateToAllCandidates} className="date-filter-label">Date To</label>
                    <Input
                      id="date-to"
                      type="date"
                      name="dateToAllCandidates"
                      value={dateToAllCandidates}
                      onChange={this.handleAllInputChange}
                    />
                  </FormGroup>
                </Col>

                <Col lg={2} md={12}>
                  <FormGroup>
                    <label htmlFor={dateFrom} className="date-filter-label">Date FollowUp From</label>
                    <Input
                      id="date-from"
                      type="date"
                      name="dateFollowUpFrom"
                      value={dateFollowUpFrom}
                      onChange={this.handleAllInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={2} md={12}>
                  <FormGroup>
                    <label htmlFor={dateTo} className="date-filter-label">Date FollowUp To</label>
                    <Input
                      id="date-to"
                      type="date"
                      name="dateFollowUpTo"
                      value={dateFollowUpTo}
                      onChange={this.handleAllInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={2} md={12}>
                  <FormGroup className="filter-select">
                    <Select
                      isMulti
                      value={selectPlatforms}
                      options={platforms}
                      placeholder="Platforms"
                      onChange={this.handlePlatformChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={2} md={12}>
                  <FormGroup className="filter-select">
                    <Select
                      isMulti
                      value={selectSeniority}
                      options={seniority}
                      placeholder="Seniority"
                      onChange={this.handleSeniorityChange}
                    />
                  </FormGroup>
                </Col>
              </> )
              :
              activeTabId === "2" ? (
                <>
                  <Col lg={2} md={12}>
                    <FormGroup>
                      <label htmlFor={dateFromSentCandidates} className="date-filter-label">Date From</label>
                      <Input
                        id="date-from"
                        type="date"
                        name="dateFromSentCandidates"
                        value={dateFromSentCandidates}
                        onChange={this.handleSentInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={2} md={12}>
                    <FormGroup>
                      <label htmlFor={dateToSentCandidates} className="date-filter-label">Date To</label>
                      <Input
                        id="date-to"
                        type="date"
                        name="dateToSentCandidates"
                        value={dateToSentCandidates}
                        onChange={this.handleSentInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={3} md={12}>
                    <FormGroup className="filter-select">
                      <Select
                        isMulti
                        value={selectPlatforms}
                        options={platforms}
                        placeholder="Platforms"
                        onChange={this.handlePlatformChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={3} md={12}>
                    <FormGroup className="filter-select">
                      <Select
                        isMulti
                        value={selectCompanies}
                        options={companies}
                        placeholder="Companies"
                        onChange={this.handleCompanyChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={2} md={12}>
                    <FormGroup className="filter-select">
                      <Select
                        isMulti
                        value={selectStatuses}
                        options={statuses}
                        placeholder="Statuses"
                        onChange={this.handleStatusChange}
                      />
                    </FormGroup>
                  </Col>
              </>) :
              (<>
                <Col lg={2} md={12}>
                  <FormGroup>
                    <label htmlFor={dateFromFreelancersCandidates} className="date-filter-label">Date From</label>
                    <Input
                      id="date-from"
                      type="date"
                      name="dateFromFreelancersCandidates"
                      value={dateFromFreelancersCandidates}
                      // onChange={this.handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={2} md={12}>
                  <FormGroup>
                    <label htmlFor={dateToFreelancersCandidates} className="date-filter-label">Date To</label>
                    <Input
                      id="date-to"
                      type="date"
                      name="dateToFreelancersCandidates"
                      value={dateToFreelancersCandidates}
                      // onChange={this.handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={3} md={12}>
                  <FormGroup className="filter-select">
                    <Select
                      isMulti
                      value={selectPlatforms}
                      options={platforms}
                      placeholder="Platforms"
                      onChange={this.handlePlatformChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={3} md={12}>
                  <FormGroup className="filter-select">
                    <Select
                      isMulti
                      value={selectCompanies}
                      options={companies}
                      placeholder="Companies"
                      onChange={this.handleCompanyChange}
                    />
                  </FormGroup>
                </Col>
                <Col lg={2} md={12}>
                  <FormGroup className="filter-select">
                    <Select
                      isMulti
                      value={selectStatuses}
                      options={statuses}
                      placeholder="Statuses"
                      onChange={this.handleStatusChange}
                    />
                  </FormGroup>
                </Col>
              </>
            )}
          </Row>
        ) : null}
      </Form>
    );
  }
}

export default CandidatesForm;
