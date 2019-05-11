import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Landing.css";
import styleIsSubstance from "../../assets/images/style-is-substance-small.png";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <div className="Landing_demo-wrapper">
          <ReactPlayer
            className="Landing_demo-reel"
            url="https://vimeo.com/326422713"
            playing
            loop
            muted
            width="100%"
            height="100%"
          />
        </div>
        <img
          className="Landing_style-is-substance"
          src={styleIsSubstance}
          alt="The style is the substance"
        />
      </div>
    );
  }
}

export default Landing;
