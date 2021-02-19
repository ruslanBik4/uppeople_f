// Core
import React, {Component} from "react";
import PropTypes, { array } from "prop-types";
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
import {EditorState, convertToRaw, ContentState} from "draft-js";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
// Components
import Select from "../../shared/Select";
// Instruments
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Form.css";

export default class VacancyEditForm extends Component {
  static propTypes = {
    vacancy: PropTypes.shape({
      id: PropTypes.number,
      platform_id: PropTypes.number,
      seniority_id: PropTypes.number,
      company_id: PropTypes.number,
      location_id: PropTypes.number,
      status: PropTypes.number,
      salary: PropTypes.number,
      link: PropTypes.string,
      date: PropTypes.string,
      description: PropTypes.string,
      details: PropTypes.string,
      user_ids: PropTypes.array,
    }),
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
    onEditVacancy: PropTypes.func.isRequired
  };

  static defaultProps = {
    vacancy: {
      id: null,
      seniority_id: 0,
      platform_id: 0,
      company_id: 0,
      location_id: 0,
      status: 0,
      salary: 0,
      link: "",
      date: "",
      description: "",
      details: "",
      user_ids: [],
    }
  };

  state = {
    platform_id: [],
    seniority_id: [],
    company_id: [],
    user_ids: [],
    location_id: [],
    salary: 0,
    comment: "",
    link: "",
    status: 0,
    description: EditorState.createEmpty(),
    details: EditorState.createEmpty(),
  };

  componentDidUpdate(prevProps) {
    const {vacancy, options} = this.props;
    console.log(this.props);

    if (this.props !== prevProps) {
        const platform_id = options.platforms.find(
          platform => platform.id === vacancy.platform_id
        )

        this.setState({
          platform_id: platform_id
        });
 

        const seniority_id = options.seniority.find(
          seniority => seniority.id === vacancy.seniority_id
        );

        this.setState({
          seniority_id: seniority_id
        });


        const company_id = options.companies.find(
          company => company.id === vacancy.company_id
        );

        this.setState({
          company_id: company_id
        });

        console.log (this.props.vacancy.user_ids)
                
        const user_ids = options.recruiters.filter(
        recruiter => vacancy.user_ids.indexOf(recruiter.id) > -1)

        // console.log(vacancy.user_ids.indexOf(recruiter.id))
        this.setState({
          user_ids: user_ids
        });
       
      //   const user_ids = recruiters.filter(
      //     recruiter => vacancy.user_ids.indexOf(recruiter.id) > -1
      // );
      // this.setState({
      //   user_ids: user_ids
      // });

        
        console.log(user_ids)
      

        const location_id = options.location.find(
          location => location.id === vacancy.location_id
        );

        this.setState({
          location_id: location_id
        });


      const htmlDescription = vacancy.description;
      const descriptionBlock = htmlToDraft(htmlDescription);
      if (descriptionBlock) {
        const contentState = ContentState.createFromBlockArray(
          descriptionBlock.contentBlocks
        );
        const description = EditorState.createWithContent(contentState);

        this.setState({
          description
        });
      }

      const htmlDetails = vacancy.details;
      if (htmlDetails) {
        const detailsBlock = htmlToDraft(htmlDetails);
        if (detailsBlock) {
          const contentState = ContentState.createFromBlockArray(
            detailsBlock.contentBlocks
          );
          const details = EditorState.createWithContent(contentState);

          this.setState({
            details
          });
        }
      }

      const salary =  vacancy.salary;
      const comment = vacancy.comment !== null ? vacancy.comment : "";
      const link = vacancy.link ;
      const status = vacancy.status;

      this.setState({
        salary,
        comment,
        link,
        status
      });
    }
  }

  handleDescriptionStateChange = description => {
    this.setState({description});
  };

