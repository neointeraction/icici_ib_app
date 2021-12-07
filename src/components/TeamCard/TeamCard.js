import React, { useState } from "react";

const TeamCard = ({ image, name, designation, summary }) => {
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
          <img src={image} alt="team-profile-pic" />
        </div>
        <div className={`team-info ${hover ? "tc-onhover" : "hide"}`}>
          <h4 className="team-name">{name} </h4>
          <h4 className="team-designation">{designation}</h4>
          <div className={`team-summary ${hover ? "show" : null}`}>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
