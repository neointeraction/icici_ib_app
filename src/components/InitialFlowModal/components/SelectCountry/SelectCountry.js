import React from "react";

import CountryCard from "../../../CountryCard";

import {ReactComponent as CntryVctr} from '../../../../assets/images/icons/cntry-vector.svg';
import flagImg1 from "../../../../assets/images/icons/Flag-UK.png";
import flagImg2 from "../../../../assets/images/icons/Flag-singapore.png";
import flagImg3 from "../../../../assets/images/icons/Flag-US.png";
import flagImg4 from "../../../../assets/images/icons/Flag-UAE.png";
import flagImg5 from "../../../../assets/images/icons/Flag-finland.png";
import flagImg6 from "../../../../assets/images/icons/Flag-france.png";
import flagImg7 from "../../../../assets/images/icons/Flag-germany.png";
import flagImg8 from "../../../../assets/images/icons/Flag-italy.png";
import flagImg9 from "../../../../assets/images/icons/Flag-lux.png";
import flagImg10 from "../../../../assets/images/icons/Flag-spain.png";
import flagImg11 from "../../../../assets/images/icons/Flag-sweden.png";
import flagImg12 from "../../../../assets/images/icons/Flag-switzerland.png";
import flagImg13 from "../../../../assets/images/icons/Flag-UAE.png";
import flagImg14 from "../../../../assets/images/icons/Flag-HK.png";



const country = [
    {
      countryName:"UK",
      flagImage:flagImg1,
    },
    {
      countryName:"Singapore",
      flagImage:flagImg2,
    },
    {
      countryName:"USA",
      flagImage:flagImg3,
    },
    {
        countryName:" UAE",
        flagImage:flagImg4,
      },
      {
        countryName:"Finland",
        flagImage:flagImg5,
      },
      {
        countryName:"France",
        flagImage:flagImg6,
      },
      {
        countryName:"Germany",
        flagImage:flagImg7,
      },
      {
        countryName:"Italy",
        flagImage:flagImg8,
      },
      {
        countryName:"Luxembourg",
        flagImage:flagImg9,
      },
      {
        countryName:"Spain",
        flagImage:flagImg10,
      },
      {
        countryName:"Sweden",
        flagImage:flagImg11,
      },
      {
        countryName:"Switzerland",
        flagImage:flagImg12,
      },
      {
        countryName:"DIFC UAE",
        flagImage:flagImg13,
      },
      {
        countryName:"Hong Kong",
        flagImage:flagImg14,
      },
      
  ];

const SelectCountry = () => {
    return (
      <>
      <div className="country-slider">
      <h5 class="modal-title">Select your country</h5>
          <div className="row cntry-opt">
                  {
                      country.map((item)=>(
                        
                        <CountryCard flag={item.flagImage} cntryName={item.countryName}/>
                       
                      ))
                  }
                  <label>
                  <CntryVctr className="cntry-vctr-img" />
                  <input className="cntry-inpt-txt" placeholder="Type your country name" type="text"/>
                  </label>
          </div>
          <div className="modal-btm-btn cntry-prcd">
          <button className="prcd-btn ">Proceed</button>
          </div>
      </div>
       </>
    );
  };
  
  export default SelectCountry;