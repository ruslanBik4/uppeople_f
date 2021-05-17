import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>
          <Link to="#" style={{ color: "var(--dark)" }}>UPPeople</Link>
          &copy; 2020{" "}
          <Link to="https://pm-db.net/en/" style={{ color: "var(--dark)" }}>BugFix</Link>
          .
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
