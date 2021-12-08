import React from "react";

import useModal from "../../hooks/useModal";
import Modal from "../Modal";

const TeamCard = ({ image, name, designation, summary }) => {
  const { toggle, visible } = useModal();

  return (
    <>
      <div className="team-card-container" onClick={toggle}>
        <div className="tc-upfront">
          <div className="team-img">
            <img src={image} alt="team-profile-pic" />
          </div>
          <div className={`team-info `}>
            <h4 className="team-name">{name} </h4>
            <h4 className="team-designation">{designation}</h4>
          </div>
        </div>
      </div>

      <Modal visible={visible} toggle={toggle}>
        <div className="modal-content">
          <div className="modal-profile">
            <div className="row">
              <div className="col-md-8">
                <div className="team-img">
                  <img src={image} alt="team-profile-pic" />
                </div>
              </div>
            </div>
            <div className={`team-info modal-team-info `}>
              <h4 className="team-name text-left modal-team-name">{name} </h4>
              <h4 className="team-designation text-left modal-team-designation">
                {designation}
              </h4>
            </div>
          </div>
          <div className="summary-text">
            <p className="modal-body-text"> {summary} </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TeamCard;
