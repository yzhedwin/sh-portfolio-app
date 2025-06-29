import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import JobCard from "../components/cards/JobCard";
import { SI_INTERNSHIP_COMPANY, SI_INTERNSHIP_COMPANY_LOGO, SI_INTERNSHIP_COMPANY_URL, SI_INTERNSHIP_DESCRIPTION, SI_INTERNSHIP_DESCRIPTION_2, SI_INTERNSHIP_DESCRIPTION_3, SI_INTERNSHIP_DESCRIPTION_4, SI_INTERNSHIP_FRAMEWORKS, SI_INTERNSHIP_IMAGE_URL, SI_INTERNSHIP_JOB_TITLE, SI_INTERNSHIP_JOB_TYPE, SI_INTERNSHIP_SUMMARY } from "../components/Constants";
/**
 * Full Time internship
 * Part Time Job
 */

const card3DVariants = {
  initial: { opacity: 0, rotateY: 45, scale: 0.9 },
  animate: { opacity: 1, rotateY: 0, scale: 1 },
};

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
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          variants={card3DVariants}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
          className="card1 bg-red p-6 rounded-2xl shadow-2xl transform-style-preserve-3d m-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <JobCard
            imageURL={SI_INTERNSHIP_IMAGE_URL}
            companyLogo={SI_INTERNSHIP_COMPANY_LOGO}
            companyName={SI_INTERNSHIP_COMPANY}
            jobTitle={SI_INTERNSHIP_JOB_TITLE}
            jobType={SI_INTERNSHIP_JOB_TYPE}
            jobSummary={SI_INTERNSHIP_SUMMARY}
            linkToCompany={SI_INTERNSHIP_COMPANY_URL}
            jobDescriptionList={[
              SI_INTERNSHIP_DESCRIPTION, SI_INTERNSHIP_DESCRIPTION_2, SI_INTERNSHIP_DESCRIPTION_3, SI_INTERNSHIP_DESCRIPTION_4
            ]}
            frameworkList={SI_INTERNSHIP_FRAMEWORKS}
          />
        </motion.div>

        <motion.div
          variants={card3DVariants}
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          transition={{ duration: 1 }}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
          className="card2 bg-red p-6 rounded-2xl shadow-2xl transform-style-preserve-3d m-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <JobCard
            imageURL="/assets/job/si-intern2.gif"
            companyLogo="/assets/job/si-logo.png"
            companyName="S&I Systems Pte Ltd"
            jobTitle="Product Developer Intern"
            jobType="Fixed Term Contract"
            jobDescription="Worked on a web application for an IoT platform."
            linkToCompany="https://si-asia.com/" />
        </motion.div>

      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Professional Experiences
      </motion.div>
    </section>
  );
};

export default Work;