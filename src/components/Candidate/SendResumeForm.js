// Core
import React, {Component} from "react";
import PropTypes from "prop-types";
import {
  Button,
  Col,
  CustomInput,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
  Alert
} from "reactstrap";
// Components
import InnerHTMLMarkUp from "../InnerHTMLMarkUp";
import ControlledEditorForEmail from "../shared/ControlledEditorForEmail";
// Instruments

import styles from "./SendResumeForm.module.css";

const INITIAL_STATE = {
  companies: [],
  activeCompany: {
    comp_id: null,
    name: "",
    vacancy: [],
    contacts: [],
    sendDetails: ""
  },
  recruiters: [],
  emailSubject: "",
  emailTemplate: "",
  dataSent: false,
  customContent: null,
  checkedVacancies: new Map(),
  checkedEmails: new Map()
};

export default class CandidateSendResumeForm extends Component {
  static propTypes = {
    companies: PropTypes.array,
    emailSubject: PropTypes.string,
    emailTemplate: PropTypes.string,
    sendResume: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    companies: [],
    emailSubject: "",
    emailTemplate: "",
    dataSent: false
  };

  static getDerivedStateFromProps(nextProps) {
    if (typeof nextProps.dataForSendResumeForm !== 'undefined') {
      return {
        companies: nextProps.dataForSendResumeForm.companies,
        emailTemplate: nextProps.dataForSendResumeForm.emailTemplate
      };
    }

    return null;
  }

  state = {
    ...INITIAL_STATE
  };

