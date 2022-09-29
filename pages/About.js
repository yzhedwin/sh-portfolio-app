import { Avatar, Typography } from "@mui/material";
import React, { Component } from "react";
import { HtmlTooltip } from "../components/ToolTips";

class About extends Component {
  render() {
    return (
      <>
        <div className="title">About me</div>
        <div className="about-introcontainer">
          <div className="about-profile">
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
          <div className="about-school">
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
        </div>
        <div className="intro">
          I am a Year 3 Computer Engineering major at NUS
        </div>
      </>
    );
  }
}

export default About;
