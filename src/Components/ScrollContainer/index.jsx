import React, { Component } from "react";
import "./ScrollContainer.css";

const BusinessCard = props => {
  const { currentScrollPosition, windowHeight } = props;
  return (
    <div
      className="businessCard"
      style={{
        top: `${windowHeight -
          windowHeight *
            ((currentScrollPosition % windowHeight) / windowHeight)}px`
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex"
        }}
      >
        <div style={{ width: "100%" }}>
          <div>A</div>
          <div>B</div>
        </div>
        <div style={{ width: "40%" }}>
          <div>C</div>
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
        body: { scrollTop }
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
          blurAmount: index === scrollIndex ? 1 - blur : this.rampScroll(blur)
        });
      }
    });
  };

  render() {
    const { currentScrollPosition, heightMultiplier, scrollIndex } = this.state;
    const { children } = this.props;
    console.log(currentScrollPosition);
    console.log(heightMultiplier * window.innerHeight);

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
        {scrollIndex === children.length - 1 && (
          <BusinessCard
            currentScrollPosition={currentScrollPosition}
            windowHeight={window.innerHeight}
          />
        )}
      </div>
    );
  }
}
