import React from "react";

import ModalTC from "../../../ModalTC";


const terms = [
    {
        tcSummary:`Any prediction, projection, or forecast on e Information provided in this website is for information only and is subject to change without notice. It is not promised or guaranteed to be correct, complete, and up-to-date. The distribution of any fund and the offering of shares of any fund as mentioned on this website may be restricted in certain jurisdictions. It shall not be construed as any investment advice, recommendation, or an offer or solicitation, and shall not be used as basis for any contract or commitment to purchase or sell any security, instrument, or any products or services of ICICI Prudential Asset Management Company Limited. It is the responsibility of any person in possession of this information and of any person wishing to apply for shares of any fund, to inform himself of and to observe all applicable laws and regulations of the countries of his nationality, residence, ordinary residence or domicile.
        Certain factual and statistical (both historical and projected) industry and market data provided was obtained by ICICI Prudential Asset Management Company Limited from independent, third-party sources that have not been verified as to its accuracy. Statements and assertions contained in this website reflect the belief of ICICI Prudential Asset Management Company Limited, which may be based in whole or in part on such data and other information.
        Information or views expressed in this website does not take into account or cater to specific investment objectives, financial situation or particular needs of any specific person. Investors should seek independent professional advice from financial advisers regarding the suitability of a particular investment product, taking into account his/her specific investment objective, financial situation or particular needs before making a commitment to purchase/invest. In the event that an investor chooses not to seek such advice, he/she should consider carefully whether such investment is suitable for him/her.
        conomy, stock market, bond market etc. is not necessarily indicative of the future performance of the funds or products. Past performance of the funds or products is not necessarily indicative of its future performance. Investments are subject to investment and foreign exchange risks etc. including possible loss of the principal amount invested. The value of units and any income arising from them may fall as well as rise.`
    }
]

const TermsConditions = () => {
    return (
        <>
        <div className="country-slider">
        <h5 class="modal-title">Terms and Conditions</h5>
          <div>
              
                  {
                      terms.map((item)=>(
                       <ModalTC summary={item.tcSummary}/>
                      ))
                  }

          </div>
          <div className="modal-btm-two-btn">
          <button className="bck-btn">Back</button>
          <button className="prcd-btn">Agree</button>
          </div>
        </div>
        </>
        
      
    );
  };
  export default TermsConditions;