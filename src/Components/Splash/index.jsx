import React, { Component } from "react";
// import { Header } from "semantic-ui-react";
import "./Splash.css";

// import reactLogo from "../../img/react_logo.png";
// import reduxLogo from "../../img/redux_logo.png";
// import expressLogo from "../../img/express_logo.png";
// import nodeLogo from "../../img/node_logo.png";
// import pythonLogo from "../../img/python_logo.png";
// import javaLogo from "../../img/java_logo.png";

export default class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      splitName: false
    };
  }

  handleHover = () => {
    this.setState(prevState => ({
      splitName: !prevState.splitName
    }));
  };

  render() {
    const { blurAmount } = this.props;

    return (
      <div className="splashContainer">
        <div
          className={`splashName ${
            this.state.splitName ? "hideSplit" : "displaySplit"
          }`}
          style={{
            opacity: blurAmount
          }}
        >
          KHUONG TIET
        </div>
      </div>
    );
  }
}
