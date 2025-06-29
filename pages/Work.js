import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import JobCard from "../components/cards/JobCard";
import { DSTA_INTERNSHIP_COMPANY, DSTA_INTERNSHIP_COMPANY_LOGO, DSTA_INTERNSHIP_COMPANY_URL, DSTA_INTERNSHIP_DESCRIPTION, DSTA_INTERNSHIP_DESCRIPTION_2, DSTA_INTERNSHIP_DESCRIPTION_3, DSTA_INTERNSHIP_DESCRIPTION_4, DSTA_INTERNSHIP_FRAMEWORKS, DSTA_INTERNSHIP_IMAGE_URL, DSTA_INTERNSHIP_JOB_TITLE, DSTA_INTERNSHIP_JOB_TYPE, DSTA_INTERNSHIP_SUMMARY, SI_INTERNSHIP_COMPANY, SI_INTERNSHIP_COMPANY_LOGO, SI_INTERNSHIP_COMPANY_URL, SI_INTERNSHIP_DESCRIPTION, SI_INTERNSHIP_DESCRIPTION_2, SI_INTERNSHIP_DESCRIPTION_3, SI_INTERNSHIP_DESCRIPTION_4, SI_INTERNSHIP_FRAMEWORKS, SI_INTERNSHIP_IMAGE_URL, SI_INTERNSHIP_JOB_TITLE, SI_INTERNSHIP_JOB_TYPE, SI_INTERNSHIP_SUMMARY } from "../components/Constants";
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
          className="card1 bg-red p-4 rounded-2xl shadow-2xl transform-style-preserve-3d m-auto"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <JobCard
            imageURL={DSTA_INTERNSHIP_IMAGE_URL}
            companyLogo={DSTA_INTERNSHIP_COMPANY_LOGO}
            companyName={DSTA_INTERNSHIP_COMPANY}
            jobTitle={DSTA_INTERNSHIP_JOB_TITLE}
            jobType={DSTA_INTERNSHIP_JOB_TYPE}
            jobSummary={DSTA_INTERNSHIP_SUMMARY}
            linkToCompany={DSTA_INTERNSHIP_COMPANY_URL}
            jobDescriptionList={[
              DSTA_INTERNSHIP_DESCRIPTION, DSTA_INTERNSHIP_DESCRIPTION_2, DSTA_INTERNSHIP_DESCRIPTION_3, DSTA_INTERNSHIP_DESCRIPTION_4
            ]}
            frameworkList={DSTA_INTERNSHIP_FRAMEWORKS}
          />
        </motion.div>
      </div>
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