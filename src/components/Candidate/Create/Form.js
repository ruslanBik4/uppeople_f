// Core
import React, {Component} from "react";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardImg,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row
} from "reactstrap";
import {Editor} from "react-draft-wysiwyg";
import {EditorState, convertToRaw} from "draft-js";
import draftToHtml from "draftjs-to-html";
// Components
import Select from "../../shared/Select";
// Instruments
import noAvatar from "../../../assets/img/no_avatar.png";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./Form.module.css";
import styles2 from "./Custom.css";

const style = {
  icon: {
    position: "absolute",
    top: "0.6rem",
    right: "1.75rem"
  }
};

export default class CandidateCreateForm extends Component {
  static propTypes = {
    platforms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    seniorities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    defaultSelectedTag: PropTypes.func.isRequired,
    onUploadAvatar: PropTypes.func.isRequired,
    onCreateCandidate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    // console.log(props);
    // if (Object.keys(selectedTag).length === 0 && Object.keys(defaultSelectedTag).length > 0) {
    //   selectedTag = defaultSelectedTag;
    //   this.setState({selectedTag:selectedTag});
    //
    //   console.log(selectedTag);
    //   console.log(this.state.selectedTag);
    // }
    this.setState({});
  }

  state = {
    avatar: noAvatar,
    name: "",
    selectPlatform: [],
    selectSeniority: [],
    selectedTag: {},
    selectedReason: {},
    selectedVacancies: [],
    date: moment().format("YYYY-MM-DD"),
    salary: "",
    language: "",
    languages: [
      {
        id: 'Beginner',
        label: 'Beginner',
        name: 'Beginner',
        value: 'Beginner'
      },
      {
        id: 'Elementary',
        label: 'Elementary',
        name: 'Elementary',
        value: 'Elementary'
      },
      {
        id: 'Pre-Intermediate',
        label: 'Pre-Intermediate',
        name: 'Pre-Intermediate',
        value: 'Pre-Intermediate'
      },
      {
        id: 'Intermediate',
        label: 'Intermediate',
        name: 'Intermediate',
        value: 'Intermediate'
      },
      {
        id: 'Upper Intermediate',
        label: 'Upper Intermediate',
        name: 'Upper Intermediate',
        value: 'Upper Intermediate'
      },
      {
        id: 'Advanced',
        label: 'Advanced',
        name: 'Advanced',
        value: 'Advanced'
      },
      {
        id: 'Proficiency',
        label: 'Proficiency',
        name: 'Proficiency',
        value: 'Proficiency'
      }
    ],
    phone: "",
    email: "",
    skype: "",
    linkedIn: "",
    resume: "",
    comment: "",
    about: EditorState.createEmpty()
  };

  componentDidMount() { // тут пишеться те, що потрібно підгрузити з АПІ
    // this.state.selectedTag = this.props.selectedTag;
  }

  handleAvatarSelected = event => {
    this.setState({
      avatar: event.target.files[0]
    });
  };