  handleDetailsStateChange = details => {
    this.setState({details});
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
      platform_id: value
    });
  };

  handleSeniorityChange = value => {
    this.setState({
      seniority_id: value
    });
  };

  handleCompanyChange = value => {
    this.setState({
      company_id: value
    });
  };

  handleRecruiterChange = value => {
    this.setState({
      user_ids: value
    });
  };

  handleLocationChange = value => {
    this.setState({
      location_id: value
    });
  };

  onRadioBtnClick = status => {
    this.setState({status});
  };

  handleSubmit = event => {
    event.preventDefault();

    const {description, details} = this.state;
    const {onEditVacancy} = this.props;

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
      comment,
      link,
      selectedVacancyStatus,
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
    console.log(platform_id)

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

    if (!vacancy.user_ids.length > 0) {
     document.querySelector('.recruiters_div > div').classList.add('error');
     isValid = false;
   }  else {
    user_ids = user_ids.map(user_ids => user_ids.id)
  }
  console.log(user_ids);

    if (vacancy.company_id !== undefined) {
      company_id = company_id.id;
    }

    //  let result = user_ids.map(user_ids => user_ids.id)
    // user_ids = result
    

   
   if (vacancy.link === "") {
    document.querySelector('.link_div').classList.add('error');
    isValid = false;
    }

    // let arr = user_ids
    // let result = arr.map(user_ids => user_ids.id)

    console.log(user_ids);
    console.log(vacancy);
    console.log(company_id);
   

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
        // user_ids: user_ids.map(user_ids => user_ids.id)
        
        user_ids: user_ids
        
        // about: aboutEditorState
      };
      console.log(vacancy);
      

      // if (vacancy.user_ids !== null &&  vacancy.user_ids !== undefined) {
      //   vacancy.user_ids = vacancy.user_ids.filter(
      //       recruiter => vacancy.user_ids.indexOf(recruiter.id) > -1
      //   );
      //   this.setState({
      //     user_ids: user_ids
      //   });
      // }  else {
      //   delete vacancy.user_ids;
      // } 

      // if (user_ids.length === 0) {
      //   delete vacancy.user_ids
      // }

      if (salary === 0) {
        delete vacancy.salary
      }
      
      if (company_id === undefined) {
        delete vacancy.company_id
      }

      if (description.length === 0) {
        delete vacancy.description
      }

      onEditVacancy(vacancy);
      console.log(vacancy);
    }
    console.log(vacancy);
  };
    

   

  render() {
    const {
      platform_id,
      seniority_id,
      company_id,
      user_ids,
      location_id,
      salary,
      comment,
      link,
      status,
      description,
      details
    } = this.state;
    const {
      options: {platforms, seniority, companies, location, recruiters},
      vacancy: {id}
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Row>
          <Col md={9}>
            <Card>
              <CardBody>
                <h6>Description</h6>
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
                <h6>Freelancer Description</h6>
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
                    <FormGroup>
                      <Select
                        value={platform_id}
                        options={platforms}
                        placeholder="Platform"
                        onChange={this.handlePlatformChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
                        value={seniority_id}
                        options={seniority}
                        placeholder="Seniority"
                        onChange={this.handleSeniorityChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Select
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
                    <FormGroup>
                      <Select
                        value={location_id}
                        options={location}
                        placeholder="Location"
                        onChange={this.handleLocationChange}
                      />
                    </FormGroup>
                    <FormGroup row>
                      <Col>
                        <Input
                          id="salary"
                          type="text"
                          name="salary"
                          value={salary}
                          placeholder="Salary"
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
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
                        active={status === 0}
                        onClick={() => this.onRadioBtnClick(0)}
                      >
                        <i className="fa fa-fire"/>
                      </Button>
                      <Button
                        className="btn-default"
                        active={status === 1}
                        onClick={() => this.onRadioBtnClick(1)}
                      >
                        <i className="fa fa-check-circle"/>
                      </Button>
                      <Button
                        className="btn-default"
                        active={status === 2}
                        onClick={() => this.onRadioBtnClick(2)}
                      >
                        <i className="fa fa-history"/>
                      </Button>
                      <Button
                        className="btn-default"
                        active={status === 3}
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
                          to={`/vacancies/${id}`}
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