  componentDidMount() {
    const {dataForSendResumeForm} = this.props;
    if (typeof dataForSendResumeForm !== 'undefined') {
      console.log(dataForSendResumeForm);

      let activeCompany = dataForSendResumeForm.companies !== undefined &&
      dataForSendResumeForm.companies.length > 0 ?
        dataForSendResumeForm.companies[0] :
        [];

      let activeVacancy = activeCompany.vacancy !== undefined &&
          activeCompany.vacancy.length > 0 ?
          activeCompany.vacancy[0] : [];

      let activeRecruiter = activeVacancy.user_ids !== undefined &&
          activeVacancy.user_ids.length > 0  ?
          activeVacancy.user_ids[0] : [];

      this.setState({
        activeCompany: activeCompany,
        activeVacancy: activeVacancy ,
        activeRecruiter: activeRecruiter,
        emailSubject: dataForSendResumeForm.emailSubject
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    // if (this.state.selectedRecruiter !== prevState.selectedRecruiter ||
    //   this.state.selectedCompany !== prevState.selectedCompany ||
    //   this.state.selectedVacancy !== prevState.selectedVacancy ||
    //   this.state.selectedTag !== prevState.selectedTag ||
    //   this.state.selectedStatuses !== prevState.selectedStatuses ||
    //   this.state.selectedStartDate !== prevState.selectedStartDate ||
    //   this.state.selectedEndDate !== prevState.selectedEndDate) {
    //   this.fetchCandidatesData();
  }

  setActiveCompany = id => {
    const {companies} = this.state;
    const activeCompany = companies.find(company => company.comp_id === id);
    console.log(companies);
    this.setState({
      activeCompany,
      checkedVacancies: new Map(),
      checkedEmails: new Map()
    });
  };

  handleInputChange = ({target: {name, value}}) =>
    this.setState({[name]: value});

  handleCheckboxVacancyChange = ({target: {id, checked}}) => {
    const item = id;
    const isChecked = checked;
    this.setState(prevState => ({
      checkedVacancies: prevState.checkedVacancies.set(item, isChecked)
    }));
  };

  handleCheckboxEmailChange = ({target: {name, checked}}) => {
    const item = name;
    const isChecked = checked;

    this.setState(prevState => ({
      checkedEmails: prevState.checkedEmails.set(item, isChecked)
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      activeCompany: {comp_id},
      checkedVacancies,
      checkedEmails,
      emailSubject,
      customContent,
      emailTemplate
    } = this.state;

    const {
      candidateId,
      freeLancerId,
      sendResume,
      onRequestClose
    } = this.props;

    const checkedVacanciesEntries = Array.from(checkedVacancies);

    const checkedEmailsEntries = [...checkedEmails];

    const freelancerId = freeLancerId ? freeLancerId : null;
    const content = {
      comp_id,
      freelancerId,
      checkedVacanciesEntries,
      checkedEmailsEntries,
      emailSubject,
      emailTemplate: customContent ? customContent.content : emailTemplate
    };
    console.log(candidateId, content);

    if (comp_id && checkedVacanciesEntries && checkedEmailsEntries) {
      sendResume(candidateId, content);
    } else {
      alert('Please, choiche company!');
      return;
    }

    this.setState({dataSaved: true});


    this.resetForm();

    onRequestClose();
    //window.location.reload();
  };

  resetForm = () => this.setState({...INITIAL_STATE});

  render() {
    console.log(this.state);
    const {
      companies,
      activeCompany: {comp_id, vacancy, contacts, sendDetails},
      emailSubject,
      emailTemplate,
      checkedVacancies,
      checkedEmails
    } = this.state;

    const companiesListJSX =
      companies.length > 0 &&
      companies.map(company => (
        <ListGroupItem
          key={`${company.comp_id}-${company.name}`}
          active={company.comp_id === comp_id}
          style={{minHeight: 30}}
          onClick={() => this.setActiveCompany(company.comp_id)}
        >
          {company.name}
        </ListGroupItem>
      ));

    const companyVacanciesJSX =
      this.state.activeCompany.vacancy !== undefined &&
      vacancy.map(vacancy => (
        <ListGroupItem
          style={{width: "100%"}}
          key={`${comp_id}-${vacancy.id}`}
        >
          <CustomInput
            type="checkbox"
            id={vacancy.id}
            checked={checkedVacancies.get(vacancy.id)}
            label={`${vacancy.platform !== null ? vacancy.platform : ""} ${
              vacancy.seniority !== null ? vacancy.seniority : ""
            } ${vacancy.salary !== null ? vacancy.salary : ""} ${
              vacancy.details !== null ? vacancy.details : ""
            } ${vacancy.location !== null ? vacancy.location : ""}`}
            onChange={this.handleCheckboxVacancyChange}
          />
        </ListGroupItem>
      ));

    // console.log(vacancy);
    // console.log(checkedVacancies);
    // const vacancyRecruitersJSX =
    //   this.state.activeCompany.vacancy.userIds !== undefined &&
    //   vacancy.userIds.map(vacancy => (
    //     <ListGroupItem
    //       style={{width: "100%"}}
    //       key={`${vacancy.comp_id}-${vacancy.vacId}`}
    //     >
    //       <CustomInput
    //         type="checkbox"
    //         id={vacancy.vacId}
    //         checked={checkedVacancies.get(vacancy.vacId)}
    //         label={`${vacancy.platform !== null ? vacancy.platform : ""} ${
    //           vacancy.seniority !== null ? vacancy.seniority : ""
    //         } ${vacancy.salary !== null ? vacancy.salary : ""} ${
    //           vacancy.details !== null ? vacancy.details : ""
    //         } ${vacancy.location !== null ? vacancy.location : ""}`}
    //         onChange={this.handleCheckboxVacancyChange}
    //       />
    //     </ListGroupItem>
    //   ));

    const companyContactsJSX =
      this.state.activeCompany.contacts !== undefined &&
      this.state.activeCompany.contacts !== null &&
      contacts.map(contact => (
        <ListGroupItem
          style={{width: "100%"}}
          key={`${comp_id}-${contact.id}`}
        >
          <CustomInput
            type="checkbox"
            id={contact.email}
            name={contact.email}
            checked={checkedEmails.get(contact.email)}
            label={`${contact.email} ${contact.name}`}
            onChange={this.handleCheckboxEmailChange}
          />
        </ListGroupItem>
      ));

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row style={{marginBottom: "1.5rem"}}>
          <Col md={4}>
            <Label for="exampleCheckbox" className={styles.label}>
              Companies
            </Label>
            <ListGroup flush style={{maxHeight: 300, overflow: "scroll"}}>
              {companiesListJSX}
            </ListGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCheckbox">Vacancies</Label>
              {companyVacanciesJSX}
            </FormGroup>
          </Col>
          {/*<Col md={3}>*/}
          {/*  <FormGroup>*/}
          {/*    <Label for="exampleCheckbox">Recruiter</Label>*/}
          {/*    {vacancyRecruitersJSX}*/}
          {/*  </FormGroup>*/}
          {/*</Col>*/}
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCheckbox" className={styles.label}>
                Contacts
              </Label>
              {companyContactsJSX}
            </FormGroup>
          </Col>
        </Row>
        <Row style={{marginBottom: "1.5rem"}}>
          <Col>
            <InnerHTMLMarkUp content={sendDetails}/>
          </Col>
          <Col>
            <Input
              type="text"
              style={{marginBottom: "1.5rem"}}
              name="emailSubject"
              value={emailSubject}
              onChange={this.handleInputChange}
            />
            <ControlledEditorForEmail
              content={emailTemplate}
              close={() => {
              }}
              onUpdate={content => {
                this.setState({customContent: content});
              }}
              //==================================
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button disabled={!companyVacanciesJSX.length} type="submit" color="primary" className="pull-right">
              <i className="icon-paper-plane icons font-lg"/> Send
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
