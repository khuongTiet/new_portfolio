import React, { Component } from "react";
import { Header } from "semantic-ui-react";
import "./Introduction.css";

export default class Introduction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { blurAmount } = this.props;

    return (
      <div className="introductionContainer" style={{ opacity: blurAmount }}>
        I am a software engineer
      </div>
    );
  }
}
