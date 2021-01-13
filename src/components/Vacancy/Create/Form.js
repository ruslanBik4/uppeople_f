// Core
import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  Input,
  Row
} from "reactstrap";
import {Editor} from "react-draft-wysiwyg";
import {EditorState, convertToRaw} from "draft-js";
import draftToHtml from "draftjs-to-html";
// Components
import Select from "../../shared/Select";
// Instruments
import "./Form.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class VacancyCreateForm extends Component {
  static propTypes = {
    options: PropTypes.shape({
      platforms: PropTypes.arrayOf(
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
      companies: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          value: PropTypes.string.isRequired
        }).isRequired
      ).isRequired,
      location: PropTypes.arrayOf(
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
    selectPlatform: [],
    selectSeniority: [],
    selectCompany: [],
    selectLocation: [],
    selectRecruiter: [],
    salary: "",
    comment: "",
    link: "",
    selectedVacancyStatus: 0,
    description: EditorState.createEmpty(),
    details: EditorState.createEmpty()
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  handleDescriptionStateChange = description => {
    this.setState({description});
  };

  handleDetailsStateChange = details => {
    this.setState({details});
  };

  handlePlatformChange = value => {
    this.setState({
      selectPlatform: value
    });
  };

  handleSeniorityChange = value => {
    this.setState({
      selectSeniority: value
    });
  };

  handleCompanyChange = value => {
    this.setState({
      selectCompany: value
    });
  };

  handleLocationChange = value => {
    this.setState({
      selectLocation: value
    });
  };

  handleRecruiterChange = value => {
    this.setState({
      selectRecruiter: value
    });
  };

  onRadioBtnClick = selectedVacancyStatus => {
    this.setState({selectedVacancyStatus});
  };

  componentDidUpdate(prevProps, prevState) {
    const {companies} = this.props.options;
    if (
      prevProps.options.companies.length !== companies.length &&
      this.props.location.state
    ) {
      const getCurrentCompany = companies.find(
        company => company.label === this.props.location.state.fromCompany
      );
      this.setState({selectCompany: getCurrentCompany});
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const {description, details} = this.state;
    const {onCreateVacancy} = this.props;

    const descriptionEditorState = draftToHtml(
      convertToRaw(description.getCurrentContent())
    );

    const detailsEditorState = draftToHtml(
      convertToRaw(details.getCurrentContent())
    );

    const vacancy = {
      ...this.state,
      description: descriptionEditorState,
      details: detailsEditorState
    };

    let errList = document.querySelector('.error');

    if (errList !== null) {
      errList.classList.remove('error');
    }

    let isValid = true;

    if (descriptionEditorState.toString().trim() == "") {
      document.querySelector('.description_div > div').classList.add('error');
      isValid = false;
    }

    if (detailsEditorState.toString().trim() == "") {
      document.querySelector('.details_div > div').classList.add('error');
      isValid = false;
    }

    if (typeof vacancy.selectPlatform !== 'object' ) {
      document.querySelector('.platforms_div > div').classList.add('error');
      isValid = false;
    }

    if (typeof vacancy.selectSeniority !== 'object' ) {
      document.querySelector('.seniority_div > div').classList.add('error');
      isValid = false;
    }

    if (typeof vacancy.selectCompany !== 'object' ) {
      document.querySelector('.companies_div > div').classList.add('error');
      isValid = false;
    }

    if (typeof vacancy.selectLocation !== 'object' ) {
      document.querySelector('.location_div > div').classList.add('error');
      isValid = false;
    }

    if (!(vacancy.selectRecruiter.length > 0)) {
      document.querySelector('.recruiters_div > div').classList.add('error');
      isValid = false;
    }

    if (isValid) {
      onCreateVacancy(vacancy);
    }
  };

  render() {
    const {
      selectPlatform,
      selectSeniority,
      selectCompany,
      selectLocation,
      selectRecruiter,
      salary,
      comment,
      link,
      selectedVacancyStatus,
      description,
      details
    } = this.state;
    const {
      options: {platforms, seniority, companies, location, recruiters}
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={9}>
            <Card>
              <CardBody>
                <h6>Description</h6>
                <Editor  className={"description_div"}
                  editorState={description}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                  // wrapperStyle={<wrapperStyleObject>}
                  // editorStyle={<editorStyleObject>}
                  // toolbarStyle={<toolbarStyleObject>}
                  localization={{
                    locale: "ru"
                  }}
                  onEditorStateChange={this.handleDescriptionStateChange}
                />
                <h6>Description for Freelancers</h6>
                <Editor className={"details_div"}
                  editorState={details}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                  localization={{
                    locale: "ru"
                  }}
                  onEditorStateChange={this.handleDetailsStateChange}
                />
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <FormGroup className={"platforms_div"}>
                      <Select
                        value={selectPlatform}
                        options={platforms}
                        placeholder="Platform"
                        onChange={this.handlePlatformChange}
                      />
                    </FormGroup>
                    <FormGroup className={"seniority_div"}>
                      <Select
                        value={selectSeniority}
                        options={seniority}
                        placeholder="Seniority"
                        onChange={this.handleSeniorityChange}
                      />
                    </FormGroup>
                    <FormGroup className={"companies_div"}>
                      <Select
                        value={selectCompany}
                        options={companies}
                        placeholder="Company"
                        onChange={this.handleCompanyChange}
                      />
                    </FormGroup>
                    <FormGroup className={"recruiters_div"}>
                    <Select
                      value={selectRecruiter}
                      isMulti
                      options={recruiters}
                      placeholder="Recruiter"
                      onChange={this.handleRecruiterChange}
                      className={"testtest"}
                      style={{zIndex: 2}}
                    />
                  </FormGroup>
                    <FormGroup className={"location_div"}>
                      <Select
                        value={selectLocation}
                        options={location}
                        placeholder="Location"
                        onChange={this.handleLocationChange}
                        style={{zIndex: 2}}
                      />
                    </FormGroup>
                    <FormGroup row>
                      <Col>
                        <Input
                          id="salary"
                          type="text"
                          name="salary"
                          value={salary}
                          required={true}
                          placeholder="Salary"
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem",

                          }}
                          className="cui-dollar icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    {/* <FormGroup row>
                      <Col>
                        <Input
                          id="comment"
                          type="textarea"
                          name="comment"
                          value={comment}
                          placeholder="Comment"
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
                          className="icon-note icons font-lg"
                        />
                      </Col>
                    </FormGroup> */}
                    <FormGroup row>
                      <Col>
                        <Input
                          id="link"
                          type="url"
                          name="link"
                          value={link}
                          placeholder="Link"
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
                          className="icon-link icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    <ButtonGroup
                      style={{display: "flex", marginBottom: "1rem"}}
                    >
                      <Button
                        className="btn-default"
                        active={selectedVacancyStatus === 0}
                        onClick={() => this.onRadioBtnClick(0)}
                      >
                        <i className="fa fa-fire"/>
                      </Button>
                      <Button
                        className="btn-default"
                        active={selectedVacancyStatus === 1}
                        onClick={() => this.onRadioBtnClick(1)}
                      >
                        <i className="fa fa-check-circle"/>
                      </Button>
                      <Button
                        className="btn-default"
                        active={selectedVacancyStatus === 2}
                        onClick={() => this.onRadioBtnClick(2)}
                      >
                        <i className="fa fa-history"/>
                      </Button>
                      <Button
                        className="btn-default"
                        active={selectedVacancyStatus === 3}
                        onClick={() => this.onRadioBtnClick(3)}
                      >
                        <i className="fa fa-ban"/>
                      </Button>
                    </ButtonGroup>
                    <FormGroup row>
                      <Col>
                        <Button type="submit" color="primary" block>
                          Save
                        </Button>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col>
                        <Link
                          to="/vacancies"
                          style={{textDecoration: "none"}}
                        >
                          <Button type="button" outline color="secondary" block>
                            Cancel
                          </Button>
                        </Link>
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Form>
    );
  }
}
