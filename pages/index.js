import Head from "next/head";
import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import Header from "../components/Header";
import About from "./About";
import Project from "./Project";
import Work from "./Work";
/**
 * TODO:
 * Add Animations
 *
 *
 */
class Home extends Component {
  _handleEnter() {
    console.log("entered a section")
  }
  render() {
    return (
      <>
        <Header />
        <div className="home-component">
        <div className="welcome">Welcome to my Portfolio</div>
          <Waypoint onEnter={this._handleEnter}>
            <div className="about">
              <About />
            </div>
          </Waypoint>
          <Waypoint onEnter={this._handleEnter}>
            <div className="work-exp">
              <Work />
            </div>
          </Waypoint>
          <Waypoint onEnter={this._handleEnter}>
            <div className="projects">
              <Project />
            </div>
          </Waypoint>
        </div>
      </>
    );
  }
}

export default Home;
