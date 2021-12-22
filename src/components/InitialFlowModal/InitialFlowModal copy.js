import React from "react";
import {ReactComponent as ProfInv} from '../../assets/images/icons/prof-inv.svg';
import {ReactComponent as RetInv}  from '../../assets/images/icons/ret-inv.svg';
import { motion } from "framer-motion";

import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import Close from "../../assets/images/icons/close.svg";
// import { Button } from 'react-bootstrap';

import flagImg from "../../assets/images/icons/Flag-UK.png";
import flagImg2 from "../../assets/images/icons/Flag-US.png";
import flagImg3 from "../../assets/images/icons/Flag-UAE.png";
// import CountryCard from "../../components/CountryCard/CountryCard";

// import invstrImg1 from "../../assets/images/icons/ret-inv.svg"; 
// import invstrImg2 from "../../assets/images/icons/prof-inv.svg";
import InvestorCard from "../InvestorCard";
import TC from "../ModalTC/ModalTC";

const country = [
    {
      countryName:"UK",
      flagImage:flagImg,
    },
    {
      countryName:"US",
      flagImage:flagImg2,
    },
    {
      countryName:"UAE",
      flagImage:flagImg3,
    },
    {
        countryName:"UK",
        flagImage:flagImg,
      },
      {
        countryName:"US",
        flagImage:flagImg2,
      },
      {
        countryName:"UAE",
        flagImage:flagImg3,
      },
      {
        countryName:"UK",
        flagImage:flagImg,
      },
      {
        countryName:"US",
        flagImage:flagImg2,
      },
      {
        countryName:"UAE",
        flagImage:flagImg3,
      },
      {
        countryName:"UK",
        flagImage:flagImg,
      },
      {
        countryName:"US",
        flagImage:flagImg2,
      },
      {
        countryName:"UAE",
        flagImage:flagImg3,
      },
      {
        countryName:"UK",
        flagImage:flagImg,
      },
      {
        countryName:"US",
        flagImage:flagImg2,
      },
      {
        countryName:"UAE",
        flagImage:flagImg3,
      },
  ];
  const investor =[
      {
          investorType:"Retail",
          investorImage:<RetInv className="inv-icon"/> ,
          summary:"Retail, or non-institutional, investors are, by definition, any investors that are not institutional investors. That is pretty much every person who buys and sells debt, equity, or other investments through a broker, bank, real estate agent etc"
      },
      {
        investorType:"Professional",
        investorImage: <ProfInv className="inv-icon"/>,
        summary:"Institutional investors invests in pension funds, mutual funds, money managers, insurance companies, investment banks, commercial trusts, endowment funds, hedge funds, and also some private equity investors"
    },
  ]
  const Terms = [
      {
          tcSummary:`Any prediction, projection, or forecast on e Information provided in this website is for information only and is subject to change without notice. It is not promised or guaranteed to be correct, complete, and up-to-date. The distribution of any fund and the offering of shares of any fund as mentioned on this website may be restricted in certain jurisdictions. It shall not be construed as any investment advice, recommendation, or an offer or solicitation, and shall not be used as basis for any contract or commitment to purchase or sell any security, instrument, or any products or services of ICICI Prudential Asset Management Company Limited. It is the responsibility of any person in possession of this information and of any person wishing to apply for shares of any fund, to inform himself of and to observe all applicable laws and regulations of the countries of his nationality, residence, ordinary residence or domicile.
          Certain factual and statistical (both historical and projected) industry and market data provided was obtained by ICICI Prudential Asset Management Company Limited from independent, third-party sources that have not been verified as to its accuracy. Statements and assertions contained in this website reflect the belief of ICICI Prudential Asset Management Company Limited, which may be based in whole or in part on such data and other information.
          Information or views expressed in this website does not take into account or cater to specific investment objectives, financial situation or particular needs of any specific person. Investors should seek independent professional advice from financial advisers regarding the suitability of a particular investment product, taking into account his/her specific investment objective, financial situation or particular needs before making a commitment to purchase/invest. In the event that an investor chooses not to seek such advice, he/she should consider carefully whether such investment is suitable for him/her.
          conomy, stock market, bond market etc. is not necessarily indicative of the future performance of the funds or products. Past performance of the funds or products is not necessarily indicative of its future performance. Investments are subject to investment and foreign exchange risks etc. including possible loss of the principal amount invested. The value of units and any income arising from them may fall as well as rise.`
      }
  ]

const InitialFlowModal  = ({ cntryName,flag }) => {
    const { toggle, visible } = useModal();
  
    return (
      <>
        
        <button variant="primary" onClick={toggle}>hi</button>

        {/* <Modal visible={visible} toggle={toggle}>
          <div className="home-modal-content">
            <div class="home-modal-ttl-cls">
              <div className="modal-title">
                  <h3>Choose your Country</h3>
              </div>
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
        </div>
              
            <div className="cntrs">
              <div className="row">
            {country.map((cntryItem) => (
         <CountryCard flag={cntryItem.flagImage}
         cntryName={cntryItem.countryName}/>   
                     ))}
          </div>
          </div>
          <div class="modal-btm-buttons">
           <button class="custom-button">
              Proceed
           </button>
          </div>
          
          </div>
        </Modal> */}
        <Modal visible={visible} toggle={toggle}>
          <div className="home-modal-content">
            <div class="home-modal-ttl-cls">
              <div className="modal-title">
                  <h3>Select type of investor</h3>
              </div>
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
        </div>
            <div className="invstr-type">
            {investor.map((invstrItem) => (
         <InvestorCard invImg={invstrItem.investorImage}
         invType={invstrItem.investorType} invSummary={invstrItem.summary}/>   
                     ))}
          </div>
          
          <div class="modal-btm-buttons">
           <button class="custom-button">
              Back
           </button>
           <button class="custom-button">
              Accept
           </button>
          </div>
          
          </div>
        </Modal>
        {/* <Modal visible={visible} toggle={toggle}>
          <div className="home-modal-content">
            <div class="home-modal-ttl-cls">
              <div className="modal-title">
                  <h5>Terms and Conditions</h5>
              </div>
            </div>
            {Terms.map((termsItem) => (
                <TC summary = {termsItem.tcSummary} />
                     ))}
          <div class="modal-btm-buttons">
          
           <button class="custom-button">
              Back
           </button>
           <button class="custom-button">
              Accept
           </button>
          </div>
    
          </div>
        </Modal> */}
      </>
    );
};
  
  export default InitialFlowModal;