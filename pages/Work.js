import { Grow, Slide } from "@mui/material";
import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
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
          <Slide
            in={this.props.in}
            direction="right"
            timeout={{ enter: 1000, exit: 0 }}
            mountOnEnter
            unmountOnExit
          >
            <div>Work Experiences</div>
          </Slide>
        </div>
        <Waypoint
          onEnter={this.props._enter}
          onLeave={this.props._exit}
          topOffset={"10%"}
          bottomOffset={"10%"}
        >
          <div className="work-cards">
            <Grow
              in={this.props.in}
              timeout={{ enter: 1000, exit: 200 }}
              mountOnEnter
              unmountOnExit
            >
              <div className="card1">
                <SICard />
              </div>
            </Grow>
            <Grow
              in={this.props.in}
              timeout={{ enter: 2000, exit: 200 }}
              mountOnEnter
              unmountOnExit
            >
              <div className="card2">
                <SICard2 />
              </div>
            </Grow>
          </div>
        </Waypoint>
      </>
    );
  }
}

export default Work;
