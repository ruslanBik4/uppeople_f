// Core
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem, ButtonGroup, Button, Col
} from "reactstrap";
import { lastIndexOf } from "core-js/fn/array";

// let classNames = [{status:0,className: "fa fa-fire"}, {status:1,className: "fa fa-check-circle"}, {status:2,className: "fa fa-history"}, {status:3,className: "fa fa-ban"}]
let classNames = [ "fire","check-circle", "history", "ban"]
let statusNames = [ " Hot"," Open", " In progress", " Closed"]
const VacancyProfileInfo = ({
  vacancy: {
    id,
    date_create,
    company_id,
    company,
    platform,
    seniority,
    status,
    location,
    salary,
    link
  },
  userRole
}) => (
  <Card>
    <CardHeader>
      <Link
        to={`/vacancies/${id}/edit`}
        title="edit"
        className="pull-right"
        style={{ color: "var(--dark)", textDecoration: "none" }}
      >
        <i className="icon-pencil icons font-sm" color="var(--gray)" />
      </Link>
    </CardHeader>
    <CardBody>
      <ListGroup flush>
        {date_create && (
          <ListGroupItem>
            Date: {moment(date_create).format("DD MMM YYYY")}
          </ListGroupItem>
        )}
        {company && (
          <ListGroupItem>
            Company:{" "}
            {userRole !== 4 ? (
              <Link to={`/companies/${company_id}`}>{company}</Link>
            ) : (
              company
            )}
          </ListGroupItem>
        )}
        {platform && <ListGroupItem>Platform: {platform}</ListGroupItem>}
        {seniority && (
          <ListGroupItem>Seniority: {seniority}</ListGroupItem>
        )}
        <ListGroupItem>Status:{`${statusNames[status]}`}
          {/* <ButtonGroup
            style={{display: "flex", marginBottom: "1rem", width: 200 }}
        > */}
          
            <Button
              style={{display: "flex", marginBottom: "1rem", width: 200 }}
              className="btn-default"
            >
          <i className={`fa fa-${classNames[status]}`}/>
            </Button>
         
          {/* </ButtonGroup> */}
        </ListGroupItem>
        {location && <ListGroupItem>Location: {location}</ListGroupItem>}
        {salary && <ListGroupItem>Salary: {salary} <i
                          style={{
                            position: "absolute",
                            top: "1rem",
                            borderwidth: "21.00px",
                            justifyContent: "flex-start"
                          }}
                          className="cui-dollar icons font-lg"
                        /></ListGroupItem>}
        {link && (
          <ListGroupItem>
            Additional information: <a href={link}>link</a>
          </ListGroupItem>
        )}
      </ListGroup>
    </CardBody>
  </Card>
);

VacancyProfileInfo.propTypes = {
  vacancy: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    company: PropTypes.shape({
      id: PropTypes.number,
      nazva: PropTypes.string
    }),
    platform: PropTypes.shape({
      id: PropTypes.number,
      nazva: PropTypes.string
    }),
    seniority: PropTypes.shape({
      id: PropTypes.number,
      nazva: PropTypes.string
    }),
    status: PropTypes.shape({
      id: PropTypes.number,
      status: PropTypes.string
    }),
    location: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }),
    salary: PropTypes.string,
    link: PropTypes.string
  }),
  userRole: PropTypes.number.isRequired
};

VacancyProfileInfo.defaulProps = {
  vacancy: {}
};

export default VacancyProfileInfo;
