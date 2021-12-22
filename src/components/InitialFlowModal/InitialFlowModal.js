import React from "react";
import Slider from "react-slick";

import { motion } from "framer-motion";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import Close from "../../assets/images/icons/close.svg";
import Prev from "../../assets/images/icons/prev.svg";
import Next from "../../assets/images/icons/next.svg";

import SelectCountry from "./components/SelectCountry";
import InvestorType from "./components/InvestorType/InvestorType";
import TermsConditions from "./components/TermsConditions/TermsConditions";



function InitialFlowModal()  {
    const { toggle, visible } = useModal();
  
    var slideSettings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: (
        <motion.img
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          initial={false}
          src={Prev}
          alt="Prev"
        />
      ),
      nextArrow: (
        <motion.img
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.5 }}
          initial={false}
          src={Next}
          alt="Next"
        />
      ),
    };

    return (
      <>
        
        {/* <button variant="primary" onClick={toggle}>hi</button> */}

        
        <Modal visible={visible} toggle={toggle}>
       
        <div className="home-modal-content">
        <Slider {...slideSettings}>
          <div className="slide-item">
          <SelectCountry />
          </div>
          <div className="slide-item">
          <InvestorType />
          </div>
          <div className="slide-item">
          <TermsConditions />
          </div>
            </Slider>
        </div>
            
        
        </Modal>
        
      </>
    );
};

  
  export default InitialFlowModal;