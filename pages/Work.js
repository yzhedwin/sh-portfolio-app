import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import JobCard from "../components/cards/JobCard";
import { DSTA_INTERNSHIP_COMPANY, DSTA_INTERNSHIP_COMPANY_LOGO, DSTA_INTERNSHIP_COMPANY_URL, DSTA_INTERNSHIP_DESCRIPTION, DSTA_INTERNSHIP_DESCRIPTION_2, DSTA_INTERNSHIP_DESCRIPTION_3, DSTA_INTERNSHIP_DESCRIPTION_4, DSTA_INTERNSHIP_FRAMEWORKS, DSTA_INTERNSHIP_IMAGE_URL, DSTA_INTERNSHIP_JOB_TITLE, DSTA_INTERNSHIP_JOB_TYPE, DSTA_INTERNSHIP_SUMMARY, SI_INTERNSHIP_COMPANY, SI_INTERNSHIP_COMPANY_LOGO, SI_INTERNSHIP_COMPANY_URL, SI_INTERNSHIP_DESCRIPTION, SI_INTERNSHIP_DESCRIPTION_2, SI_INTERNSHIP_DESCRIPTION_3, SI_INTERNSHIP_DESCRIPTION_4, SI_INTERNSHIP_FRAMEWORKS, SI_INTERNSHIP_IMAGE_URL, SI_INTERNSHIP_JOB_TITLE, SI_INTERNSHIP_JOB_TYPE, SI_INTERNSHIP_SUMMARY } from "../components/Constants";
import Internship from "../components/Internship";
/**
 * Full Time internship
 * Part Time Job
 */

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <section ref={ref} className="py-20 px-4 perspective-1000">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Work Experiences
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Internships

        <Internship isInView={isInView} />

      </motion.div>


      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12 mt-20"
      >
        Professional Experiences
      </motion.div>
    </section>
  );
};

export default Work;