import React, { Component } from "react";
import Header from "../components/Header";
import About from "./About";
import Project from "./Project";
import Work from "./Work";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-component">
          <div className="about">
            <About />
          </div>

          <div className="work-exp">
            <Work />
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
