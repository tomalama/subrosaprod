import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FadeIn from "react-fade-in";
import animationData from "./assets/lottie/transition.json";
import Lottie from "react-lottie";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import DemoReel from "./components/DemoReel";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    transitioning: true
  };

  renderTransition() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <div className="Loading_overlay">
        <Lottie
          options={defaultOptions}
          height={window.height}
          width={window.width}
          isClickToPauseDisabled={true}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => this.setState({ transitioning: false })
            }
          ]}
        />
      </div>
    );
  }

  renderComponent(Component) {
    if (this.state.transitioning) {
      return this.renderTransition();
    }
    // eslint-disable-next-line
    this.state.transitioning = true; // Not using setState because it shouldn't re-render
    return (
      <FadeIn>
        <Component />
        <Footer />
      </FadeIn>
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact render={() => this.renderComponent(Landing)} />
          <Route
            path="/demo-reel"
            exact
            render={() => this.renderComponent(DemoReel)}
          />
          <Route
            path="/portfolio"
            exact
            render={() => this.renderComponent(Portfolio)}
          />
          <Route
            path="/about"
            exact
            render={() => this.renderComponent(About)}
          />
          <Route
            path="/contact"
            exact
            render={() => this.renderComponent(Contact)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
