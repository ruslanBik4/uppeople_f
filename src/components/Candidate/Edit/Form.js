// Core
import React, {Component} from "react";
import PropTypes from "prop-types";
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
// Components
import Select from "../../shared/Select";
// Instruments
import noAvatar from "../../../assets/img/no_avatar.png";
import {getBase64} from "../../../utils/selectors";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from "./Form.module.css";
import styles2 from "./Custom.css";
import { platform } from "chart.js";
import { is } from "core-js/core/object";
import {getOptionsForSelects} from "../../../utils/api";

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
      file: PropTypes.object,
      name: PropTypes.string,
      platform_id: PropTypes.number,
      platform: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
      ]),
      selectedPlatforms: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
      ]),
      // seniority_id: PropTypes.number,
      seniority_id: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number
      ]),
      salary: PropTypes.number,
      id_languages: PropTypes.string,
      phone: PropTypes.string,
      email: PropTypes.string,
      skype: PropTypes.string,
      linkedIn: PropTypes.string,
      cv: PropTypes.string,
      comment: PropTypes.string,
      // about: PropTypes.string,
      status: PropTypes.string,
      tag: PropTypes.string,
      vacancies: PropTypes.array,
    }).isRequired,
    seniorities: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    platformVacancies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    platforms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    selectedVacancies: PropTypes.arrayOf(
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
    file: [],
    // selectPlatform: [],
    // seniority_id: [],
    // tag_id: {},
    platformVacancies: [],
    selectedVacancies: [],
    selectedPlatforms: [],
    platforms: [],
    seniority_id: [],
    vacancies: [],
    salary: 0,
    id_languages: "",
    languages: [],
    // languages: [
    //   {
    //     id: 'Beginner',
    //     label: 'Beginner',
    //     name: 'Beginner',
    //     value: 'Beginner'
    //   },
    //   {
    //     id: 'Elementary',
    //     label: 'Elementary',
    //     name: 'Elementary',
    //     value: 'Elementary'
    //   },
    //   {
    //     id: 'Pre-Intermediate',
    //     label: 'Pre-Intermediate',
    //     name: 'Pre-Intermediate',
    //     value: 'Pre-Intermediate'
    //   },
    //   {
    //     id: 'Intermediate',
    //     label: 'Intermediate',
    //     name: 'Intermediate',
    //     value: 'Intermediate'
    //   },
    //   {
    //     id: 'Upper Intermediate',
    //     label: 'Upper Intermediate',
    //     name: 'Upper Intermediate',
    //     value: 'Upper Intermediate'
    //   },
    //   {
    //     id: 'Advanced',
    //     label: 'Advanced',
    //     name: 'Advanced',
    //     value: 'Advanced'
    //   },
    //   {
    //     id: 'Proficiency',
    //     label: 'Proficiency',
    //     name: 'Proficiency',
    //     value: 'Proficiency'
    //   }
    // ],
    phone: "",
    email: "",
    skype: "",
    linkedIn: "",
    cv: "",
    comment: "",
    status: "",
    tag: "",

  };
 

  componentWillReceiveProps(nextProps) {
    // componentDidUpdate(prevProps) {

    const {candidate, seniorities, platforms,  reasons, reject_tag, vacancies} = nextProps;

    let languages = [];

    console.log(candidate.platform);
    console.log(this.state)
    console.log(candidate)
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

    const platformVacancies = vacancies.filter(vacancy => vacancy.platform_id === candidate.platforms)

    console.log(vacancies );
    console.log(selectedPlatforms);

    // const plVac = Object.keys(vacancies).filter(key => platforms.includes(platforms[key].id)).map(key => vacancies[key]);
    // console.log(plVac);

    // const platform = platforms.find( pl => pl.id === candidate.platform_id);

    let selectedPlatforms = [];

    this.setState({
        avatar: candidate.avatar,
        name: candidate.name,
        seniority_id,
        tag_id,
        selectedReason: selectedReason,
        salary: candidate.salary,
        id_languages: candidate.id_languages,
        phone: candidate.phone,
        skype: candidate.skype,
        email: candidate.email,
        linkedIn: candidate.linkedIn,
        cv: candidate.cv,
        comment: candidate.comment,
        platformVacancies,
        selectedVacancies: candidate.selectedVacancies,
        vacancies: candidate.vacancies,
        // selectedPlatforms: candidate.platforms,
      }); 
      console.log(candidate);
      console.log(candidate.vacancies);
      console.log(this.state);
      console.log(this.state.selectedPlatforms);
      console.log(candidate.cv);
        
      getOptionsForSelects().then(optionsForSelects => {
        const platforms = optionsForSelects.platforms;
        const languages = optionsForSelects.languages;
       
        this.setState({platforms});
        this.setState({languages});
      });
      console.log(platforms);
      console.log(this.props);
    
      console.log(this.state);
      selectedPlatforms = this.state.selectedPlatforms;
      languages = this.state.languages;
      console.log(languages);
      console.log(candidate);
      
      if (candidate.platforms !== undefined && platforms !== undefined ) {
        let newResult = Object.keys(platforms).filter(key => candidate.platforms.includes(platforms[key].id)).map(key => platforms[key]);
        console.log(newResult);
        this.setState({selectedPlatforms: newResult})
      }

      if (candidate.id_languages !== undefined && languages !== undefined ) {
        let newResult1 = languages.find(language =>language.id === candidate.id_languages);
        console.log(newResult1);
        this.setState({id_languages: newResult1})
      }

      console.log(candidate.platforms);
      console.log(vacancies);
      console.log(platforms);
      console.log(platforms);

      if (candidate.platforms !== undefined && vacancies !== undefined ) {
        let plVac = Object.keys(vacancies).filter(key => candidate.platforms.includes(vacancies[key].platform_id)).map(key => vacancies[key]);
        console.log(plVac);
        // let selectedVacancies = plVac;
        this.setState({selectedVacancies: plVac})
      }
      
      
      console.log(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state !== prevState) {
    }
  }

  handleAvatarSelected = ({target}) => {
    const avatar = target.files[0];

    getBase64(avatar, result => {
      this.setState({
        avatar: result,
        file : avatar
        // updateImage: true
      });
    }); 
  };

  handleAvatarUpload = () => {
    this.props.onUploadAvatar(this.state.file);
  };

  handleInputChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
    document.querySelector('.email_div').classList.remove('error');
    let lblErrors = document.querySelector(".errorlist label");
    lblErrors.textContent = (" ")
  };

  handlePlatformChange = value => {
    this.setState({selectedPlatforms: value});
    console.log(this.state.selectedPlatforms);

    
    
    // this.setState({
    //   platformVacancies
    // });
    // console.log(platformVacancies)
    

    // const {vacancies} = this.props;
    // //todo
    // const platformVacancies = vacancies.filter(vacancy => vacancy.platforms === value.id)

    // this.setState({
    //   platformVacancies
    // });
    // console.log(platformVacancies)

  };
 

  handleVacancyChange = value => {
    this.setState({
      selectedVacancies: value
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
    this.setState({id_languages: value});
  };

  handleLinkedInChange = value => {
    this.setState({linkedIn: value});
  };

  handleReasonChange = value => {
    this.setState({selectedReason: value});
    document.querySelector('.reasons_div').classList.remove('error');
  };

  // handleAboutStateChange = about => {
  //   this.setState({about});
  // };

  

  handleSubmit = event => {
    event.preventDefault();

    let {
      name,
      salary,
      id_languages,
      phone,
      skype,
      email,
      linkedIn,
      cv,
      comment,
      // about,
      platform,
      seniority_id,
      tag_id,
      selectedReason,
      selectedVacancies,
      platforms,
      languages,
      selectedPlatforms,
      
    } = this.state;

    console.log (this.state);

    
    let isValid = true;
    let lblErrors = document.querySelector(".errorlist label");

    try {

      if (seniority_id.length !== 0) {
        seniority_id = seniority_id.id
      }

      salary = Number(salary);

      if (tag_id !== undefined && tag_id.id === 3 && selectedReason !== undefined || tag_id.id !== 3) {

        tag_id = (selectedReason !== undefined && Object.keys(selectedReason).length > 0) ? selectedReason : tag_id;
      
      }

      if (selectedPlatforms !== undefined) {
        selectedPlatforms = selectedPlatforms.map(item => item.id)
      }

        name = name.trim();

        id_languages = id_languages.id;

        if (name === "") {
          // document.querySelector('.reasons_div').classList.add('error');
          isValid = false;
          lblErrors.textContent = ("name не должно быть пустым")
        }

        tag_id = tag_id.id
        // id_languages = id_languages.id
        platforms = selectedPlatforms.id

        if (tag_id === 3) {
          document.querySelector('.reasons_div').classList.add('error');
          isValid = false;
          lblErrors.textContent = ("Нужно выбрать reason")
        }

        
        if (email.length > 0 && !email.match('[A-Za-z%0-9-]+\@+[A-Za-z%0-9-]+\.+[A-Za-z%0-9-]+')) {
          isValid = false;
          document.querySelector('.email_div').classList.add('error');
          lblErrors.textContent = ("Неправильный email")
        }

        if (selectedPlatforms !== undefined) {
          platforms = this.state.selectedPlatforms.map(item => item.id);
        }

        console.log (this.state);
        console.log (selectedPlatforms);
        console.log (platforms);


        const {onEditCandidate} = this.props;

        if (isValid) {
          const vacancies = selectedVacancies !== undefined && selectedVacancies !== null && selectedVacancies.map(item => item.id)

          const candidateInfo = {
            name,
            seniority_id,
            tag_id,
            salary,
            id_languages,
            phone,
            skype,
            email,
            linkedIn,
            cv,
            comment,
            vacancies,
            platforms: selectedPlatforms,
            // about: aboutEditorState
          };
          console.log(candidateInfo)

          // if (salary === "" || salary === null) {
          //   delete candidateInfo.salary
          // }

          if (id_languages === "") {
            delete candidateInfo.language
          }

          // if (phone === "") {
          //   delete candidateInfo.phone
          // }

          if (vacancies === false) {
            delete candidateInfo.vacancies
          }


          // if (skype === "") {
          //   delete candidateInfo.skype
          // }

          // if (email === "") {
          //   delete candidateInfo.email
          // }

          if (linkedIn === "" || linkedIn === null) {
            delete candidateInfo.linkedIn
          }

          if (selectedReason === "") {
            delete candidateInfo.selectedReason
          }


          console.log(candidateInfo);
          console.log(vacancies);
          onEditCandidate(candidateInfo);
        }
      

      // if (!isValid) {
      //   if (lblErrors !== undefined) {
      //     lblErrors.textContent = 'There are som errors on input data. Please, fix it.'
      //   }
      // }

    } catch (error) {
      const errorMsg = 'There are some errors on preparing send data. Hate to developers:' +error
      if (lblErrors !== undefined) {
        lblErrors.textContent = errorMsg
      } else {
        alert(errorMsg)
      }
    }
  };

  ReasonFormGroup = () => {
    const {reasons} = this.props;
    const {tag_id, selectedReason} = this.state;

    if ((tag_id !== undefined && tag_id !== null && tag_id.id === 3) || (selectedReason !== undefined && selectedReason.length > 0)) {
      return (
        <FormGroup row>
          <Label for="reasons" sm={3}>
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
      platform,
      seniority_id,
      tag_id,
      salary,
      id_languages,
      languages,
      platformVacancies,
      selectedVacancies,
      phone,
      skype,
      email,
      linkedIn,
      cv,
      comment,
      selectedPlatforms,
      // about
    } = this.state;
    console.log(this.state);


    const {platforms, seniorities, tags} = this.props;

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
                {id_languages && (
                  <ListGroupItem>Languages: {id_languages.label}</ListGroupItem>
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
                      <Col sm={9} className={"name_div"}>
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
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="platform_id" sm={3}>
                        Platform<font color="red">*</font>
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="platform_id"
                          options={platforms}
                          value={selectedPlatforms}
                          placeholder="Platform"
                          isMulti
                          isClearable
                          onChange={this.handlePlatformChange}
                        />

                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="seniority" sm={3}>
                        Seniority<font color="red">*</font>
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
                      <Label for="id_languages" sm={3}>
                        Language
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="id_languages"
                          value={id_languages}
                          options={languages}
                          isClearable
                          placeholder="language"
                          onChange={this.handleLanguageChange}
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="salary" sm={3}>
                        Salary
                      </Label>
                      <Col sm={9} className={"salary_div"}>
                        <Input
                          id="salary"
                          type="number"
                          name="salary"
                          min = "0"
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
                      <Label for="vacancies" sm={3}>
                        Vacancies
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="vacancies"
                          isMulti
                          value={selectedVacancies}
                          options={platformVacancies}
                          isClearable
                          placeholder="choice vacancies"
                          onChange={this.handleVacancyChange}
                          style={{zIndex: 2}}
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
                      <Col sm={9} className={"email_div"}>
                        <Input
                          id="email"
                          // type="email"
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
                      <Label for="cv" sm={3}>
                        CV
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="cv"
                          type="url"
                          name="cv"
                          value={cv}
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
