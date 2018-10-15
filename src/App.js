import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollContainer from "./Components/ScrollContainer";
import uciLogo from "./img/uci-stacked-wordmark-white.png";
import ultra from "./img/ultra_logo.png";
import delphi from "./img/delphi_logo.png";
import portal from "./img/portal_logo.png";
import reactLogo from "./img/react_logo.png";
import reduxLogo from "./img/redux_logo.png";
import nodeLogo from "./img/node_logo.png";
import expressLogo from "./img/express_logo.png";
import python from "./img/python_logo.png";
import java from "./img/java_logo.png";

const BlurSection = props => {
  const { blurAmount, content, fontSize, height, zIndex } = props;

  return (
    <div className="nameContainer" style={{ zIndex }}>
      <div
        style={{
          opacity: blurAmount,
          fontSize,
          height
        }}
      >
        {content}
      </div>
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollContainer>
        <BlurSection content={"KHUONG TIET"} fontSize={"4rem"} />
        <BlurSection content={"I am a software engineer"} fontSize={"3rem"} />
        <BlurSection
          content={
            <div
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
              }}
            >
              <div>I use these often</div>
              <div>
                <img style={{ height: "3rem" }} src={reactLogo} />
                <img style={{ height: "3rem" }} src={reduxLogo} />
                <img style={{ height: "3rem" }} src={nodeLogo} />
                <img style={{ height: "3rem" }} src={expressLogo} />
              </div>
              <div>I am familiar with</div>
              <div>
                <img style={{ height: "3rem" }} src={python} />
                <img style={{ height: "3rem" }} src={java} />
              </div>
            </div>
          }
          fontSize={"3rem"}
        />
        <BlurSection
          content={
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
              }}
            >
              <div>I went to school at</div>
              <div style={{ width: "100vw" }}>
                <a href="https://uci.edu" target="_blank">
                  <img src={uciLogo} style={{ height: "6rem" }} />
                </a>
              </div>
              <div>for Software Engineering</div>
            </div>
          }
          fontSize={"3rem"}
          height={"100%"}
        />
        <BlurSection content={"I have worked at"} fontSize={"3rem"} />
        <BlurSection
          content={
            <div
              style={{
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
              }}
            >
              <div>
                <a href="https://www.ultramobile.com" target="_blank">
                  <img src={ultra} />
                </a>
              </div>
              <div>
                <a href="http://www.delphidisplay.com" target="_blank">
                  <img src={delphi} />
                </a>
              </div>
              <div>
                <a href="https://theportal.io" target="_blank">
                  <img src={portal} />
                </a>
              </div>
            </div>
          }
          fontSize={"3rem"}
          height={"100%"}
        />
      </ScrollContainer>
    );
  }
}

export default App;
