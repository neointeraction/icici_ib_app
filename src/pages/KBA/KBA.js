import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";
import BreadCrumb from"../../components/BreadCrumb";

import IEBanner from "../../assets/images/kba-banner.jpg";
const KBA = ({ hamOpen }) => {

  const [crumbs, setCrumbs] = useState([ 'INVESTMENT STRATEGIES  /', ' KBA ']);
           const selected = crumb => {
            console.log(crumb);
          }
    return (
      <motion.div
        animate={{ scale: hamOpen ? 0.995 : 1 }}
        transition={{ duration: 0.3 }}
        initial={false}
        className="page-container"
      >
        <div className="banner-static">
          <img src={IEBanner} alt="IEBanner" />
          <div className="banner-static-content">
            <FadeInWhenVisible delay={0.1}>
              <Title titleText="KBA India Dynamic Fixed Income Fund" />
            </FadeInWhenVisible>
          </div>
        </div>
        <div className="section-padding">
          <div className="container">

           {/* <div className="marg-sixty">
            <a className="breadcrumbs" href="#/funds"> Investment Strategies  /  KBA </a>
           </div> */}
           
          <BreadCrumb crumbs={ crumbs } selected={ selected }  />
          
          <div className="marg-sixty">
            <FadeInWhenVisible></FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="body-text">
              India Opportunities Fund is an open-ended Umbrella Unit Trust with segregated 
              liability between sub-funds governed by the laws of Ireland and authorized by the 
              Central Bank of Ireland (the Central Bank) under the European Communities 
              (Undertakings for Investment in Transferable Securities) Regulations 2011, (as amended). 
              The fund will be an actively managed fund. The fund’s performance is measured against the Nifty 
              Composite Debt Index (the Index). The fund aims to deliver total returns by active duration management 
              and credit selection through our large and experienced credit research capabilities housed in Mumbai.
              </p>
            </FadeInWhenVisible>
          </div>
          <div className="marg-sixty">
            <FadeInWhenVisible>
              <InfoStrp
                infoText="More information about this fund is available in the downloads section or contact at "
                infoLink="enquiry@iciciglobalinvestments.com"
                isMailInfo
              />
            </FadeInWhenVisible>
           </div>

           <div>
            <FadeInWhenVisible>
                <p className="asterisk-text">
                *Regulatory insertion for KBA  (PDF Attached of SFDR Disclosure)
                </p>
            </FadeInWhenVisible>
           </div>
           </div>
        </div>
      </motion.div>
    );
  };
  
  export default KBA;