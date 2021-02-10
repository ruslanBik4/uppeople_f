// Core
import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Button, ButtonGroup, Card, CardBody, Col, Row, Alert} from "reactstrap";
// Components
import CandidateProfileInfo from "./Info";
import InnerHTMLMarkUp from "../../InnerHTMLMarkUp";
import ControlledEditor from "../../shared/ControlledEditor";
import CandidateProfileTable from "./Table";
import CandidateProfileLogsList from "./LogsList";
import SendResumeForm from "../SendResumeForm";
import AppointInterviewForm from "../AppointInterviewForm";
import ModalToDelete from "../../shared/ModalToDelete";
import OpenClose from "../../../render_prop/OpenClose";
// HOC
import withToggleCardBody from "../../hoc/withToggleCardBody";
import withModalForLetter from "../../hoc/ModalForLetter/withModalForLetter";
import withModal from "../../hoc/withModal";
// Context
import {ModalConsumer} from "../../../providers/ModalProvider";
// Instruments
import {
  getCandidateProfile,
  updateCandidateProfile,
  deleteCandidateProfile,
  getDataForSendResumeForm,
  sendCandidateResume,
  appointInterviewForCandidate,
  getCadidateLogs,
  getCandidateComments,
  addCandidateComment,
  editCandidateComment,
  deleteCandidateComment,
} from "../../../utils/api/candidate";
import {updateCandidateStatus} from "../../../utils/api/company";
import CandidateProfileComments from "./Comments";

const WithToggleCardBodyEditor = withToggleCardBody(ControlledEditor);
const WithModalSendResumeForm = withModalForLetter(SendResumeForm);
const WithModalAppointInterviewForm = withModal(AppointInterviewForm);

