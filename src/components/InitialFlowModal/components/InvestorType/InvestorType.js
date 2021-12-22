import React from "react";

import InvestorCard from "../../../InvestorCard";

import {ReactComponent as ProfInv} from '../../../../assets/images/icons/prof-inv.svg';
import {ReactComponent as RetInv}  from '../../../../assets/images/icons/ret-inv.svg';

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

const InvestorType = () => {
    return (
      <>
      <div className="country-slider">
      <h5 class="modal-title">What type of investor are you?</h5>
          <div>
              
                  {
                      investor.map((item)=>(
                        <div className="row invstr-row">
                        <InvestorCard invImg={item.investorImage} invType={item.investorType} invSummary={item.summary}/>
                        </div>
                      ))
                  }
              
          </div>
          <div className="modal-btm-two-btn invstr-btn">
          <button className="bck-btn">Back</button>
          <button className="prcd-btn">Proceed</button>
          </div>
          
      </div>
      </>
      
      
    );
  };
  
  export default InvestorType;