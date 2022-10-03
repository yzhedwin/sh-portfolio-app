import { Slide, Zoom } from "@mui/material";
import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import About from "./About";
import Project from "./Project";
import Work from "./Work";
/**
 * TODO:
 * Add Animations
 * Dark/Light mode switch
 *
 *
 */
class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcome: false,
      aboutTitle: false,
      aboutProfile: false,
      workPage: false,
    };
  }

  _handleEnter(state) {
    this.setState((prevState) => ({ ...prevState, [state]: true }));
  }

  _handleExit(state) {
    this.setState((prevState) => ({ ...prevState, [state]: false }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="home-component">
          <div className="welcome">
            <Waypoint
              onEnter={() => {
                this._handleEnter("welcome");
              }}
              onLeave={() => {
                this._handleExit("welcome");
              }}
              topOffset={"10%"}
              bottomOffset={"10%"}
            >
              <div>
                <Slide
                  in={this.state.welcome}
                  direction="right"
                  timeout={{ enter: 1000, exit: 0 }}
                  mountOnEnter
                  unmountOnExit
                >
                  <h4>Welcome to my Portfolio</h4>
                </Slide>
              </div>
            </Waypoint>
          </div>

          <div className="about">
            <About
              aboutTitle={this.state.aboutTitle}
              aboutProfile={this.state.aboutProfile}
              _titleEnter={() => this._handleEnter("aboutTitle")}
              _profileEnter={() => this._handleEnter("aboutProfile")}
              _titleExit={() => this._handleExit("aboutTitle")}
              _profileExit={() => this._handleExit("aboutProfile")}
            />
          </div>
          <div className="work-exp">
            <Work
              in={this.state.workPage}
              _enter={() => this._handleEnter("workPage")}
              _exit={() => this._handleExit("workPage")}
            />
          </div>
          <div className="projects">
            <Project />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
