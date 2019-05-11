import React, { Component } from "react";
import ReactPlayer from "react-player";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="Portfolio">
        <h2>KUMO - LIA KLOUD</h2>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=GcB7ZcAuerQ"
            controls
            width="100%"
            height="100%"
            light={true}
          />
        </div>
        <h2>LATE NIGHT - JAY WILLY</h2>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=murDG6qEFj4"
            controls
            width="100%"
            height="100%"
            light={true}
          />
        </div>
        <h2>VINO - THEVFTERPVRTY</h2>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=-I8OB9X6a6c"
            controls
            width="100%"
            height="100%"
            light={true}
          />
        </div>
        <h2>YUNG TORY EVENT COVERAGE</h2>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IOXL-a_dzLg"
            controls
            width="100%"
            height="100%"
            light={true}
          />
        </div>
        <h2>ECHOES - WAKEUPRUSS!</h2>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Z-DvMOWk_98"
            controls
            width="100%"
            height="100%"
            light={true}
          />
        </div>
        <h2>OKAY, BUT THIS IS THE LAST TIME - MT. MARCY</h2>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=y6ifesUvo1c"
            controls
            width="100%"
            height="100%"
            light={true}
          />
        </div>
        <h2>SUPA - CY</h2>
        <div className="Portfolio_player-wrapper">
          <ReactPlayer
            url="https://vimeo.com/214420886"
            controls
            width="100%"
            height="100%"
            light={true}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
