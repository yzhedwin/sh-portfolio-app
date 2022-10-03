import { Avatar, Grow, Slide, Typography, Zoom } from "@mui/material";
import React, { Component } from "react";
import { Waypoint } from "react-waypoint";
import { HtmlTooltip } from "../components/ToolTips";

class About extends Component {
  render() {
    return (
      <>
        <Waypoint
          onEnter={this.props._titleEnter}
          onLeave={this.props._titleExit}
          topOffset={"10%"}
          bottomOffset={"10%"}
        >
          <div className="title">
            <Slide
              mountOnEnter
              unmountOnExit
              in={this.props.aboutTitle}
              direction="right"
              timeout={{ enter: 1000, exit: 0 }}
            >
              <h4>About me</h4>
            </Slide>
          </div>
        </Waypoint>
        <div className="about-introcontainer">
          <Waypoint
            onEnter={this.props._profileEnter}
            onLeave={this.props._profileExit}
            topOffset={"25%"}
            bottomOffset={"25%"}
          >
            <div className="about-profile">
              <Zoom
                in={this.props.aboutProfile}
                timeout={500}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  <HtmlTooltip
                    title={
                      <>
                        <Typography color="inherit">
                          <em>Edwin Yeo</em>
                        </Typography>
                        {"Click to view my LinkedIn Profile!"}
                      </>
                    }
                  >
                    <div>
                      <Typography
                        title="LinkedIn"
                        variant="h6"
                        noWrap
                        component="a"
                        href="https://www.linkedin.com/in/yzhedwin/"
                      >
                        <Avatar
                          alt="me"
                          src="/assets/me.jpg"
                          sx={{ width: 150, height: 150 }}
                        />
                      </Typography>
                    </div>
                  </HtmlTooltip>
                </div>
              </Zoom>
            </div>
          </Waypoint>
          <div className="about-school">
          <Zoom
            in={this.props.aboutProfile}
            style={{
              transitionDelay: this.props.aboutProfile ? "500ms" : "0ms",
            }}
            timeout={1000}
            mountOnEnter
            unmountOnExit
          >
            <div>
              <HtmlTooltip
                title={
                  <>
                    <b>Click to visit NUS Webpage!</b>
                  </>
                }
              >
                <div>
                  <Typography
                    title="NUS"
                    variant="h6"
                    noWrap
                    component="a"
                    href="https://www.nus.edu.sg/"
                  >
                    <img src="/assets/nus.jpg" width={150} alt="NUS" />
                  </Typography>
                </div>
              </HtmlTooltip>
            </div>
          </Zoom>
          </div>
        </div>
        <Zoom
          in={this.props.aboutProfile}
          style={{
            transitionDelay: this.props.aboutProfile ? "1000ms" : "0ms",
          }}
          timeout={1000}
          mountOnEnter
          unmountOnExit
        >
          <div className="intro">
            I am a Year 3 Computer Engineering major at NUS
          </div>
        </Zoom>
      </>
    );
  }
}

export default About;
