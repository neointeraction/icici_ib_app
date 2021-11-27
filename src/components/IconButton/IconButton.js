import React from "react";
import { Link } from "react-router-dom";

const IconButton = ({ isGold, link, alignLeft }) => {
  return (
    <div className={alignLeft ? "dInline" : "dflex"}>
      <Link to={link} className={`icon-btn ${isGold ? "gold" : null}`}>
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="btn-icn"
            d="M0.624997 10.375L20.1087 10.375L15.1862 15.3112L17.125 17.25L25.375 9L17.125 0.750003L15.1863 2.68875L20.1088 7.625L0.624997 7.625L0.624997 10.375Z"
            fill={isGold ? "#c9b16d" : "white"}
          />
        </svg>
      </Link>
    </div>
  );
};

export default IconButton;
