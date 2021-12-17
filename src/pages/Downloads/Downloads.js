import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import DownloadList from "../../components/DownloadList";

import DownloadBanner from "../../assets/images/download-banner.jpg";

const data = [
  {
    filename: "Fund Document 1",
    updated: "Updated on: 21 March 2021",
  },
  {
    filename: "Fund Document 2",
    updated: "Updated on: 21 March 2021",
  },
];

const Downloads = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={DownloadBanner} alt="DownloadBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Downloads" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Fund Documents</h4>
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
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Factsheets</h4>
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
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Performance</h4>
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
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <h4 className="section-subtitle text-center">Downloads</h4>
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

export default Downloads;
