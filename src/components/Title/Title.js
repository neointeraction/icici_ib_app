import React from "react";

const Title = ({ titleText, align, isBanner, isSuperText, dark }) => {
  return (
    <h1
      className={`section-title ${align} ${dark ? "dark" : null} ${
        isBanner ? "banner-title" : isSuperText ? "title-super-text" : null
      }`}
    >
      {titleText}
    </h1>
  );
};

export default Title;
