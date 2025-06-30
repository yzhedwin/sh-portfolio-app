import { useRef } from "react";
import Header from "../components/Header";
import About from "./About";
import Project from "./Project";
import Work from "./Work";
import { motion, useInView } from "framer-motion";
/**
 * TODO:
 * Add Animations
 * Dark/Light mode switch
 *
 *
 */
function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center min-h-[150vh] w-[100%] items-center overflow-x-hidden" >
        <motion.div
          ref={ref}
          initial={{ x: 0, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="flex justify-center items-center w-full min-h-[100vh] welcome text-4xl font-bold text-center mb-12"
        >
          <h4>Welcome to my Portfolio</h4>
        </motion.div>

        <About />
        <Work />
        <Project />
      </div >
    </>
  );
}


export default Home;
