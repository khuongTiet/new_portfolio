import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import "./Education.css";

export default class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="educationContainer">
        <div className="educationContainerTop splitContainer">
          University of California, Irvine
        </div>
        <div className="educationContainerBottom splitContainer">
          Software Engineering
        </div>
      </div>
    );
  }
}
