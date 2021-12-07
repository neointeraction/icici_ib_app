import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";

import PrivacyBanner from "../../assets/images/privacy-banner.jpg";

const Privacy = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={PrivacyBanner} alt="PrivacyBanner" />
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <Title titleText="Privacy Policy" />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="body-text">
              We are committed to maintaining the accuracy, confidentiality, and
              security of our users’ personal information. This Privacy Policy
              describes the personal information that we collect from or about
              our users, how we use that information, and to whom it is
              disclosed.
            </p>
            <p className="body-text">
              This Policy is designed to comply with the privacy requirements
              established by the General Data Protection Regulation (“GDPR”), as
              well as with all applicable laws around the world that are
              intended to protect an individual’s privacy. It supports our need
              to collect information from our users as necessary for our
              performance of business services and functions, while also
              recognizing a user’s right to have their information handled in a
              way that protects the privacy of their personal information.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <InfoStrp
              infoText="You may learn more about the GDPR here: "
              infoLink="https://www.eugdpr.org/"
            />
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default Privacy;
