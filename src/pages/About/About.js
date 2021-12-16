import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";

import AboutImg from "../../assets/images/about.jpg";
import AboutImgMap from "../../assets/images/about-map.jpg";
import Star1 from "../../assets/images/icons/star1.svg";
import Star2 from "../../assets/images/icons/star2.svg";
import Star3 from "../../assets/images/icons/star3.svg";
import Logo from "../../assets/images/about-logo.png";

const About = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={AboutImg} alt="AboutImg" />

        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="About US" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible></FadeInWhenVisible>
          <div className="row">
            <div className="col-md-3">
              <FadeInWhenVisible>
                <div className="about-logo-container">
                  <img src={Logo} alt="Logo" />
                </div>
              </FadeInWhenVisible>
            </div>
            <div className="col-md-8">
              <FadeInWhenVisible>
                <p className="body-text text-left">
                  <strong>
                    ICICI Prudential Asset Management Company Limited
                  </strong>
                  (the AMC/IPAMC) offers fund management and advisory services
                  to marquee global clients investing across public equities, IG
                  and High Yield Credits, fixed income, and alternative
                  strategies through FPI registered funds, separate accounts
                  (custom mandates) and offshore feeder funds into ICICI
                  Prudential Mutual Funds. The investors in these funds are
                  retail individuals, high and ultra-high net worth individuals,
                  large pensions, sovereigns, and other institutions from North
                  Asia, Europe, Latin America, and the GCC. ICICI Global
                  Investments branding represents the international asset
                  management activities of the AMC. The AMC firm provides
                  bespoke advisory and fund management services focused in
                  Indian capital markets to global institutional investors, led
                  by a specialized cross-functional team across the asset
                  management company firm.
                </p>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <p className="body-text text-left">
                  <strong>
                    ICICI Prudential Asset Management Company Limited
                  </strong>
                  (The AMC) is a leading India-based asset manager that provides
                  a broad range of investment solutions to over 6mn investors
                  across 250 cities in India. The AMC also services Non-Resident
                  Indians (NRI’s) through its affiliate presence in the GCC, and
                  Mauritius. With ~USD 60bn in assets under management and
                  advisory, the AMC’s investment strategies are designed to
                  deliver long-term superior risk-adjusted returns.
                </p>
              </FadeInWhenVisible>
            </div>
          </div>

          <FadeInWhenVisible>
            <InfoStrp
              infoText=" For more information about the AMC, Please visit"
              infoLink="https://www.icicipruamc.com/about-us"
            />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <div className="about-map-img">
              <img src={AboutImgMap} alt="AboutImg" />
            </div>
          </FadeInWhenVisible>
          <div className="map-legend">
            <FadeInWhenVisible>
              <ul className="map-legend-list">
                <li>
                  <span>
                    <img src={Star1} alt="star" />
                  </span>
                  Asset manager partnership
                </li>
                <li>
                  <span>
                    <img src={Star2} alt="star" />
                  </span>
                  Asset manager partnership
                </li>
                <li>
                  <span>
                    <img src={Star3} alt="star" />
                  </span>
                  ICICI International & ICICI Bank
                </li>
              </ul>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
