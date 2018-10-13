import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ScrollContainer from "./Components/ScrollContainer";
import uciLogo from "./img/uci-stacked-wordmark-white.png";
import ultra from "./img/ultra_logo.png";
import delphi from "./img/delphi_logo.png";
import portal from "./img/portal_logo.png";

const BlurSection = props => {
  const { blurAmount, content, fontSize, height } = props;

  return (
    <div className="nameContainer">
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
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly"
              }}
            >
              <div>I went to school at</div>
              <div style={{ width: "100vw" }}>
                <img src={uciLogo} style={{ height: "6rem" }} />
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
                <img src={ultra} />
              </div>
              <div>
                <img src={delphi} />
              </div>
              <div>
                <img src={portal} />
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
