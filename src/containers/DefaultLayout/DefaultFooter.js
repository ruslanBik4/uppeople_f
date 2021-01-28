import React, { Component } from "react";
import PropTypes from "prop-types";

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
          <a href="#" style={{ color: "var(--dark)" }}>UPPeople
          </a>{" "}
          &copy; 2020{" "}
          <a href="https://pm-db.net/en/" style={{ color: "var(--dark)" }}>BugFix
          </a>
          .
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
