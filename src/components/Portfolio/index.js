import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=GcB7ZcAuerQ"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=murDG6qEFj4"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-I8OB9X6a6c"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IOXL-a_dzLg"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Z-DvMOWk_98"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=y6ifesUvo1c"
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://vimeo.com/214420886"
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
