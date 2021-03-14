// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import moment from "moment";
// Components
import Select from "../shared/Select";
// Instruments
import { isEmpty } from "../../utils/selectors";
import { getDataForAppointInterviewForm } from "../../utils/api/candidate";
import noAvatar from "../../assets/img/no_avatar.png";

export default class AppointInterviewForm extends Component {
  static propTypes = {
    candidate: PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      platform: PropTypes.shape({
        id: PropTypes.number,
        nazva: PropTypes.string
      })
    }),
    appointInterview: PropTypes.func.isRequired,
    onRequestClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    candidate: {}
  };

  state = {
    dataForAppointInterviewForm: {},
    candidate: {},
    defaultCompany: [],
    optionsForSelectCompany: [],
    optionsForSelectContacts: [],
    optionsForSelectVacancy: [],
    selectedCompany: [],
    selectedVacancy: [],
    selectedContacts: [],
    date: "",
    time: "",
    comment: ""
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps) {
      return {
        candidate: nextProps.candidate
      };
    }

    return null;
  }

  componentDidMount() {
    const {
      candidate: { id }
    } = this.props;

    getDataForAppointInterviewForm(id).then(dataForAppointInterviewForm => {
      if (dataForAppointInterviewForm === 401) {
        this.props.history.push('/login/');
        return;
      }
      if (dataForAppointInterviewForm === 204 || isEmpty(dataForAppointInterviewForm)) {
        alert("Nothing to invite!");
        return;
      }

      this.setState(
        {
          dataForAppointInterviewForm
        },
        () => {
          const { dataForAppointInterviewForm } = this.state;
          const companies = dataForAppointInterviewForm;

            const optionsForSelectCompany = Object.keys(
              companies
            ).map(key => ({
              id: companies[key].comp_id,
              label: companies[key].name,
              value: companies[key].name
            }));


          const findActiveCompany = Object.values(
              companies
            ).find(
              obj =>  obj.comp_id === optionsForSelectCompany[0].id
            );

            const optionsForSelectVacancy =
              findActiveCompany["vacancies"] !== null
                ? Object.keys( findActiveCompany["vacancies"] ).map(key => ({
                    id: findActiveCompany["vacancies"][key].id,
                    label: findActiveCompany["vacancies"][key].platform
                          + findActiveCompany["vacancies"][key].salary
                          + findActiveCompany["vacancies"][key].seniority,
                    value: findActiveCompany["vacancies"][key].platform
                  }))
                  : this.state.optionsForSelectVacancy;

            const optionsForSelectContacts =
              findActiveCompany["contacts"] !== null
                ? Object.keys( findActiveCompany["contacts"] ).map(key => ({
                    id: findActiveCompany["contacts"][key].id,
                    label: findActiveCompany["contacts"][key].name,
                    value: findActiveCompany["contacts"][key].name,
                    email: findActiveCompany["contacts"][key].email
                  }))
                  : this.state.optionsForSelectContacts;

            this.setState({
              optionsForSelectCompany,
              optionsForSelectVacancy,
              optionsForSelectContacts,
              selectedCompany: optionsForSelectCompany[0],
              selectedContacts: optionsForSelectContacts,
              date: moment().format("YYYY-MM-DD"),
              time: moment().format("HH:mm")
            });

        }
      );
    });
    console.log(this);
  }

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleCompanyChange = value => {
    const { dataForAppointInterviewForm } = this.state;
    const findActiveCompany = Object.values(dataForAppointInterviewForm).find(
      obj => obj.comp_id === value.id
    );

    const optionsForSelectVacancy =
        findActiveCompany["vacancies"] !== null
            ? Object.keys( findActiveCompany["vacancies"] ).map(key => ({
              id: findActiveCompany["vacancies"][key].id,
              label: findActiveCompany["vacancies"][key].platform,
              value: findActiveCompany["vacancies"][key].platform
            }))
            : this.state.optionsForSelectVacancy;

    const optionsForSelectContacts =
        findActiveCompany["contacts"] !== null
            ? Object.keys( findActiveCompany["contacts"] ).map(key => ({
              id: findActiveCompany["contacts"][key].id,
              label: findActiveCompany["contacts"][key].name,
              value: findActiveCompany["contacts"][key].name
            }))
            : this.state.optionsForSelectContacts;

    this.setState({
      selectedCompany: value,
      selectedVacancy: [],
      selectedContacts: optionsForSelectContacts,
      optionsForSelectVacancy,
      optionsForSelectContacts
    });
  };

  handleVacancyChange = value => {
    this.setState({ selectedVacancy: value });
  };

  handleContactsChange = value => {
    this.setState({ selectedContacts: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { appointInterview, onRequestClose } = this.props;

    const {
      selectedCompany,
      selectedVacancy,
      selectedContacts,
      date,
      time,
      comment
    } = this.state;

    const content = {
      selectedCompany,
      selectedVacancy,
      selectedContacts,
      date,
      time,
      comment
    };

    appointInterview(content);
    onRequestClose();
  };

  render() {
    const {
      candidate: { avatar, name, platform },
      optionsForSelectCompany,
      optionsForSelectVacancy,
      optionsForSelectContacts,
      defaultCompany,
      selectedCompany,
      selectedVacancy,
      selectedContacts,
      date,
      time,
      comment
    } = this.state;
    console.log("DATA", this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={6}>
            <Card>
              <CardBody>
                <CardImg
                  top
                  src={avatar !== null ? avatar : noAvatar}
                  alt="avatar"
                />
                <CardTitle style={{ textAlign: "center", fontSize: "1rem" }}>
                  {name}
                </CardTitle>
                <CardSubtitle style={{ textAlign: "center", fontSize: "1rem" }}>
                  {platform && platform.nazva}
                </CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="time">Company</Label>
              <Select
                defaultValue={defaultCompany}
                value={selectedCompany}
                options={optionsForSelectCompany}
                placeholder="Choose company"
                onChange={this.handleCompanyChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="vacancy">Vacancy</Label>
              <Select
                value={selectedVacancy}
                options={optionsForSelectVacancy}
                placeholder="Choose vacancy"
                onChange={this.handleVacancyChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="vacancy">Contacts</Label>
              <Select
                isMulti
                value={selectedContacts}
                options={optionsForSelectContacts}
                placeholder="Choose contacts"
                onChange={this.handleContactsChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time</Label>
              <Input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="comment">Comment</Label>
              <Input
                type="textarea"
                id="comment"
                name="comment"
                value={comment}
                placeholder="Type a comment"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type="submit" color="primary" className="pull-right">
              Appoint
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}
