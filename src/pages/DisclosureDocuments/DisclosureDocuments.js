import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import DownloadList from "../../components/DownloadList";

import DDownloadBanner from "../../assets/images/dd-banner.jpg";

const data = [
  {
    filename: "Disclosure Documents 1",
    updated: "Updated on: 21 March 2021",
  },
  {
    filename: "Disclosure Documents 2",
    updated: "Updated on: 21 March 2021",
  },
  {
    filename: "Disclosure Documents 3",
    updated: "Updated on: 21 March 2021",
  },
  {
    filename: "Disclosure Documents 4",
    updated: "Updated on: 21 March 2021",
  },
  {
    filename: "Disclosure Documents 5",
    updated: "Updated on: 21 March 2021",
  },
];

const DisclosureDocuments = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={DDownloadBanner} alt="DDownloadBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Disclosure Documents" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">
              Disclosure Documents
            </h4>
            <p className="section-sub-subtitle">
              Download the right form for your needs
            </p>
          </FadeInWhenVisible>
          {data.map((item) => (
            <FadeInWhenVisible>
              <DownloadList filename={item.filename} updated={item.updated} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DisclosureDocuments;
