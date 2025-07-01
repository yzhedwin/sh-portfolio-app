import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import JobCard from "./cards/JobCard";
import { INTERNSHIP_CARDS } from "./Constants";

const card3DVariants = {
    initial: { opacity: 0, rotateY: 45, scale: 0.9 },
    animate: { opacity: 1, rotateY: 0, scale: 1 },
};

export default function Internship({ isInView }) {
    const [card, setCard] = useState();

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {INTERNSHIP_CARDS.map((card) => (
                <motion.div
                    key={card.id}
                    layoutId={card.id}
                    initial={{ x: 0, y:-10, opacity: 0 }}
                    animate={isInView ? { x: 0, y:0, opacity: 1 } : {}}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
                    className="card bg-red p-6 rounded-2xl shadow-2xl transform-style-preserve-3d"
                    onClick={() => setCard(card)}
                >
                    <div className="h-[45vh]">
                        <JobCard
                            expanded={false}
                            imageURL={card.imageURL}
                            companyLogo={card.companyLogo}
                            companyName={card.companyName}
                            jobTitle={card.jobTitle}
                            jobType={card.jobType}
                            jobSummary={card.jobSummary}
                            linkToCompany={card.linkToCompany}
                            jobDescriptionList={card.jobDescriptionList}
                            frameworkList={card.frameworkList}
                            card={card}
                        />
                    </div>
                </motion.div>
            ))}
            {/* To fix screen on phones */}
            <AnimatePresence>
                {card && (
                    <motion.div
                        layoutId={card.id}
                        className="overlay fixed inset-0 flex items-center justify-center"
                        onClick={() => setCard(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >

                        <div className="scale-90 sm:h-full sm:w-full sm:scale-100 sm:py-20">

                            <JobCard
                                expanded={true}
                                imageURL={card.imageURL}
                                companyLogo={card.companyLogo}
                                companyName={card.companyName}
                                jobTitle={card.jobTitle}
                                jobType={card.jobType}
                                jobSummary={card.jobSummary}
                                linkToCompany={card.linkToCompany}
                                jobDescriptionList={card.jobDescriptionList}
                                frameworkList={card.frameworkList}
                            />

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}