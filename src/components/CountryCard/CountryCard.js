import React, { useState } from 'react';

function CountryCard  ({ flag, cntryName}) {
const [country,setCountry]=useState('');
const handleChange=(e)=>{
           setCountry( e.target.value);
       }
const [checked, setChecked] = useState('');
const handleToggle = (e) => {
  setChecked(checked==true);
};

const [active , setActive] = useState(false);
const handleClick = () => {
  setActive(!active);
};
    return (
      <>
                <label title={cntryName} className={`col-md-3 cntry-crd ${active ? "brdr-gld" : " " }`} >
                    <img src={flag} alt="UK"/>
                    <p>{cntryName}</p>
                    <input type="radio" value={cntryName} id={cntryName}
                     onChange={handleChange,handleToggle} onClick={handleClick} name="country radio" />
                     <span class="tick-icon"></span>
                </label>

      </>
    );
  };
  
 
  export default CountryCard;
  