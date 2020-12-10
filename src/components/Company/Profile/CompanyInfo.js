// Core
import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
// Instruments
import styles from "./Profile.module.css";

const CompanyInfo = ({ email, phone, skype, managers }) => (
  <Card>
    <CardHeader className={styles.cardHeader}>
      <CardTitle className={styles.cardHeading}>Company Information</CardTitle>
    </CardHeader>
    <CardBody>
      <Row>
      <Col lg={6} md={12}><i className="icon-envelope icons"/> Email:</Col>
      <Col lg={6} md={12}>{email === "" ? 'Not Specified' : email}</Col>
      </Row>
      <Row>
      <Col lg={6} md={12}><i className="icon-phone icons"/> Phone:</Col>
      <Col lg={6} md={12}>{phone === "" ? 'Not Specified' : phone}</Col>
      </Row>
      <Row>
      <Col lg={6} md={12}><i className="icon-social-skype icons"/> Skype:</Col>
      <Col lg={6} md={12}>{skype === "" ? 'Not Specified' : skype}</Col>
      </Row>
      </CardBody>
  </Card>
);

CompanyInfo.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  skype: PropTypes.string
};

CompanyInfo.defaultProps = {
};

export default CompanyInfo;
