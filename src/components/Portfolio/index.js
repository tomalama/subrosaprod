import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <ReactPlayer
          className="Portfolio_player"
          url="https://www.youtube.com/watch?v=murDG6qEFj4"
          controls
        />
        <ReactPlayer
          className="Portfolio_player"
          url="https://www.youtube.com/watch?v=-I8OB9X6a6c"
          controls
        />
        <ReactPlayer
          className="Portfolio_player"
          url="https://www.youtube.com/watch?v=IOXL-a_dzLg"
          controls
        />
        <ReactPlayer
          className="Portfolio_player"
          url="https://www.youtube.com/watch?v=Z-DvMOWk_98"
          controls
        />
        <ReactPlayer
          className="Portfolio_player"
          url="https://www.youtube.com/watch?v=y6ifesUvo1c"
          controls
        />
        <ReactPlayer
          className="Portfolio_player"
          url="https://vimeo.com/214420886"
          controls
        />
      </div>
    );
  }
}

export default Portfolio;
