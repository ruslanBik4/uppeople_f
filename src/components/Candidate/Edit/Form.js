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
import {EditorState, convertToRaw, ContentState} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
// Components
import Select from "../../shared/Select";
// Instruments
import noAvatar from "../../../assets/img/no_avatar.png";
import {getBase64} from "../../../utils/selectors";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./Form.module.css";
import styles2 from "./Custom.css";
import { platform } from "chart.js";

const style = {
  icon: {
    position: "absolute",
    top: "0.6rem",
    right: "1.75rem"
  }
};

export default class CandidateEditForm extends Component {
  static propTypes = {
    candidate: PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      // platform: PropTypes.shape({
      //   id: PropTypes.number,
      //   nazva: PropTypes.string
      // }),
      platform: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
      ]),
      // seniority_id: PropTypes.number,
      seniority_id: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number
      ]),
      date: PropTypes.string,
      salary: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      language: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      skype: PropTypes.string,
      linkedIn: PropTypes.string,
      resume: PropTypes.string,
      comment: PropTypes.string,
      // about: PropTypes.string,
      status: PropTypes.string,
      tag: PropTypes.string
    }).isRequired,
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
    onUploadAvatar: PropTypes.func.isRequired,
    onEditCandidate: PropTypes.func.isRequired
  };

  state = {
    avatar: null,
    name: "",
    // selectPlatform: [],
    // seniority_id: [],
    // tag_id: {},
    // vacancies: [],
    platform: [],
    seniority_id: [],
    vacancies: [],
    date: "",
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
    status: "",
    tag: "",
    about: EditorState.createEmpty(),

  };

  componentWillReceiveProps(nextProps) {
    // componentDidUpdate(prevProps) {

    const {candidate, platforms, seniorities, tags, reasons, reject_tag, vacancies} = nextProps;

    let platform_id = candidate.platform;
      if (candidate.platform !== null &&platforms.find) {
        platform.value = candidate.platform_id;
      }
    let tag_id = candidate.tag;
    let selectedReason = {};
    if (candidate.tag !== undefined && candidate.tag !== null) {
      tag_id.value = candidate.tag.name;
      tag_id.label = candidate.tag.name;

      for (const reason in reasons) {
        if (reasons[reason].id === tag_id.id) {
          selectedReason = tag_id;
          selectedReason.label = tag_id.name;
          selectedReason.value = tag_id.name;
          tag_id = reject_tag
        }
      }
    }

    let language = {};
    if (candidate.language !== undefined && candidate.language !== null) {
      language.id = candidate.language;
      language.value = candidate.language;
      language.label = candidate.language;
    }

    const seniority_id =
      candidate.seniority_id !== null &&
      seniorities.find(seniority => seniority.id === candidate.seniority_id);

    // let about = candidate.about;
    // const htmlAbout = candidate.about;
    //
    // if (htmlAbout) {
    //   const aboutBlock = htmlToDraft(htmlAbout);
    //   if (aboutBlock) {
    //     const contentState = ContentState.createFromBlockArray(
    //       aboutBlock.contentBlocks
    //     );
    //     about = EditorState.createWithContent(contentState);
    //   }
    // }
    let platformVacancies = [];
    if ( (platform_id !== undefined)  && (vacancies !== undefined) ){
      vacancies.map((vacancy) => {
        if (vacancy.platform_id === platform.id) {
          platformVacancies.push(vacancy);
        }
      })
    }

    this
      .setState({
        avatar: candidate.avatar,
        name: candidate.name,
        platform_id: platform_id,
        seniority_id: seniority_id,
        tag_id: tag_id,
        selectedReason: selectedReason,
        date: candidate.date,
        salary: candidate.salary,
        language: language,
        phone: candidate.phone,
        skype: candidate.skype,
        email: candidate.email,
        linkedIn: candidate.linkedIn,
        resume: candidate.resume,
        comment: candidate.comment,
        platformVacancies: platformVacancies,
        vacancies: candidate.vacancies
          // vacancies.map((vacancy) => {
        //   if (selectedPlatform !== undefined && vacancy.platform_id === selectedPlatform.id) {
        //     return vacancy;
        //   }
        // })
        // about: about,
      });
      console.log(candidate.linkedIn);
      console.log(selectedReason);
      }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {

    }
  }

  handleAvatarSelected = ({target}) => {
    const avatar = target.files[0];

    getBase64(avatar, result => {
      this.setState({
        avatar: result
        // updateImage: true
      });
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
      platform_id: value
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

  handleVacancyChange = value => {
    this.setState({
      vacancies: value
    });
  };

  handleSeniorityChange = value => {
    this.setState({
      seniority_id: value
    });
  };

  handleTagsChange = value => {
    this.setState({tag_id: value});
    this.setState({selectedReason: undefined});
  };

  handleLanguageChange = value => {
    this.setState({language: value});
  };

  handleLinkedInChange = value => {
    this.setState({linkedIn: value});
  };

  handleReasonChange = value => {
    this.setState({selectedReason: value});
  };

  // handleAboutStateChange = about => {
  //   this.setState({about});
  // };

  handleSubmit = event => {
    event.preventDefault();

    let {
      name,
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
      // 
      platform_id,
      seniority_id,
      tag_id,
      selectedReason,
      selectedVacancies,
      vacancies
    } = this.state;
    console.log(linkedIn);
    console.log(salary)
    console.log(tag_id);

    let isValid = true;

    if (isValid = true)  {
      platform_id = platform_id.id
    }

    if (seniority_id.length !== 0)  {
      seniority_id = seniority_id.id
    }

    if (document.querySelector('.reasons_div > div') !== null) {
      document.querySelector('.reasons_div > div').classList.remove('error');
    }

    if (tag_id !== undefined && tag_id.id === 3 && selectedReason !== undefined || tag_id.id !== 3) {

      tag_id = (selectedReason !== undefined && Object.keys(selectedReason).length > 0) ? selectedReason : tag_id;
      language = typeof language === 'object' ? language.id : '';

      if (isValid = true)  {
        tag_id = tag_id.id
      }

      if (!linkedIn === null || !linkedIn !== null && linkedIn.match('https:\/\/www.linkedin.com\/in\/[A-Za-z%0-9-]*\/')) {
        isValid = false
      }
      else {
        isValid = false
      }
      // if (linkedIn !== null && !linkedIn.match('https:\/\/www.linkedin.com\/in\/[A-Za-z%0-9-]*\/') || linkedIn.length === 0) {
      //   isValid = false;
      //   document.querySelector('.linkedIn_div').classList.add('error');
      // } 
  
      if (salary.length !== 0 && !salary.match ('^[1-9]\d*')) {
        isValid = false;
        document.querySelector('.salary_div').classList.add('error');
      }
  
      // if (email.length !== 0 && !email.match ('[.-\w]+@([\w-]+\.)+[\w]+')) {
      //   isValid = false;
      //   document.querySelector('.email_div').classList.add('error');
      // }



      const {onEditCandidate} = this.props;

      if (isValid) {
        const candidateInfo = {
          name,
          platform_id,
          seniority_id,
          tag_id,
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
  
        if (salary === "") {
          delete candidateInfo.salary
        }
  
        if (language === "") {
          delete candidateInfo.language
        }
  
        if (phone === "") {
          delete candidateInfo.phone
        }
   
        if (skype === "") {
          delete candidateInfo.skype
        }
  
        if (email === "") {
          delete candidateInfo.email
        }
  
        if (linkedIn === "") {
          delete candidateInfo.linkedIn
        }
  
        if (resume === "") {
          delete candidateInfo.resume
        }
  
        if (comment === "") {
          delete candidateInfo.comment
        }
  
        // if (selectedVacancies.length === 0) {
        //   delete candidateInfo.selectedVacancies
        // }
  
        if (selectedReason === ""){
          delete candidateInfo.selectedReason
        }
  
        
  
        console.log(candidateInfo);
        onEditCandidate(candidateInfo);
      }
    };
      // let aboutEditorState = '';
      // if (about !== null) {
      //   aboutEditorState = draftToHtml(
      //     convertToRaw(about.getCurrentContent())
      //   );
      // }
    // if (isValid) {
    //   const candidateInfo = {
    //     name,
    //     date,
    //     salary,
    //     language,
    //     phone,
    //     skype,
    //     email,
    //     linkedIn,
    //     resume,
    //     comment,
    //     // selectPlatform,
    //     platform,
    //     // seniority_id,
    //     seniority_id,
    //     // tag_id,
    //     // vacancies
    //     vacancies,
    //     // about: aboutEditorState
    //   };
    //     if (salary === "") {
    //       delete candidateInfo.salary
    //     }
    
    //     if (language === "") {
    //       delete candidateInfo.language
    //     }
    
    //     if (phone === "") {
    //       delete candidateInfo.phone
    //     }
    
    //     if (skype === "") {
    //       delete candidateInfo.skype
    //     }
    
    //     if (email === "") {
    //       delete candidateInfo.email
    //     }
    
    //     if (linkedIn === "") {
    //       delete candidateInfo.linkedIn
    //     }
    
    //     if (resume === "") {
    //       delete candidateInfo.resume
    //     }
    
    //     if (comment === "") {
    //       delete candidateInfo.comment
    //     }
    
    //     if (selectedVacancies.length === 0) {
    //       delete candidateInfo.selectedVacancies
    //     }
    
    //     if (selectedReason === ""){
    //       delete candidateInfo.selectedReason
    //     }
    //   };
    //   console.log(candidateInfo);
    //   onEditCandidate(candidateInfo);
    // }
    // } else {
    //   document.querySelector('.reasons_div > div').classList.add('error');
    // }
   
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
              isRequired
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
      tag_id,
      // date,
      salary,
      language,
      languages,
      platformVacancies,
      vacancies,
      phone,
      skype,
      email,
      linkedIn,
      resume,
      comment,
      // about
    } = this.state;

    let {date} = this.state;

    const {candidate, platforms, seniorities, tags, reasons, candidateStatus} = this.props;

    date = date.substring(0, 10);

    return (
      <Row>
        <Col md={3}>
          <Card className={styles.card}>
            <CardImg
              top
              // src={avatar}
              src={avatar !== null ? avatar : noAvatar}
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
                {platform !== undefined && (
                  <ListGroupItem className={styles.listGroupItem}>
                    Platform: {platform.label}
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
                        Name
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
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="platform_id" sm={3}>
                        Platform
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="platform_id"
                          options={platforms}
                          value={platform_id}
                          placeholder="Platform"
                          onChange={this.handlePlatformChange}
                        />

                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="seniority" sm={3}>
                        Seniority
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="seniority"
                          options={seniorities}
                          value={seniority_id}
                          placeholder="Seniority"
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
                    {/* <FormGroup row>
                      <Label for="date" sm={3}>
                        Date
                      </Label>
                      <Col sm={9}>
                        <Input
                          readonly
                          id="date"
                          type="date"
                          name="date"
                          value={date}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup> */}
                    <FormGroup row>
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
                      <Label for="salary" sm={3}>
                        Vacancies
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="language"
                          isMulti
                          value={vacancies}
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
                      <Label for="seniority" sm={3}>
                        Tag
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="tags"
                          options={tags}
                          value={tag_id}
                          placeholder="Tag"
                          onChange={this.handleTagsChange}
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
                        CV
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
