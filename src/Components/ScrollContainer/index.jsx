import React, { Component } from "react";
import "./ScrollContainer.css";
import profile from "../../img/profile.jpg";

const BusinessCard = props => {
  const { currentScrollPosition, windowHeight } = props;
  return (
    <div
      className="businessCard"
      style={{
        top: `${windowHeight -
          windowHeight *
            ((currentScrollPosition % windowHeight) / windowHeight) +
          window.innerHeight * 0.025}px`
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderRight: "0.0625rem solid lightgray"
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="#" target="_blank">
              <img style={{ height: "14rem" }} src={profile} />
            </a>
          </div>
        </div>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            textShadow: "none"
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 600 }}>Khuong Tiet</div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div>657.238.9178</div>
            <div>ktiet1 at uci dot edu</div>
            <a
              href="https://github.com/khuongTiet"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>
            <a
              href="https://linkedin./com/khuong-tiet"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class ScrollContainer extends Component {
  constructor(props) {
    super(props);
    const { children } = this.props;

    this.state = {
      heightMultiplier: children.length,
      currentScrollPosition: 0,
      scrollIndex: 0,
      windowHeight: window.innerHeight
    };
  }

  componentDidMount = () => {
    const height = this.container.clientHeight;

    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = e => {
    const { windowHeight } = this.state;
    const {
      srcElement: {
        scrollingElement: { scrollTop }
      }
    } = e;
    const scrollPosition = scrollTop < 0 ? 0 : scrollTop;

    this.setState(prevState => ({
      currentScrollPosition: scrollPosition,
      scrollIndex: Math.floor(scrollPosition / windowHeight)
    }));
  };

  rampScroll = blur => {
    if (blur < 0.75) {
      return 0;
    } else {
      return (blur - 0.75) * 4;
    }
  };

  scrollPositionProps = children => {
    const { currentScrollPosition, scrollIndex, windowHeight } = this.state;
    const blur = (currentScrollPosition % windowHeight) / windowHeight;

    return React.Children.map(children, (child, index) => {
      if (index === scrollIndex || index === scrollIndex + 1) {
        return React.cloneElement(child, {
          display: index === scrollIndex,
          zIndex: index === scrollIndex ? 2 : 1,
          blurAmount: index === scrollIndex ? 1 - blur : this.rampScroll(blur)
        });
      }
    });
  };

  render() {
    const { currentScrollPosition, heightMultiplier, scrollIndex } = this.state;
    const { children } = this.props;

    return (
      <div
        className="mainContainer"
        style={{
          height: `${80 + heightMultiplier * 100}vh`
        }}
        ref={container => (this.container = container)}
      >
        <div className="displayContainer">
          {this.scrollPositionProps(children)}
        </div>
        {currentScrollPosition >=
          heightMultiplier * window.innerHeight - window.innerHeight * 0.8 && (
          <BusinessCard
            currentScrollPosition={currentScrollPosition}
            windowHeight={window.innerHeight}
          />
        )}
      </div>
    );
  }
}
