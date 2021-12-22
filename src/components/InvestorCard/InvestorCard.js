import React, { useState } from 'react';

function InvestorCard({ invImg, invType,invSummary}) {
  const [investor,setInvestor]=useState('');
  const handleChange=(e)=>{
            setInvestor( e.target.value);
         }

    return (
      <>
                <label className="inv-opt">
                  <div className="inv-img">
                  {invImg}
                  </div>
                    <div className="inv-detail">
                    <h5 className="inv-title">{invType}</h5>
                    <p className="inv-summary">
                        {invSummary}
                    </p>
                    </div>
                    <input type="radio" value={invType} id={invType} name="investorType" onChange={handleChange}/>
                    <span class="tick-icon"></span>
                </label>
      </>
    );
  };


  export default InvestorCard;