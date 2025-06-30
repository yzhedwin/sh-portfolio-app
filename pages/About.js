import { Avatar, Grow, Slide, Typography, Zoom } from "@mui/material";
import React, { Component, useRef } from "react";
import { Waypoint } from "react-waypoint";
import { HtmlTooltip } from "../components/ToolTips";
import { useInView, motion } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  return (
    <section ref={ref} className="w-full py-20 px-4 perspective-1000 flex flex-col justify-center items-center w-full min-h-[100vh]">
      <motion.div
        initial={{ x: 0, y: -300, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        <h4>About me</h4>
      </motion.div>
      <div className="flex justify-around items-center w-full">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
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
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
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
              <img src="/assets/nus.jpg" width={150} alt="NUS" />
            </Typography>
          </HtmlTooltip>
        </motion.div>
      </div>
      <motion.div
        initial={{ x: 0, y: 300, opacity: 0 }}
        animate={isInView ? { x: 0, y: 0, opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="text-4xl font-bold text-center mb-12"
      >
        {/*todo add letter by letter animation */}
        <div className="mt-20 text-xxl text-white">
          I am a Year 3 Computer Engineering major at NUS
        </div>
      </motion.div>
    </section>
  );
}

