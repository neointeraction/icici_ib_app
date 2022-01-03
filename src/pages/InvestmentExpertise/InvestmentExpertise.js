import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";

import IEBanner from "../../assets/images/ie-banner.jpg";
import IEBanner2 from "../../assets/images/ie-banner2.jpg";

const InvestmentExpertise = ({ hamOpen }) => {
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
            <Title titleText="Investment Expertise" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible></FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="body-text">
              The AMC has a large and experienced Investment team based in
              Mumbai. The team possesses in-depth local expertise and research
              coverage for more than 400 Indian companies for its equity
              investments across onshore and offshore strategies. The firm has
              built credible and long track records, with superior risk-adjusted
              performance across a range of investment strategies. This has been
              achieved through a combination of top-down and bottom-up
              fundamental research, a process-driven investment approach, and a
              culture of open communication that brings out the best of each
              team member. The AMC runs separate teams for all asset classes.
              With the rapid growth in assets under management, the AMC has
              created a boutique culture within the equity team which allows
              each fund manager to operate within his area of core competency.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <p className="body-text">
              The award-winning fixed income team has extensive experience in
              managing funds across the yield curve and credit profiles. The AMC
              rigorously follows an investment philosophy that seeks ‘Safety,
              Liquidity and Returns’ in that order for consistent and stable
              long-term returns. During every market cycle, the AMC’s highly
              experienced and strong origination, portfolio, and credit research
              team has displayed a superior risk-adjusted track record, without
              any credit default or delay in payments for investments across
              mutual funds or advised offshore mandates.
            </p>
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="section-padding bordered-grid inv-sust">
          <div className="img-text-flex">
            <div className="itf-img">
              <img src={IEBanner2} alt="IEBanner2" />
            </div>

            <div className="itf-content ">
              <FadeInWhenVisible>
                <Title
                  titleText="Our Commitment to ESG and Sustainability in Investing"
                  align
                />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <p className="body-text text-left">
                  The award-winning fixed income team has extensive experience
                  in managing funds across the yield curve and credit profiles.
                  The AMC rigorously follows an investment philosophy that seeks
                  ‘Safety, Liquidity and Returns’ in that order for consistent
                  and stable long-term returns. During every market cycle, the
                  AMC’s highly experienced and strong origination, portfolio,
                  and credit research team has displayed a superior
                  risk-adjusted track record, without any credit default or
                  delay in payments for investments across mutual funds or
                  advised offshore mandates.
                </p>
                <FadeInWhenVisible>
                  <InfoStrp
                    infoText=" Our Stewardship Policy :  "
                    infoLink="https://www.icicipruamc.com/stewardship-responsibility"
                  />
                </FadeInWhenVisible>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
      <div className="section-padding pt-0">
        <div className="container">
          <FadeInWhenVisible>
            <Title titleText="Our Group’s Corporate Social Responsibility (CSR) Commitments" />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="body-text">
              CSR activities form an integral part of the CSR activities
              undertaken by the AMC. The objective of the AMC is to pro-actively
              support meaningful socio-economic development in India and enable
              a larger number of people to participate in or benefit from
              India’s economic progress either directly or through implementing
              agency. The AMC’s CSR activities are largely focused on the areas
              of Skill Development and sustainable livelihood, education,
              financial inclusion, healthcare, providing support for natural
              calamities and disasters, etc. The CSR activities of the AMC are
              primarily undertaken through ICICI Foundation for inclusive growth
              established in 2008.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <InfoStrp
              infoText="For more details please visit "
              infoLink="https://www.icicipruamc.com/corporate-social-responsibility"
            />
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestmentExpertise;
