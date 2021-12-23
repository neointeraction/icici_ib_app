import React, { useState, useRef } from "react";
import Slider from "react-slick";

import Modal from "../Modal";
import SelectCountry from "./components/SelectCountry";
import ClassifyYourself from "./components/ClassifyYourself";
import Terms from "./components/Terms/Terms";

const InitialPageModal = ({ visible, toggle }) => {
  const slider = useRef();
  const [slide, setSlide] = useState(0);

  const prev = () => {
    slider.current.slickPrev();
  };

  const next = () => {
    slider.current.slickNext();
  };

  var slideSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    beforeChange: (current, next) => setSlide(next),
    afterChange: (current) => setSlide(current),
    adaptiveHeight: true,
  };

  console.log(slide, "slider.current");

  return (
    <Modal visible={visible} toggle={toggle} md preventCloseOnOverlayClick>
      <Slider ref={(c) => (slider.current = c)} {...slideSettings}>
        <div>
          <h1 className="modal-title">Select your country</h1>
          <SelectCountry />
        </div>
        <div>
          <h1 className="modal-title">How do you classify yourself ?</h1>
          <ClassifyYourself />
        </div>
        <div>
          <h1 className="modal-title">Terms & Conditions</h1>
          <Terms />
        </div>
      </Slider>
      <div className="modal-slick-action-btn">
        {slide === 0 ? (
          <div></div>
        ) : (
          <button className="custom-button" onClick={prev}>
            Back
          </button>
        )}
        {slide === 2 ? (
          <button className="custom-button" onClick={toggle}>
            Accept
          </button>
        ) : (
          <button className="custom-button" onClick={next}>
            Proceed
          </button>
        )}
      </div>
    </Modal>
  );
};

export default InitialPageModal;
