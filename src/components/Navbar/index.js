import React, { Component } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import demoReelAnimation from "../../assets/lottie/demoreel";
import portfolioAnimation from "../../assets/lottie/portfolio";
import aboutAnimation from "../../assets/lottie/about";
import contactAnimation from "../../assets/lottie/contact";

class Navbar extends Component {
  state = {
    demoReelSpeed: -1,
    portfolioSpeed: -1,
    aboutSpeed: -1,
    contactSpeed: -1
  };

  setSpeed(name, speed) {
    this.setState({
      [name]: speed
    });
  }

  render() {
    const height = 45;
    const width = 100;

    const defaultOptions = {
      loop: false,
      autoplay: false,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div className="Navbar">
        <div className="Navbar_header">
          <Link to={"/"}>
            <img className="Navbar_logo" src={logo} alt="Logo" />
          </Link>
          <div className="Navbar_link-toggle">
            <i className="fas fa-bars" />
          </div>
        </div>
        <nav className="Navbar_content">
          <ul className="Navbar_links">
            <li>
              <Link
                to={"/demo-reel"}
                className="Navbar_link"
                onMouseEnter={() => this.setSpeed("demoReelSpeed", 1)}
                onMouseLeave={() => this.setSpeed("demoReelSpeed", -1)}
              >
                <Lottie
                  options={{
                    ...defaultOptions,
                    animationData: demoReelAnimation
                  }}
                  height={height}
                  width={width}
                  isClickToPauseDisabled={true}
                  speed={this.state.demoReelSpeed}
                />
              </Link>
            </li>
            <li>
              <Link
                to={"/portfolio"}
                className="Navbar_link"
                onMouseEnter={() => this.setSpeed("portfolioSpeed", 1)}
                onMouseLeave={() => this.setSpeed("portfolioSpeed", -1)}
              >
                <Lottie
                  options={{
                    ...defaultOptions,
                    animationData: portfolioAnimation
                  }}
                  height={height}
                  width={width}
                  isClickToPauseDisabled={true}
                  speed={this.state.portfolioSpeed}
                />
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="Navbar_link"
                onMouseEnter={() => this.setSpeed("aboutSpeed", 1)}
                onMouseLeave={() => this.setSpeed("aboutSpeed", -1)}
              >
                <Lottie
                  options={{
                    ...defaultOptions,
                    animationData: aboutAnimation
                  }}
                  height={height}
                  width={width}
                  isClickToPauseDisabled={true}
                  speed={this.state.aboutSpeed}
                />
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="Navbar_link"
                onMouseEnter={() => this.setSpeed("contactSpeed", 1)}
                onMouseLeave={() => this.setSpeed("contactSpeed", -1)}
              >
                <Lottie
                  options={{
                    ...defaultOptions,
                    animationData: contactAnimation
                  }}
                  height={height}
                  width={width}
                  isClickToPauseDisabled={true}
                  speed={this.state.contactSpeed}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
