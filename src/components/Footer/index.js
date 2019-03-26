import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <ul className="Footer_logos">
          <li>
            <a href="https://www.instagram.com/subrosa.prod/">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/subrosa.prod/">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCZXVZX7hqQ06pUTwtqnBt5Q">
              <i className="fab fa-youtube" />
            </a>
          </li>
          <li>
            <a href="https://vimeo.com/subrosaprod">
              <i className="fab fa-vimeo-v" />
            </a>
          </li>
        </ul>
        <p className="Footer_copyright">
          ©SUBROSA Inc. All rights reserved. 2019
        </p>
      </div>
    );
  }
}

export default Footer;
