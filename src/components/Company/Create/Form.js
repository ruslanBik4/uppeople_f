// Core
import React, { Component } from "react";
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
  Row
} from "reactstrap";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
// Components
// Instruments
import styles from "../Profile/Profile.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class CompanyCreateForm extends Component {
  static propTypes = {
    onCreateCompany: PropTypes.func.isRequired
  };

  state = {
    logo: "",
    name: "",
    phone: "",
    email: "",
    skype: "",
    cooperation: "",
    map: "",
    manager: "",
    send_details: EditorState.createEmpty(),
    about: EditorState.createEmpty(),
    interview_detail: EditorState.createEmpty()
  }; 

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handlesend_detailsStateChange = send_details => {
    this.setState({ send_details });
  };

  handleAboutStateChange = about => {
    this.setState({ about });
  };

  handleinterview_detailStateChange = interview_detail => {
    this.setState({ interview_detail });
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      name,
      email,
      phone,
      skype,
      cooperation,
      map,
      send_details,
      about,
      interview_detail
    } = this.state;
    const { onCreateCompany } = this.props;

    const send_detailsEditorState = draftToHtml(
      convertToRaw(send_details.getCurrentContent())
    );

    const aboutEditorState = draftToHtml(
      convertToRaw(about.getCurrentContent())
    );

    const interview_detailEditorState = draftToHtml(
      convertToRaw(interview_detail.getCurrentContent())
    );

    const companySettings = {
      name,
      email,
      phone,
      skype,
      cooperation,
      map,
      send_details: send_detailsEditorState,
      about: aboutEditorState,
      interview_detail: interview_detailEditorState
    };

    onCreateCompany(companySettings);
  };

  render() {
    const {
      logo,
      name,
      email,
      phone,
      skype,
      cooperation,
      map,
    } = this.state;

    return (
      <Row>
        <Col md={3}>
          <Card className={styles.card}>
            <CardImg
              top
              src={logo}
              className={styles.cardLogo}
              alt="Company logo"
            />
            <CardBody className={styles.cardBody}>
              <CardTitle className={styles.cardTitle}>{name}</CardTitle>
              <Input
                type="file"
                name="logo"
                value={logo}
                color="success"
                onChange={this.handleInputChange}
              />
              {/* <b>
                <i className="fa fa-plus" /> Add logo
              </b> */}
            </CardBody>
          </Card>
        </Col>
        <Col md={9}>
          <Card>
            <CardHeader
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <CardTitle
                style={{
                  marginBottom: 0,
                  fontSize: "14px",
                  fontWeight: "bold"
                }}
              >
                Settings
              </CardTitle>
            </CardHeader>
            <CardBody>
              <Form style={{ padding: 20 }} onSubmit={this.handleSubmit}>
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
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
                          className="icon-user icons font-lg"
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
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
                          className="icon-envelope icons font-lg"
                        />
                      </Col>
                    </FormGroup>
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
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
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
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
                          className="icon-social-skype icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col lg={6} md={12}>
                    <FormGroup row>
                      <Label for="cooperation" sm={3}>
                        Cooperation
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="cooperation"
                          type="textarea"
                          name="cooperation"
                          value={cooperation}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
                          className="cui-briefcase icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="map" sm={3}>
                        Map
                      </Label>
                      <Col sm={9}>
                        <Input
                          id="map"
                          type="textarea"
                          name="map"
                          value={map}
                          onChange={this.handleInputChange}
                        />
                        <i
                          style={{
                            position: "absolute",
                            top: "0.6rem",
                            right: "1.75rem"
                          }}
                          className="cui-location-pin icons font-lg"
                        />
                      </Col>
                    </FormGroup>
                    {/* <FormGroup row>
                      <Label for="manager" sm={3}>
                        Manager
                      </Label>
                      <Col sm={9}>
                        <Select
                          id="manager"
                          type="select"
                          value={manager}
                          placeholder="Manager"
                          onChange={({ currentTarget }) =>
                            this.setState({ manager: currentTarget.value })
                          }
                        />
                      </Col>
                    </FormGroup> */}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Send details</h6>
                    <Editor
                      editorState={this.state.send_details}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                      // wrapperStyle={<wrapperStyleObject>}
                      // editorStyle={<editorStyleObject>}
                      // toolbarStyle={<toolbarStyleObject>}
                      localization={{
                        locale: "ru"
                      }}
                      onEditorStateChange={this.handlesend_detailsStateChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>About</h6>
                    <Editor
                      editorState={this.state.about}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                      localization={{
                        locale: "ru"
                      }}
                      onEditorStateChange={this.handleAboutStateChange}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h6>Interview details</h6>
                    <Editor
                      editorState={this.state.interview_detail}
                      wrapperClassName="wrapper-class"
                      editorClassName="editor-class"
                      toolbarClassName="toolbar-class"
                      localization={{
                        locale: "ru"
                      }}
                      onEditorStateChange={
                        this.handleinterview_detailStateChange
                      }
                    />
                  </Col>
                </Row>
                <Row style={{ justifyContent: "flex-end" }}>
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
