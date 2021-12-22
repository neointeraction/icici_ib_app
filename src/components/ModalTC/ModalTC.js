import React, { useState } from 'react';

    function TC ({summary}) {

      const [checked, setChecked] = useState(false);
      const handleChange=(e)=>{
               setChecked( e.target.checked);
            }
            
        return (
          <>
           <div>
                    <div className="tc-content">
                        <p>
                            {summary}
                        </p>
                    </div>
                    <div class="tc-chkbx">
                          <label class="tc-label">
                            <p>By proceeding further and clicking on the "AGREE" button below I acknowledge that I have read and fully understood the above mentioned conditions/restrictions/disclaimer for accessing this website. </p> 
                            <input type="checkbox" checked={checked} onChange={handleChange} />
                            <span class="checkmark"></span>
                          </label>
                    </div>
          </div>          
          </>
        );
      };
  
  export default TC;