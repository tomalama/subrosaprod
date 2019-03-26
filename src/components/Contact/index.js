import React, { Component } from "react";
import background from "../../assets/background.svg";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
      action: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    if (!this.state.name) {
      event.preventDefault();
    } else if (!this.state.email) {
      event.preventDefault();
    } else {
      this.setState({
        action:
          "mailto:subrosa.prod@gmail.com?subject=Video%20Inquiry?body=Hello,%0D%0AI'd like to discuss a video idea. " +
          this.state.description +
          "%0D%0AI look forward to hearing back.%0D%0AThanks,%0D%0A" +
          this.state.name
      });
    }
  }

  componentDidMount() {
    document.body.style.backgroundImage = "url(" + background + ")";
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = "none";
  }

  render() {
    return (
      <div className="Contact">
        <div className="Contact_content">
          <h1>We're looking forward to hearing from you!</h1>
        </div>
        <form
          className="Contact_form"
          onSubmit={this.handleSubmit}
          action={this.state.action}
        >
          <label>Your Name (required)</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>Your Email (required)</label>
          <input
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Tell us about your project</label>
          <input
            name="description"
            type="textarea"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