  handleAvatarUpload = () => {
    this.props.onUploadAvatar(this.state.avatar);
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  handlePlatformChange = value => {
    this.setState({
      selectPlatform: value
    });

    const {vacancies} = this.props;
    let platformVacancies = [];
    if (value !== undefined) {
      vacancies.map((vacancy) => {
        if (vacancy.platform_id === value.id) {
          platformVacancies.push(vacancy);
        }
      })
    }

    this.setState({
      platformVacancies: platformVacancies
    });
  };

  handleTagsChange = value => {
    this.setState({selectedTag: value});
    this.setState({selectedReason: undefined});
  };

  handleLanguageChange = value => {
    this.setState({language: value});
  };

  handleReasonChange = value => {
    this.setState({selectedReason: value});
  };

  handleSeniorityChange = value => {
    this.setState({
      selectSeniority: value
    });
  };

  handleAboutStateChange = about => {
    this.setState({about});
  };

  handleVacancyChange = value => {
    this.setState({
      selectedVacancies: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let {
      name,
      selectPlatform,
      selectSeniority,
      date,
      salary,
      language,
      phone,
      skype,
      email,
      linkedIn,
      resume,
      comment,
      // about,
      selectedTag,
      selectedReason,
      selectedVacancies
    } = this.state;
    const {onCreateCandidate} = this.props;

    let errList = document.querySelector('.error');

    if (errList !== null) {
      errList.classList.remove('error');
    }

    if (name == "") {
      document.querySelector('input[name=name]').classList.add('error');
      throw new Error("name is required");
    }

    if (typeof selectPlatform !== 'object' ) {
      document.querySelector('label[for=platform]').classList.add('error');
      throw new Error("platform is required");
    }

    if (typeof selectSeniority !== 'object' ) {
      document.querySelector('label[for=seniority]').classList.add('error');
      throw new Error("Seniority is required");
    }
    // const aboutEditorState = draftToHtml(
    //   convertToRaw(about.getCurrentContent())
    // );

    if (document.querySelector('.reasons_div > div') !== null) {
      document.querySelector('.reasons_div > div').classList.remove('error');
    }

    if (selectedTag !== undefined && selectedTag.id === 3 && selectedReason !== undefined || selectedTag.id !== 3) {

      selectedTag = (selectedReason !== undefined && Object.keys(selectedReason).length > 0) ? selectedReason : selectedTag;

      language = typeof language === 'object' ? language.id : '';

      const newCandidate = {
        name,
        selectPlatform,
        selectSeniority,
        selectedTag,
        date,
        salary,
        language,
        phone,
        skype,
        email,
        linkedIn,
        resume,
        comment,
        selectedVacancies
        // about: aboutEditorState
      };

      console.log(newCandidate);
      onCreateCandidate(newCandidate);
    } else {
      document.querySelector('.reasons_div > div').classList.add('error');
    }
  };

  ReasonFormGroup = () => {
    const {reasons} = this.props;
    const {selectedTag, selectedReason} = this.state;

    if ((selectedTag !== undefined && selectedTag !== null && selectedTag.id === 3) || (selectedReason !== undefined && selectedReason.length > 0)) {

      return (
        <FormGroup row>
          <Label for="seniority" sm={3}>
            Reason
          </Label>
          <Col sm={9} className={"reasons_div"}>
            <Select
              id="reasons"
              options={reasons}
              value={selectedReason}
              placeholder="Reason"
              onChange={this.handleReasonChange}
            />
          </Col>
        </FormGroup>
      )
    }
  };

  render() {
    const {
      avatar,
      name,
      selectPlatform,
      selectSeniority,
      date,
      salary,
      language,
      languages,
      phone,
      skype,
      email,
      linkedIn,
      resume,
      comment,
      platformVacancies,
      selectedVacancies,
      // about
    } = this.state;
    let {selectedTag} = this.state;
    const {platforms, seniorities, tags, defaultSelectedTag} = this.props;

    if (Object.keys(selectedTag).length === 0 && Object.keys(defaultSelectedTag).length > 0) {
      selectedTag = defaultSelectedTag;
      this.setState({selectedTag: selectedTag});
    }

    return (
      <Row>
        <Col md={3}>
          <Card className={styles.card}>
            <CardImg
              top
              src={avatar}
              className={styles.cardLogo}
              alt="avatar"
            />
            <CardTitle className={styles.cardTitle}>{name}</CardTitle>
            <Input
              type="file"
              className={styles.cardInputFile}
              onChange={this.handleAvatarSelected}
            />
            <Button color="success" onClick={this.handleAvatarUpload}>
              Upload avatar
            </Button>
            <CardBody className={styles.cardBody}>
              <ListGroup flush>
                {selectPlatform.label && (
                  <ListGroupItem className={styles.listGroupItem}>
                    {selectPlatform.label}
                  </ListGroupItem>
                )}
                {selectSeniority.label && (
                  <ListGroupItem className={styles.listGroupItem}>
                    {selectSeniority.label}
                  </ListGroupItem>
                )}
                {date && (
                  <ListGroupItem>
                    Date: {moment(date).format("Do MMM YYYY")}
                  </ListGroupItem>
                )}
                {phone && <ListGroupItem>Phone: {phone}</ListGroupItem>}
                {skype && <ListGroupItem>Skype: {skype}</ListGroupItem>}
                {email && <ListGroupItem>Email: {email}</ListGroupItem>}
              </ListGroup>
            </CardBody>
          </Card>
          <Card>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Details</CardTitle>
            </CardHeader>
            <CardBody>
              <ListGroup flush>
                {language && (
                  <ListGroupItem>Languages: {language.label}</ListGroupItem>
                )}
                {comment && <ListGroupItem>Notes: {comment}</ListGroupItem>}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <CardHeader className={styles.cardHeader}>
              <CardTitle className={styles.cardTitle}>Settings</CardTitle>
            </CardHeader>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <Row>
                  <Col lg={6} md={12}>
                    <FormGroup row>
                      <Label for="name" sm={3}>
                        Name*
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="icon-user icons font-lg"
                        />
                      <Label for="nameError" sm={3}>
                      </Label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="platform" sm={3}>
                        Platform*
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="platform"
                          value={selectPlatform}
                          placeholder="Platform"
                          options={platforms}
                          onChange={this.handlePlatformChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="seniority" sm={3}>
                        Seniorities*
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="seniorities"
                          value={selectSeniority}
                          placeholder="Seniorities"
                          options={seniorities}
                          onChange={this.handleSeniorityChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="language" sm={3}>
                        Language
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="language"
                          value={language}
                          options={languages}
                          isClearable
                          placeholder="language"
                          onChange={this.handleLanguageChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="date" sm={3}>
                        Date
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="date"
                          type="date"
                          name="date"
                          value={date}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="salary" sm={3}>
                        Salary
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="salary"
                          type="text"
                          name="salary"
                          value={salary}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="cui-dollar icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    {/*<FormGroup row>*/}
                    {/*  <Label for="language" sm={3}>*/}
                    {/*    Languages*/}
                    {/*  </Label>*/}
                    {/*  <Col sm={9}>*/}
                    {/*    <Input*/}
                    {/*      id="language"*/}
                    {/*      type="text"*/}
                    {/*      name="language"*/}
                    {/*      value={language}*/}
                    {/*      onChange={this.handleInputChange}*/}
                    {/*    />*/}
                    {/*    <i*/}
                    {/*      style={style.icon}*/}
                    {/*      className="icon-speech icons font-lg"*/}
                    {/*    />*/}
                    {/*  </Col>*/}
                    {/*</FormGroup>*/}

                    <FormGroup row>
                      <Label for="language" sm={3}>
                        Vacancies
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="language"
                          isMulti
                          value={selectedVacancies}
                          options={platformVacancies}
                          isClearable
                          placeholder="vacancies"
                          onChange={this.handleVacancyChange}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={12}>
                    <FormGroup row>
                      <Label for="tags" sm={3}>
                        Tag
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="tags"
                          options={tags}
                          value={selectedTag}
                          placeholder="Tag"
                          onChange={this.handleTagsChange}
                        />
                      </Col>
                    </FormGroup>
                    {this.ReasonFormGroup()}
                    <FormGroup row>
                      <Label for="mobile" sm={3}>
                        Phone
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={phone}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="icon-phone icons font-lg"
                        />
                        <Label for="phoneError" sm={3}>
                        </Label>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="skype" sm={3}>
                        Skype
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="skype"
                          type="text"
                          name="skype"
                          value={skype}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="icon-social-skype icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="email" sm={3}>
                        Email
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="email"
                          type="email"
                          name="email"
                          value={email}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="icon-envelope icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="linkedIn" sm={3}>
                        LinkedIn
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="linkedIn"
                          type="url"
                          name="linkedIn"
                          value={linkedIn}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="icon-social-linkedin icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="resume" sm={3}>
                        Resume
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="resume"
                          type="url"
                          name="resume"
                          value={resume}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="icon-link icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="comment" sm={3}>
                        Comment
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="comment"
                          type="textarea"
                          name="comment"
                          value={comment}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={style.icon}
                          className="icon-note icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
                {/* <Row>*/}
                {/*   <Col>*/}
                {/*     <h6>About</h6>*/}
                {/*     <Editor*/}
                {/*       editorState={about}*/}
                {/*       wrapperClassName="wrapper-class"*/}
                {/*       editorClassName="editor-class"*/}
                {/*       toolbarClassName="toolbar-class"*/}
                {/*       // wrapperStyle={<wrapperStyleObject>}*/}
                {/*      // editorStyle={<editorStyleObject>}*/}
                {/*      // toolbarStyle={<toolbarStyleObject>}*/}
                {/*      localization={{*/}
                {/*        locale: "ru"*/}
                {/*      }}*/}
                {/*      onEditorStateChange={this.handleAboutStateChange}*/}
                {/*    />*/}
                {/*  </Col>*/}
                {/*</Row>*/}
                <Row style={{justifyContent: "flex-end"}}>
                  <FormGroup check>
                    <Col>
                      <Button type="submit" color="primary">
                        Save
                      </Button>
                    </Col>
                  </FormGroup>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
