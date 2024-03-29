// Core
import React, { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import moment from "moment";

import CandidateProfileLogCard from "./LogCard";
import CandidateProfileLogsList from "./LogsList";


import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from "reactstrap";
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
  reContactCandidate,
  // handleRecontactClick
} from "../../../utils/api/candidate";
// import logs from "/Profile.js";
import noAvatar from "../../../assets/img/no_avatar.png";
import { ModalConsumer } from "../../../providers/ModalProvider";

 
const CandidateProfileInfo = ({
                                candidate: {
                                  avatar,
                                  name,
                                  platform,
                                  date,
                                  salary,
                                  language,
                                  phone,
                                  tag,
                                  email,
                                  skype,
                                  linkedIn,
                                  resume,
                                  comment
                                },
                                handleRecontactClick: handleRecontactClick
                              }) => (
                              
                                
    <Card>
      <CardBody>
      <div style={{textAlign: "center"}}>
        <CardImg
          top
          style={{
            width: 150,
            height: 150
          }}
          src={avatar !== null ? avatar : noAvatar}
          alt="avatar"
        />
      </div>
         <Row md="12" style={{justifyContent: "flex-center"}}>
            <Button
              style={{position: "relative", left: "44%", top: "3px", width: "100px", background: "rgb(96, 134, 234)"}}
              onClick={handleRecontactClick}
            >
                Recontact
            </Button>
          </Row>
      <CardTitle style={{textAlign: "center", fontSize: "1rem"}}>
        {name}
      </CardTitle>
      <ListGroup flush>
        {platform && (
          <ListGroupItem style={{alignSelf: "center", fontSize: "1rem"}}>
            {platform.nazva}
          </ListGroupItem>
        )}
        {date && (
          <ListGroupItem>
            Date: {moment(date).format("DD MMMM YYYY")}
          </ListGroupItem>
        )}
        {phone && (
          <ListGroupItem>
            Phone: <a href={`tel:${phone}`}>{phone}</a>
          </ListGroupItem>
        )}
        {skype && <ListGroupItem>Skype: {skype}</ListGroupItem>}
        {email && (
          <ListGroupItem>
            Email:{" "}
            <a href={`mailto:${email}`} target="_top">
              {email}
            </a>
          </ListGroupItem>
        )}
        {salary && <ListGroupItem>Salary: {salary}</ListGroupItem>}
        {language && <ListGroupItem>Languages: {language}</ListGroupItem>}
        {linkedIn && (
          <ListGroupItem>
            LinkedIn:{" "}
            <a href={linkedIn} target="_blanck">
              link
            </a>
          </ListGroupItem>
        )}
        {tag && (
          <ListGroupItem>
            Tag:{" "}
            {tag.name}
          </ListGroupItem>
        )}
        {resume && (
          <ListGroupItem>
            Resume:{" "}
            <a href={resume} target="_blanck">
              link
            </a>
          </ListGroupItem>
        )}
        {comment && (
          <ListGroupItem>
            Comments: {comment}
          </ListGroupItem>
        )}
      </ListGroup>
    </CardBody>
  </Card>
  );
  
  
 



CandidateProfileInfo.propTypes = {
    candidate: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        platform: PropTypes.shape({
            id: PropTypes.number,
            nazva: PropTypes.string,
        }),
        date: PropTypes.string,
        salary: PropTypes.string,
        language: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        skype: PropTypes.string,
        linkedIn: PropTypes.string,
        resume: PropTypes.string,
        comment: PropTypes.string,
    }),
    handleRecontactClick: PropTypes.func.isRequired
};


CandidateProfileInfo.defaultProps = {
  candidate: {},
    handleRecontactClick: function (){alert("default")}
};

export default CandidateProfileInfo 



  
  