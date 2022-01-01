import React from "react";
import { Link } from "react-router-dom";

const ImageText = ({ imgSrc, title, text, imageRight, buttonLink }) => {
  return (
    <div className={`image-text-container ${imageRight ? "" : "reverse"}`}>
      <div className="image-block">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className="text-block">
        <h1 className="tb-title">{title}</h1>
        <p className="tb-text">{text}</p>
        {buttonLink && 
          <Link className="anchor-button knw-mr-btn" to={buttonLink}>Know More</Link>
        }
        
      </div>
     
      {console.log(imageRight, title, "ii")}
    </div>
  );
};

export default ImageText;
