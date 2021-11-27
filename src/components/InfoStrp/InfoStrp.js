import React from "react";

import Info from "../../assets/images/icons/info.svg";

const InfoStrp = ({ infoText, infoLink }) => {
  return (
    <div className="info-container">
      <div className="info-icon">
        <img src={Info} alt="info" />
      </div>
      <p className="info-text">
        {infoText}
        <a href={infoLink}>{infoLink}</a>
      </p>
    </div>
  );
};

export default InfoStrp;
