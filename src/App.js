import React, { Component } from "react";
import "./App.css";
import ScrollContainer from "./Components/ScrollContainer";
import Experience from "./Components/Experience";

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
import arrow from "./img/arrow-down-white.png";

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
  render() {
    return (
      <ScrollContainer>
        <BlurSection
          content={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%"
              }}
            >
              <div />
              <div>KHUONG TIET</div>
              <div>
                <img src={arrow} style={{ height: "4rem" }} />
              </div>
            </div>
          }
          fontSize={"4rem"}
          height={"100%"}
        />
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
                <img style={{ height: "3rem" }} src={reactLogo} alt={"React"} />
                <img style={{ height: "3rem" }} src={reduxLogo} alt={"Redux"} />
                <img style={{ height: "3rem" }} src={nodeLogo} alt={"Node"} />
                <img
                  style={{ height: "3rem" }}
                  src={expressLogo}
                  alt={"Express"}
                />
              </div>
              <div>I am familiar with</div>
              <div>
                <img style={{ height: "3rem" }} src={python} alt={"Python"} />
                <img style={{ height: "3rem" }} src={java} alt={"Java"} />
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
        <BlurSection content={"I have worked at"} />
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
              <Experience
                dateRange={"June 2018 - September 2018"}
                link={"https://www.ultramobile.com"}
                src={ultra}
                title={"Software Engineering Intern"}
              />
              <Experience
                dateRange={"October 2017 - June 2018"}
                link={"http://www.delphidisplay.com"}
                src={delphi}
                title={"Software Engineering Intern"}
              />
              <Experience
                dateRange={"June 2017 - December 2017"}
                link={"https://theportal.io"}
                src={portal}
                title={"Web Development Intern"}
              />
            </div>
          }
          fontSize={"3rem"}
          height={"100%"}
        />
        <BlurSection content={"Some of the projects I'm working on are"} />
        <BlurSection
          content={
            <div>
              <div>Ray Tracer</div>
              <div>Flocking Simulator</div>
            </div>
          }
        />
        <BlurSection content={<div>Let's talk</div>} />
      </ScrollContainer>
    );
  }
}

export default App;
