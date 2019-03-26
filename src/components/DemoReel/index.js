import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./DemoReel.css";

class DemoReel extends Component {
  render() {
    return (
      <div className="DemoReel">
        <ReactPlayer
          className="DemoReel_player"
          url="https://vimeo.com/326422713"
          playing
          loop
          controls
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default DemoReel;
