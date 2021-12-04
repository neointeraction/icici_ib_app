import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import TeamCard from "../../components/TeamCard";

import IEBanner from "../../assets/images/ie-banner.jpg";

const Team = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={IEBanner} alt="IEBanner" />
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <Title titleText="Our Team" />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <TeamCard />
              </div>
              <div className="col-xl-6 col-lg-6">
                <TeamCard />
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
