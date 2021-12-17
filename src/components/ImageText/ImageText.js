import React from "react";

const ImageText = ({ imgSrc, title, text, imageRight }) => {
  return (
    <div className={`image-text-container ${imageRight ? "" : "reverse"}`}>
      <div className="image-block">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className="text-block">
        <h1 className="tb-title">{title}</h1>
        <p className="tb-text">{text}</p>
      </div>
      {console.log(imageRight, title, "ii")}
    </div>
  );
};

export default ImageText;
