import React, { Component } from 'react';
import classes from "./Version.module.scss";

class Vesion extends Component {
  render() {
    return (
      <div className={classes["version"]}>
        <div className={classes["version__main"]}>
          {this.props.ver.version}
        </div>
          
        <ul className={classes["version__list"]}>
          <li className={classes["version__item"]}>{this.props.ver.buildAt}</li>
          <li className={classes["version__item"]}>{this.props.ver.startAt}</li>
        </ul>
      </div>
    );
  }
}

export default Vesion;
