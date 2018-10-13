import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import "./Experience.css";

export default class Experience extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="experienceContainer">
        <div className="jobContainer">Ultra Mobile</div>
        <div className="jobContainer">Delphi Display Systems</div>
        <div className="jobContainer">The Portal</div>
      </div>
    );
  }
}
