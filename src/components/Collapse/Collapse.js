import React, { useState } from "react";

import CollapsePlus from "../../assets/images/icons/collapse+.svg";
import CollapseMinus from "../../assets/images/icons/collapse-.svg";

const Collapse = ({ title, body }) => {
  const [open, setOpen] = useState();

  const handleCollapse = () => {
    setOpen(!open);
  };
  return (
    <div className={`collapse-container ${open ? "open " : "closed"}`}>
      <div className="collpase-header-flex">
        <h1 className="collapse-title">{title}</h1>
        <button onClick={handleCollapse}>
          <img src={open ? CollapseMinus : CollapsePlus} alt="CollapsePlus" />
        </button>
      </div>

      <div className={`collapse-body ${open ? "open" : "closed"}`}>
        <p className="collapse-body-text">{body}</p>
      </div>
    </div>
  );
};

export default Collapse;
