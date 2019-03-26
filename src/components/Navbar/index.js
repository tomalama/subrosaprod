import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="Navbar">
          <div className="Navbar_header">
            <Link to={"/"}>
              <img className="Navbar_logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="Navbar_content">
            <ul className="Navbar_links">
              <li>
                <Link to={"/demo-reel"} className="Navbar_link">
                  Demo Reel
                </Link>
              </li>
              <li>
                <Link to={"/portfolio"} className="Navbar_link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="Navbar_link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="Navbar_link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
