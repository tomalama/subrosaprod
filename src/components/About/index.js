import React, { Component } from "react";
import "./About.css";
import skatin from "../../assets/images/skatin.png";

class About extends Component {
  state = { isStopped: false };

  render() {
    return (
      <div className="About">
        <div className="About_content">
          <p>
            Sub Rosa is a video production company based in Ottawa, Ontario, led
            by Creative Director Mack Brander and Producer Hassan Moazin.
            <br />
            <br />
            During film school Mack and Hassan were recognized for producing
            music videos that use color, strong visuals, and editing in
            experimental ways to create specific feelings (see them{" "}
            <a href="https://www.youtube.com/watch?v=y6ifesUvo1c">
              here
            </a> and <a href="https://vimeo.com/214420886">here</a>), rather
            than relying on traditional plots and techniques. We use
            unconventional filmmaking methods to tell stories through a focus on
            tone, mood, and emotion.
            <br />
            <br />
            After working in various jobs in the industry we decided that we
            want to produce videos that are true to our unique style. Sub Rosa
            was created so we can use our passion and experience to create
            memorable videos for clients. If you're not satisfied with the
            quality and outcome, then we're not; we want to work alongside you
            and create something with you that you can be just as proud about as
            we are. Your vision is ours.
          </p>
        </div>
        <div>
          <img className="About_skatin" src={skatin} alt="skatin.png" />
        </div>
      </div>
    );
  }
}

export default About;
