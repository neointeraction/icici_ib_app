import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import TeamCard from "../../components/TeamCard";

import IEBanner from "../../assets/images/ie-banner.jpg";
import Nimesh from "../../assets/images/team/nimesh.jpg";
import Sankaran from "../../assets/images/team/sankaran.jpg";
import Rahul from "../../assets/images/team/rahul.jpg";

const data = [
  {
    image: Nimesh,
    name: "Mr. Nimesh Shah",
    designation: "Managing Director & CEO",
    summary: `Nimesh joined ICICI Prudential Asset Management Company Limited
    (the AMC) in 2007 as Managing Director and Chief Executive
    Officer. Nimesh has over 25 years of experience in banking and financial
    services industry and has been instrumental in laying a strong
    foundation for building the AMC’s asset management business. Under
    his leadership the AMC has seen tremendous growth in assets from
    USD 4bn to over USD 60bn (as of Sept 30, 2021) and emerged as
    among the one of the trusted asset management companies in India.
    His focus has been always on being investor-centric, maintaining
    high levels of transparency and disclosures besides sticking to
    basics. This has helped the AMC to establish itself as a credible
    and trust-worthy brand. Prior to joining the AMC, he was with ICICI Bank where he handled
    many responsibilities including Project Finance, Corporate Banking
    and International Banking. He also led ICICI Bank’s foray into
    Middle-East and African region and helped establish ICICI’s brand
    presence in these geographies and in the International arena. By qualification, Nimesh is a Chartered Accountant from Institute
    of Chartered Accountants of India.`,
  },
  {
    image: Sankaran,
    name: "Mr. Sankaran Naren",
    designation: "Executive Director and CIO",
    summary: `Naren is the Executive Director and Chief Investment Officer at the AMC. In his role, Naren is responsible for overseeing assets across domestic mutual funds, offshore advisory mandates and managed accounts
    Naren is instrumental for devising the overall investment strategy of the firm and its successful execution. He also has direct fund management responsibilities for some domestic equity funds and also advises foreign clients on some India equity funds.
    Naren has over three decades of experience in financial services industry in India. He has been associated with the AMC since October 2004 when the AMC managed assets of ~USD 2.5bn. Today the AMC is one of the leading asset management company in India with over USD 60bn of assets under domestic mutual funds and offshore advisory business. (as of Sept 30, 2021)   
    Naren’s core competency lies in his deep knowledge and understanding of local markets. He is recognized as a leading voice on the Indian economy/equity markets across the investment and financial services sector. Under his leadership as CIO, the AMC has been consistently honored by various companies of international repute including Morning Star, Asia Asset Management and Thomson Reuters Lipper Fund awards    
    Prior to joining the AMC, Naren was associated with leading financial service organizations in various positions.
    Naren holds a B. Tech degree from Indian Institute of Technology, Chennai and a Post Graduate Diploma in Management from Indian Institute of Management, Kolkata.`,
  },
  {
    image: Rahul,
    name: "Mr. Rahul Goswami",
    designation: "CIO, Fixed Income",
    summary:
      "Rahul is the Chief Investment Officer for the AMC’s Fixed Income desk. In his role as CIO, Rahul is responsible for laying out the fixed income strategy for assets of over USD 20bn, the largest in the Indian Asset Management Industry. He also has direct fund management responsibilities for several funds. He also advises certain funds domiciled in Taiwan. Rahul has been associated with the AMC since July 2004. He served as a Senior Rates Trader and Head of Primary Dealership Business at Standard Chartered Bank for a three year period (2009 to 2012) before returning to the AMC in Sept 2012.Rahul is the Chief Investment Officer for the AMC’s Fixed Income desk. In his role as CIO, Rahul is responsible for laying out the fixed income strategy for assets of over USD 20bn, the largest in the Indian Asset Management Industry. He also has direct fund management responsibilities for several funds. He also advises certain funds domiciled in Taiwan. Rahul has been associated with the AMC since July 2004. He served as a Senior Rates Trader and Head of Primary Dealership Business at Standard Chartered Bank for a three year period (2009 to 2012) before returning to the AMC in Sept 2012. Rahul possesses an in-depth knowledge of credit profile of Indian entities. Under his leadership as a CIO, several funds managed by the AMC have gained recognition for consistently delivering superior risk-adjusted performance. Rahul has more than two decades of experience in Indian fixed income market. Prior to joining the AMC in July 2004, Rahul was a fund manager with the Fixed Income team of Franklin Templeton Asset Management in India. He has also been associated with leading debt broking outfits in India for several years. By qualification, Rahul holds a Bachelor’s Degree in Science and also Masters in Business Administration from University of Bhopal, India.",
  },
];

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
              {data.map((item) => (
                <div className="col-xl-6 col-lg-6">
                  <TeamCard
                    image={item.image}
                    name={item.name}
                    designation={item.designation}
                    summary={item.summary}
                  />
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </motion.div>
  );
};

export default Team;
