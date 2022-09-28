import React, { Component } from "react";
import SICard from "../components/cards/SICard";
import SICard2 from "../components/cards/SICard2";
/**
 * Full Time internship
 * Part Time Job
 */
class Work extends Component {
  render() {
    return (
      <>
        <div className="title">
          Work Experiences
        </div>
        <div className="work-cards">
          <SICard />
          <SICard2 />
        </div>
      </>
    );
  }
}

export default Work;
