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
    defaultSelectedtag: PropTypes.func.isRequired,
    onUploadAvatar: PropTypes.func.isRequired,
    onCreateCandidate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
   
    this.setState({});
  }

  

  state = {
    avatar: noAvatar,
    name: "",
    platform: [],
    platform_id: [],
    seniority_id: [],
    tag_id: {},
    selectedReason: {},
    selectedVacancies: [],
    vacancies: [],
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
    about: EditorState.createEmpty(),
  };

  
  // setState ({platform_id: platform_id})
  
  

  componentDidMount() { // тут пишеться те, що потрібно підгрузити з АПІ
    // this.state.tag_id = this.props.tag_id;
    const  {vacancies} = this.props;
    // let platform_id = this.setState ({platform_id: platform_id})
    console.log (vacancies);
    // console.log (platform_id);
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
    let s = [name]
    document.querySelector('.' + s + '_div').classList.remove('error');
    let lblErrors = document.querySelector(".errorlist label");
    lblErrors.textContent = (" ")
  };

  handlePlatformChange = value => {
    this.setState({platform_id: value});
    const {vacancies} = this.props;
    // lblErrors.textContent = (" ");
    document.querySelector('.platform_div > div').classList.remove('error');

    console.log(value, vacancies);

    let platformVacancies = [];
    if (value !== undefined && vacancies !== undefined) {
      vacancies.map((vacancy) => {
        if (vacancy.platform_id === value.id) {
          platformVacancies.push(vacancy);
        }
      });
      this.setState({
        platformVacancies: platformVacancies
      });
    }
  };

  // handlePlatformChange = value => {
  //   this.setState({platform_id: value});

  //   let platform_id = this.setState.platform_id;
  //   let vacancies = this.state.vacancies;
  //   console.log (platform_id);
  //   console.log (this.state.platform_id);
  //   console.log (this.state.platform_id.id);

   
  //   let platformVacancies = [];
    // if (platform_id !== undefined && vacancies !== undefined) {
    //   this.state.vacancies.map((vacancy) => {
    //     if (vacancy.platform_id === platform_id) {
    //       platformVacancies.push(vacancy);
    //       console.log (platformVacancies);
    //     }
    //   });
    // }
  // };
  // handlePlatformChange = value => {
  //   this.setState({platform_id: value});
  //   document.querySelector('.platform_div > div').classList.remove('error');
  //   let platformVacancies = [];
  //   if ( (this.state.platform_id !== undefined)  && (this.state.vacancies !== undefined) ){
  //     vacancies.map((this.state.vacancy) => {
  //       if (vacancy.platform_id === this.state.platform.id) {
  //         platformVacancies.push(vacancy);
  //       }
  //     })
  //   }

  // }

  handletagsChange = value => {
    this.setState({tag_id: value});
    this.setState({selectedReason: undefined});
  };

  handleLanguageChange = value => {
    this.setState({language: value});
  };

  // handleLinkedInChange = value => {
  //   this.setState({linkedIn: value});
  //   document.querySelector('.linkedIn_div').classList.remove('error');
    
  // };

  handleReasonChange = value => {
    this.setState({selectedReason: value});
  };

  handleSeniorityChange = value => {
    this.setState({seniority_id: value});
    document.querySelector('.seniority_div > div').classList.remove('error');
    // lblErrors.textContent = (" ")
  };

  handleAboutStateChange = about => {
    this.setState({about});
  };

  
  handleVacancyChange = value => {
    this.setState({
      selectedVacancies: value
    });
    console.log (this.state.vacancies);
    var selectedVacancies = this.state.vacancies.map(item => item.id);
    console.log(selectedVacancies);
    this.setState({
      selectedVacancies: value
    });
  };

  handleSalaryChange = value => {
    this.setState({salary: value});
    document.querySelector('.salary_div > div').classList.remove('error');
  };

  

  

  handleSubmit = event => {
    event.preventDefault();

    let {
      name,
      platform_id,
      seniority_id,
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
      tag_id,
      selectedReason,
      selectedVacancies,
      vacancies
    } = this.state;
    const {onCreateCandidate} = this.props;

    let errList = document.querySelector('.error');

    if (errList !== null) {
      errList.classList.remove('error');
    }

    let isValid = true;

    
    let lblErrors = document.querySelector(".errorlist label");
    

    if (platform_id.length === 0) {
      document.querySelector('.platform_div > div').classList.add('error');
      isValid = false;
      lblErrors.textContent = ("platform_id не выбрано")
    } else {
      platform_id = platform_id.id
    }

    if (seniority_id.length === 0) {
      document.querySelector('.seniority_div > div').classList.add('error');
      isValid = false;
      lblErrors.textContent = ("seniority_id не выбрано")
    } else {
      seniority_id = seniority_id.id
    }


    if (tag_id === 3 && selectedReason !== undefined || tag_id !== 3) {

      tag_id = (selectedReason !== undefined && Object.keys(selectedReason).length > 0) ? selectedReason : tag_id;

      language = typeof language === 'object' ? language.id : '';

    } 

    if (selectedVacancies !== undefined) {
      vacancies = this.state.selectedVacancies.map(item => item.id);
      }
           
     else{
      document.querySelector('.reasons_div > div').classList.add('error');
      isValid = false;
    }

    
    if (tag_id.length === 0) {
      // tag_id = tag_id.id;
      document.querySelector('.tag_div > div').classList.add('error');
      isValid = false;
    } else {
      tag_id = tag_id.id
    }

    if (linkedIn.length !== 0 && !linkedIn.match('https:\/\/www.linkedin.com\/in\/[A-Za-z%0-9-]*\/')) {
      isValid = false;
      document.querySelector('.linkedIn_div').classList.add('error');
      lblErrors.textContent = ("Нужно ввести ссылку linkedIn")
    } 

    if (salary.length !== 0 && !salary.match ('^[1-9]\d*')) {
      isValid = false;
      document.querySelector('.salary_div').classList.add('error');
      lblErrors.textContent = ("Зарплата не может начинаться с 0")
    }

    if (email.length !== 0 && !email.match ('[A-Za-z%0-9-]+\@+[A-Za-z%0-9-]+\.+[A-Za-z%0-9-]+')) {
      isValid = false;
      document.querySelector('.email_div').classList.add('error');
      lblErrors.textContent = ("Неправильный email")
    }
    

    if (isValid) {
      const newCandidate = {
        name,
        platform_id,
        seniority_id,
        tag_id,
        salary,
        language,
        phone,
        skype,
        email,
        linkedIn,
        resume,
        comment,
        vacancies
        // about: aboutEditorState
      };

      if (salary === "") {
        delete newCandidate.salary
      }

      if (language === "") {
        delete newCandidate.language
      }

      if (phone === "") {
        delete newCandidate.phone
      }

      if (skype === "") {
        delete newCandidate.skype
      }

      if (email === "") {
        delete newCandidate.email
      }

      if (linkedIn === "") {
        delete newCandidate.linkedIn
      }

      if (resume === "") {
        delete newCandidate.resume
      }

      if (comment === "") {
        delete newCandidate.comment
      }

      if (selectedVacancies.length === 0) {
        delete newCandidate.selectedVacancies
      }

      if (selectedReason === ""){
        delete newCandidate.selectedReason
      }

      if (vacancies === undefined){
        delete newCandidate.vacancies
      }

      console.log(newCandidate);
      onCreateCandidate(newCandidate);
    }
  };

  ReasonFormGroup = () => {
    const {reasons} = this.props;
    const {tag_id, selectedReason} = this.state;

    if ((tag_id !== undefined && tag_id !== null && tag_id.id === 3) || (selectedReason !== undefined && selectedReason.length > 0)) {

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
      platform_id,
      seniority_id,
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
    let {tag_id} = this.state;
    const {platforms, seniorities, tags, defaultSelectedtag} = this.props;

    if (Object.keys(tag_id).length === 0 && Object.keys(defaultSelectedtag).length > 0) {
      tag_id = defaultSelectedtag;
      this.setState({tag_id: tag_id});
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
                {platform_id.label && (
                  <ListGroupItem className={styles.listGroupItem}>
                    {platform_id.label}
                  </ListGroupItem>
                )}
                {seniority_id.label && (
                  <ListGroupItem className={styles.listGroupItem}>
                    {seniority_id.label}
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
                        Name<font color="red">*</font>
                      </Label>
                      <Col sm={9}>
                        <Input
                          required  
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
                      {/* <Label sm={3}>
                      </Label> */}
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="platform" sm={3}>
                        Platform<font color="red">*</font>
                      </Label>
                      <Col sm={9}  className={"platform_div"}>
                        <Select
                          required
                          id="platform"
                          value={platform_id}
                          placeholder="Platform"
                          options={platforms}
                          onChange={this.handlePlatformChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup  row>
                      <Label for="seniorities" sm={3}>
                        Seniorities<font color="red">*</font>
                      </Label>
                      <Col sm={9}className={"seniority_div"}>
                        <Select
                          required
                          id="seniorities"
                          value={seniority_id}
                          placeholder="Seniorities"
                          options={seniorities}
                          onChange={this.handleSeniorityChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup className={"language_div"} row>
                      <Label for="language" sm={3}>
                        Language
                      </Label>
                      <Col sm={9}>
                        <Select
                          required
                          id="language"
                          value={language}
                          options={languages}
                          isClearable
                          placeholder="language"
                          onChange={this.handleLanguageChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup  row>
                      <Label for="salary" sm={3}>
                        Salary
                      </Label>
                      <Col sm={9} className={"salary_div"}>
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
                    <FormGroup className={"tag_div"} row>
                      <Label for="tags" sm={3}>
                        tag
                      </Label>
                      <Col sm={9}>
                        <Select
                          required
                          id="tags"
                          options={tags}
                          value={tag_id}
                          placeholder="tag"
                          onChange={this.handletagsChange}
                        />
                      </Col>
                    </FormGroup>
                    {this.ReasonFormGroup()}
                    <FormGroup row>
                      <Label for="phone" sm={3}>
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
                      <Col sm={9} className={"email_div"}>
                        <Input
                          id="email"
                          type="text"
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
                      <Col sm={9} className={"linkedIn_div"}>
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
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Label for="comment"> Comment </Label>
                     <Input
                      id="comment"
                      type="textarea"
                      name="comment"
                      value={comment}
                      onChange={this.handleInputChange}/>
                  </Col>
                </Row>
                <Row>
                  <label></label> 
                </Row>
                <Row>
                  <Col md="10" className={"errorlist"} row>
                    <label>
                    </label>
                  </Col>
                  <Col md="2" style={{justifyContent: "flex-end"}}>
                    <Button type="submit" color="primary" block>
                        Save
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
} 

  

