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
    platform_id: [],
    seniority_id: [],
    company_id: [],
    location_id: [],
    user_ids: [],
    salary: 0,
    comment: "",
    link: "",
    selectedVacancyStatus: 0,
    description: EditorState.createEmpty(),
    details: EditorState.createEmpty()
  };

  
  

  handleInputChange = ({target: {name, value}}) => {
    this.setState({[name]: value});
  };

  handleSalaryChange = ({target: {salary, value}}) => {
    this.setState({
      salary: parseInt(value)
    });
  };

  handleDescriptionStateChange = description => {
    this.setState({description});
  };

  handleDetailsStateChange = details => {
    this.setState({details});
  };

  handlePlatformChange = value => {
    this.setState({platform_id: value});
    document.querySelector('.platform_div > div').classList.remove('error');
  };

  handleSeniorityChange = value => {
    this.setState({seniority_id: value});
    document.querySelector('.seniority_div > div').classList.remove('error');
  };

  handleCompanyChange = value => {
    this.setState({company_id: value});
  };

  handleLocationChange = value => {
    this.setState({location_id: value});
    document.querySelector('.location_div > div').classList.remove('error');
  };

  handleLinkChange = value => {
    this.setState({link: value});
    document.querySelector('.link_div').classList.remove('error');
  };

  handleRecruiterChange = value => {
    this.setState({user_ids: value});
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
      const getCurrentCompany = this.props.location.state.fromCompany;
      const company_id = getCurrentCompany;
      company_id.label = company_id.name;
      company_id.value = company_id.name;

      console.log(company_id);
  
      this.setState({
        company_id: company_id
      });
    }


    // {
    //   const getCurrentCompany = this.props.location.state.fromCompany;
    //   this.setState({company_id: getCurrentCompany});
    // }
    // console.log(this.props.location.state.fromCompany);
    // console.log(this.setState.company_id)

    
  
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
      description: descriptionEditorState.toString().trim(),
      details: detailsEditorState.toString().trim(),
    };

    let errList = document.querySelector('.error');

    if (errList !== null) {
      errList.classList.remove('error');
    }

    let {
      platform_id,
      seniority_id,
      company_id,
      location_id,
      user_ids,
      salary,
      link,
      // description,
      // details
    } = this.state;
    console.log(company_id);
  console.log(user_ids);
  // console.log(user_ids.id);


    let isValid = true;


    if (descriptionEditorState.toString().trim() === "<p></p>") {
    
    }


    if (detailsEditorState.toString().trim() === "<p></p>") {
      
    }

    if ( vacancy.platform_id.length === 0) {
      document.querySelector('.platform_div > div').classList.add('error');
      isValid = false;
    }  else {
      platform_id = platform_id.id
    }

   if ( vacancy.seniority_id.length === 0) {
     document.querySelector('.seniority_div > div').classList.add('error');
     isValid = false;
   }  else {
    seniority_id = seniority_id.id
  }

    if ( vacancy.location_id.length === 0) {
      document.querySelector('.location_div > div').classList.add('error');
      isValid = false;
    }  else {
      location_id = location_id.id
    }

  //   if (vacancy.user_ids.length === 0) {
  //    document.querySelector('.recruiters_div > div').classList.add('error');
  //    isValid = false;
  //  }  else {
  //   // user_ids = user_ids.id
  // }

    if (company_id.currentCompany !== undefined) {
      company_id = company_id.currentCompany;
    }

    if (company_id.id !== undefined) {
      company_id = company_id.id;
    }
    company_id = Number(company_id);

    //  let result = user_ids.map(user_ids => user_ids.id)
    // user_ids = result
    

   
   if (vacancy.link === "") {
    document.querySelector('.link_div').classList.add('error');
    isValid = false;
    }
    console.log(user_ids);
    console.log(vacancy);

    

    if (isValid) {
      const vacancy = {
        company_id: company_id,
        platform_id: platform_id,
        seniority_id: seniority_id,
        location_id: location_id,
        salary: salary,
        link: link,
        description: descriptionEditorState.toString().trim(),
        details: detailsEditorState.toString().trim(),
        user_ids: user_ids.map(user_ids => user_ids.id)
        
        // about: aboutEditorState
      };
      console.log(user_ids);
      console.log(vacancy)
      

      


      if (salary === 0) {
        delete vacancy.salary
      }
      
      if (company_id === undefined) {
        delete vacancy.company_id
      }

      if (description.length === 0) {
        delete vacancy.description
      }

      onCreateVacancy(vacancy);
      console.log(vacancy);
    }
    console.log(vacancy);
  };

  render() {
    const {
      platform_id,
      seniority_id,
      company_id,
      location_id,
      user_ids,
      salary,
      link,
      selectedVacancyStatus,
      description, 
      details
    } = this.state;
    const {
      options: {platforms, seniority, companies, location, recruiters}
    } = this.props;
    console.log(company_id);
    

   



    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={9}>
            <Card>
              <CardBody>
                <h6 className={"description_div"}>Description</h6>
                <Editor
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
                <h6 className={"details_div"}>Description for Freelancers</h6>
                <Editor
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
                    <FormGroup className={"platform_div"}>
                      <Select
                        value={platform_id}
                        options={platforms}
                        placeholder="Platform"
                        onChange={this.handlePlatformChange}
                      />
                    </FormGroup>
                    <FormGroup className={"seniority_div"}>
                      <Select
                        value={seniority_id}
                        options={seniority}
                        placeholder="Seniority"
                        onChange={this.handleSeniorityChange}
                      />
                    </FormGroup>
                    <FormGroup className={"companies_div"}>
                      <Select
                        // value={(fromCompany) => fromCompany.currentCompany}
                        // label={(fromCompany) => fromCompany.name}
                        value={company_id}
                        options={companies}
                        placeholder="Company"
                        onChange={this.handleCompanyChange}
                      />
                    </FormGroup>
                    <FormGroup className={"recruiters_div"}>
                    <Select
                      value={user_ids}
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
                        value={location_id}
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
                          type="number"
                          min={0}
                          name="salary"
                          value={salary}
                          // required={true}
                          placeholder="0"
                          onChange={this.handleSalaryChange}
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
                      <Col className={"link_div"}>
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
                        <i className="fa fa-pause-circle"/>
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
                    <Row>
                  <Col md="10" className={"errorlist"} row>
                    <label>
                    </label>
                  </Col>
                </Row>
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
 