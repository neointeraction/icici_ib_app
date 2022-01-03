import React from "react";
import { motion } from "framer-motion";

import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import Close from "../../assets/images/icons/close.svg";

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
          <div className="modal-close">
            <motion.img
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              src={Close}
              alt="Close"
              onClick={toggle}
            />
          </div>
          <div className="modal-profile">
            <div className="row">
              <div className="col-md-5">
                <div className="team-img">
                  <img src={image} alt="team-profile-pic" />
                </div>
              </div>
              <div className={`team-info modal-team-info col-md-7`}>
                <h4 className="team-name text-left modal-team-name">{name} </h4>
                <h4 className="team-designation text-left modal-team-designation">
                {designation}
                </h4>
              </div>

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
