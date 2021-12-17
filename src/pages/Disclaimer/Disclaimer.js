import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";

import STBanner from "../../assets/images/st-banner.jpg";

const Disclaimer = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={STBanner} alt="STBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Statutory Details & Disclaimer" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <div className="sub-section mt-0">
              <h4 className="subtitle">Satutory Details</h4>
              <p className="body-text">
                Please read this information carefully. Access to this website
                is confirmation that you understand and agree to be bound by all
                of these terms and conditions. The information published on this
                web site should be used for information purposes only. It is
                subject to change without notice and should not be taken as
                advice.
              </p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="sub-section">
              <h4 className="subtitle">Disclaimer</h4>
              <p className="body-text">
                Investing in securities including equities and derivatives
                involves certain risks and considerations associated generally
                with making investments in securities. The value of the
                portfolio investments may be affected generally by factors
                affecting financial markets, such as price and volume,
                volatility in interest rates, currency exchange rates, changes
                in regulatory and administrative policies of the Government or
                any other appropriate authority (including tax laws) or other
                political and economic developments. Consequently, there can be
                no assurance that the objective of the strategy/ scheme would be
                achieved. The value of the portfolios may fluctuate and can go
                up or down. Prospective investors are advised to carefully
                review the Disclosure Document, Client Agreement, Fund
                documents, as applicable and other related documents carefully
                and in its entirety and consult their legal, tax and financial
                advisors to determine possible legal, tax and financial or any
                other consequences of investing under any strategy/ scheme,
                before making an investment decision. The composition of the
                portfolio is subject to changes within the provisions of the
                disclosure document/ fund documents. The benchmark of the
                strategy(ies)/ scheme(s) can be changed from time to time in the
                future. Trading volumes, settlement periods and transfer
                procedures may restrict the liquidity of investments in
                portfolios. Different segments of the Indian financial markets
                have different settlement periods and such periods may be
                extended significantly by unforeseen circumstances. The
                inability to make intended securities purchases due to
                settlement problems could cause the portfolio to miss certain
                investment opportunities. By the same rationale, the inability
                to sell securities held in the portfolio due to the absence of a
                well - developed and liquid secondary market for debt securities
                would result, at times, in potential losses to the portfolio. No
                claims may be made or entertained for any variances between the
                performance depictions and individual portfolio performance.
                Neither ICICI Prudential Asset Management Company Limited (the
                AMC) its Directors, Employees or Sponsors shall be in any way
                liable for any variations noticed in the returns of individual
                portfolios. The Client shall not make any claim against the AMC
                against any losses (notional or real) or against any loss of
                opportunity for gain under various offerings, on account of or
                arising out of such circumstance/ change in market condition or
                for any other reason which may specifically affect a particular
                sector or security, including but not limited to
                disruption/prohibition/ discontinuation/ suspension of trading
                in a particular Security including any index or scrip specific
                futures/ options or due to any act of Company, Market
                Intermediary by SEBI or any other regulatory authority which may
                result in trading in such security (ies) being completely or
                partially affected, to which the Portfolio Manager/ Investment
                Manager has taken exposure/ proposed to take exposure and is
                unable to take additional exposure/ restrain him from taking any
                position in a particular equity or related derivative
                instruments etc. due to any reason beyond the control of the
                Portfolio Manager/ Investment Manager resulting in unhedged
                positions or losses due to unwinding of certain positions or
                losses due to any reason or related to any of the aforesaid
                circumstances. By their nature, certain market risk disclosures
                are only estimates and could be materially different from what
                actually occurs in the future. As a result, actual future gains
                or losses could materially differ from those that have been
                estimated. Prospective investor(s) should before dealing and/or
                transacting in any of the products make their own investigation,
                seek appropriate professional advice and shall be fully
                responsible/are liable for any decision taken.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default Disclaimer;
