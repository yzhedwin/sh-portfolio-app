import { Avatar, Typography } from "@mui/material";
import React, { Component } from "react";
import nusImage from "../assets/nus.jpg";
import meImage from "../assets/me.jpg";
import { HtmlTooltip } from "../components/ToolTips";



class About extends Component {
  render() {
    return (
      <>
        <div className="welcome">Welcome to my Portfolio</div>
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
              <Typography
                title="LinkedIn"
                variant="h6"
                noWrap
                component="a"
                href="https://www.linkedin.com/in/yzhedwin/"
              >
                <Avatar
                  alt="me"
                  src={meImage}
                  sx={{ width: 150, height: 150 }}
                />
              </Typography>
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
              <Typography
                title="NUS"
                variant="h6"
                noWrap
                component="a"
                href="https://www.nus.edu.sg/"
              >
                <img src={nusImage} width={150} alt="NUS" />
              </Typography>
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