export default class CandidateProfile extends Component {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      role: PropTypes.number.isRequired
    })
  };

  state = {
    candidate: {
      avatar: "",
      name: "",
      platform: {},
      date: "",
      salary: "",
      language: "",
      tag: "",
      phone: "",
      email: "",
      skype: "",
      linkedIn: "",
      resume: "",
      comment: "",
      about: ""
    },
    dataSaved: false,
    candidateStatuses: [],
    selectCandidateStatus: [],
    dataForSendResumeForm: {},
    logs: [],
    comments: []
  };

  componentDidMount() {
    const {id} = this.props.match.params;

    getCandidateProfile(id).then(candidateProfile => {
      this.setState({...candidateProfile});
      console.log(candidateProfile);
    });


    getDataForSendResumeForm(id).then(dataForSendResumeForm => {
      this.setState({
        dataForSendResumeForm
      });
    });

    getCadidateLogs(id).then(logs => {
      this.setState({
        logs
      });
    });

    getCandidateComments(id).then(comments => this.setState({comments}));
  }

  updateAboutContent = content => {

    const {id} = this.props.match.params;
    updateCandidateProfile(id, content).then(updatedCandidate => {
      const {candidate} = this.state;
      console.log('test');
      console.log(candidate);
      this.setState({
        candidate: {
          ...candidate,
          ...updatedCandidate
        }
      });
    });
  };

  updateCandidate = content => {
    const {id} = this.props.match.params;

    updateCandidateProfile(id, content).then(updatedCandidate => {

      const {candidate} = this.state;

      this.setState({
        candidate: {
          ...candidate,
          ...updatedCandidate
        }
      });
    });
  };

  changeCandidateStatus = content => {
    updateCandidateStatus(content).then(data => console.log(data));
  };

  deleteCandidate = id => {
    deleteCandidateProfile(id).then(data => {
      switch (data) {
        case 202: {
          alert('Deleted succesfull!y')
          break;
        }
        case 401: {
          this.props.history.push('/login/')
          break;
        }
        case 400: {
          console.log(data);
          alert(data.text)
        }
      }

    });
  };

  sendResume = (id, content) => {
    // const { id } = this.props.match.params;

    sendCandidateResume(id, content).then(() => {
      this.setState({dataSaved: true});
      this.componentDidMount();
    });

  };

  appointInterview = content => {
    const {id} = this.props.match.params;

    appointInterviewForCandidate(id, content).then(() => {
      this.setState({dataSaved: true});
      this.componentDidMount();
    });
  };

  addComment = comment => {
    const {id} = this.props.match.params;

    addCandidateComment(id, comment).then(newComment =>
      this.setState({
        comments: [newComment, ...this.state.comments]
      })
    );
  };

  deleteComment = commentId => {
    const {id} = this.props.match.params;

    deleteCandidateComment(id, commentId);

    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== commentId)
    });
  };

  editComment = (commentId, comment) => {
    const {id} = this.props.match.params;

    editCandidateComment(commentId, {comment: comment}).then(() => {
      getCandidateComments(id).then(comments => this.setState({comments}));
    });
  };

  render() {
    const {
      candidate,
      candidateStatuses,
      selectCandidateStatus,
      dataForSendResumeForm,
      logs,
      comments,
      dataSaved
    } = this.state;
    const {
      user: {role},
      match: {
        params: {id}
      }
    } = this.props;
    const candidateProfileInterfaceJSX = () => {
      switch (role) {
        case 4:
          return (
            <>
              <Row>
                <Alert color="success" isOpen={dataSaved}>
                  Operation provided successfully
                </Alert>
              </Row>
              <Row style={{marginBottom: "1.5rem", textAlign: "center"}}>
                <Col>
                  <ButtonGroup>
                    <Link to={`/candidates/${id}/edit`}>
                      <Button color="warning">Edit candidate</Button>
                    </Link>
                    <ModalConsumer>
                      {({showModal, hideModal}) => (
                        <Button
                          color="danger"
                          onClick={() =>
                            showModal(ModalToDelete, {
                              isOpenModal: true,
                              title: "Delete candidate",
                              name: candidate.name,
                              onDelete: () => {
                                this.deleteCandidate(candidate.id);
                                hideModal();
                                this.props.history.push("/candidates");
                              }
                            })
                          }
                        >
                          Delete candidate
                        </Button>
                      )}
                    </ModalConsumer>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <CandidateProfileInfo candidate={candidate}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  {/* <Row>*/}
                  {/*  <Col>*/}
                  {/*     <OpenClose*/}
                  {/*       render={(isOpen, open, close) =>*/}
                  {/*        isOpen ? (*/}
                  {/*          <WithToggleCardBodyEditor*/}
                  {/*            content={this.state.candidate.about}*/}
                  {/*            title="About candidate2"*/}
                  {/*            isOpen={isOpen}*/}
                  {/*            close={close}*/}
                  {/*            onUpdate={this.updateAboutContent}*/}
                  {/*          />*/}
                  {/*        ) : (*/}
                  {/*          <InnerHTMLMarkUp*/}
                  {/*            title="About candidate3"*/}
                  {/*            content={this.state.candidate.about}*/}
                  {/*            isOpen={isOpen}*/}
                  {/*            open={open}*/}
                  {/*            close={close}*/}
                  {/*          />*/}
                  {/*        )*/}
                  {/*      }*/}
                  {/*    />*/}
                  {/*  </Col>*/}
                  {/*</Row>*/}
                  <Row>
                    <Col>
                      <CandidateProfileTable
                        userRole={role}
                        candidateId={candidate.id}
                        candidateStatuses={candidateStatuses}
                        selectCandidateStatus={selectCandidateStatus}
                        onChangeCandidateStatus={this.changeCandidateStatus}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          );
        case 5:
          return (
            <>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Alert color="success" isOpen={dataSaved}>
                    Operation provided successfully
                  </Alert>
                </Col>
              </Row>
              <Row style={{marginBottom: "1.5rem", textAlign: "center"}}>
                <Col>
                  <ModalConsumer>
                    {({showModal}) => (
                      <Button
                        color="primary"
                        onClick={() =>
                          showModal(WithModalAppointInterviewForm, {
                            isOpenModal: true,
                            title: "appoint interview",
                            candidate: candidate,
                            appointInterview: this.appointInterview
                          })
                        }
                      >
                        Appoint interview
                      </Button>
                    )}
                  </ModalConsumer>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <CandidateProfileInfo candidate={candidate}/>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  {/* <Row>*/}
                  {/*   <Col>*/}
                  {/*     <OpenClose*/}
                  {/*       render={(isOpen, open, close) =>*/}
                  {/*        isOpen ? (*/}
                  {/*          <WithToggleCardBodyEditor*/}
                  {/*            content={this.state.candidate.about}*/}
                  {/*            title="About candidate4"*/}
                  {/*            isOpen={isOpen}*/}
                  {/*            close={close}*/}
                  {/*            onUpdate={this.updateAboutContent}*/}
                  {/*          />*/}
                  {/*        ) : (*/}
                  {/*          <InnerHTMLMarkUp*/}
                  {/*            title="About candidate5"*/}
                  {/*            content={this.state.candidate.about}*/}
                  {/*            isOpen={isOpen}*/}
                  {/*            open={open}*/}
                  {/*            close={close}*/}
                  {/*          />*/}
                  {/*        )*/}
                  {/*      }*/}
                  {/*    />*/}
                  {/*  </Col>*/}
                  {/*</Row>*/}
                  <Row>
                    <Col>
                      <CandidateProfileTable
                        userRole={role}
                        candidateId={candidate.id}
                        candidateStatuses={candidateStatuses}
                        selectCandidateStatus={selectCandidateStatus}
                        onChangeCandidateStatus={this.changeCandidateStatus}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </>
          );
        default:
          return (
            <>
              <Row>
                <Col lg={12} md={12} sm={12}>
                  <Alert color="success" isOpen={dataSaved}>
                    Operation provided successfully
                  </Alert>
                </Col>
              </Row>
              <Row style={{marginBottom: "1.5rem", textAlign: "center"}}>
                <Col>
                  <ButtonGroup>
                    <ModalConsumer>
                      {({showModal}) => (
                        <Button
                          color="primary"
                          onClick={() =>
                            showModal(WithModalAppointInterviewForm, {
                              isOpenModal: true,
                              title: "appoint interview",
                              candidate: candidate,
                              appointInterview: this.appointInterview
                            })
                          }
                        >
                          Appoint interview
                        </Button>
                      )}
                    </ModalConsumer>
                    <ModalConsumer>
                      {({showModal}) => (
                        <Button
                          color="success"
                          onClick={() =>
                            showModal(WithModalSendResumeForm, {
                              isOpenModal: true,
                              title: "send resume",
                              candidateId: candidate.id,
                              dataForSendResumeForm: dataForSendResumeForm,
                              sendResume: this.sendResume
                            })
                          }
                        >
                          Send resume
                        </Button>
                      )}
                    </ModalConsumer>
                    <Link to={`/candidates/${id}/edit`}>
                      <Button color="warning">Edit candidate</Button>
                    </Link>
                    <ModalConsumer>
                      {({showModal, hideModal}) => (
                        <Button
                          color="danger"
                          onClick={() =>
                            showModal(ModalToDelete, {
                              isOpenModal: true,
                              title: "Delete candidate",
                              name: candidate.name,
                              onDelete: () => {
                                this.deleteCandidate(candidate.id);
                                hideModal();
                                this.props.history.push("/candidates");
                              }
                            })
                          }
                        >
                          Delete candidate
                        </Button>
                      )}
                    </ModalConsumer>
                  </ButtonGroup>
                </Col>
              </Row>
              <Row>
                <Col md={8} sm={12}>
                  <Row>
                    <Col md={12}>
                      <CandidateProfileInfo candidate={candidate}/>

                    </Col>
                    {/*<Col md={12}>*/}
                    {/*  <OpenClose*/}
                    {/*    render={(isOpen, open, close) =>*/}
                    {/*      isOpen ? (*/}
                    {/*        <WithToggleCardBodyEditor*/}
                    {/*          content={this.state.candidate.about}*/}
                    {/*          title="About candidate"*/}
                    {/*          isOpen={isOpen}*/}
                    {/*          close={close}*/}
                    {/*          onUpdate={this.updateAboutContent}*/}
                    {/*        />*/}
                    {/*      ) : (*/}
                    {/*        <InnerHTMLMarkUp*/}
                    {/*          title="About candidate"*/}
                    {/*          content={this.state.candidate.about}*/}
                    {/*          isOpen={isOpen}*/}
                    {/*          open={open}*/}
                    {/*          close={close}*/}
                    {/*        />*/}
                    {/*      )*/}
                    {/*    }*/}
                    {/*  />*/}
                    {/*</Col>*/}
                    <Col md={12}>
                      <CandidateProfileTable
                        userRole={role}
                        candidateId={candidate.id}
                        candidateStatuses={candidateStatuses}
                        selectCandidateStatus={selectCandidateStatus}
                        onChangeCandidateStatus={this.changeCandidateStatus}
                      />
                    </Col>
                    <Col md={12}>
                      <Card>
                        <CardBody>
                          <CandidateProfileComments
                            auth_user_id={this.props.user.id}
                            comments={comments}
                            onAddComment={this.addComment}
                            onDeleteComment={this.deleteComment}
                            onEditComment={this.editComment}
                          />
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col md={4} sm={12}>
                  <Card>
                    <CardBody>
                      <CandidateProfileLogsList logs={logs}/>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </>
          );
      }
    };
    return <>{candidateProfileInterfaceJSX()}</>;
  }
}
