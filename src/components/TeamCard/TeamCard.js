import React, { useState } from "react";

import Nimesh from "../../assets/images/team/nimesh.jpg";

const TeamCard = () => {
  const [hover, setHover] = useState(false);

  const handleCardHover = () => {
    setHover(!hover);
  };

  return (
    <div
      className="team-card-container"
      onMouseEnter={handleCardHover}
      onMouseLeave={handleCardHover}
    >
      <div className="tc-upfront">
        <div className="team-img">
          <img src={Nimesh} alt="team-profile-pic" />
        </div>
        <div className={`team-info ${hover ? "tc-onhover" : "hide"}`}>
          <h4 className="team-name">Mr. Nimesh Shah </h4>
          <h4 className="team-designation">Managing Director & CEO</h4>
          <div className={`team-summary ${hover ? "show" : null}`}>
            <p>
              Nimesh joined ICICI Prudential Asset Management Company Limited
              (the AMC) in 2007 as Managing Director and Chief Executive
              Officer.
            </p>
            <p>
              Nimesh has over 25 years of experience in banking and financial
              services industry and has been instrumental in laying a strong
              foundation for building the AMC’s asset management business. Under
              his leadership the AMC has seen tremendous growth in assets from
              USD 4bn to over USD 60bn (as of Sept 30, 2021) and emerged as
              among the one of the trusted asset management companies in India.
              His focus has been always on being investor-centric, maintaining
              high levels of transparency and disclosures besides sticking to
              basics. This has helped the AMC to establish itself as a credible
              and trust-worthy brand.
            </p>
            <p>
              Prior to joining the AMC, he was with ICICI Bank where he handled
              many responsibilities including Project Finance, Corporate Banking
              and International Banking. He also led ICICI Bank’s foray into
              Middle-East and African region and helped establish ICICI’s brand
              presence in these geographies and in the International arena.
            </p>
            <p>
              By qualification, Nimesh is a Chartered Accountant from Institute
              of Chartered Accountants of India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
