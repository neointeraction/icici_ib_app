import React from "react";

import Title from "../../components/Title/Title";
import IconButton from "../IconButton";
import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";

const Banner = ({ BannerImg, superText, title }) => {
  return (
    <div className="banner-img">
      <img src={BannerImg} alt="Banner" />
      <div className="banner-content">
        <div>
          <FadeInWhenVisible>
            <Title titleText={superText} isSuperText />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
            <Title titleText={title} isBanner />
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={1}>
            <div className="text-center">
              <IconButton link="/" />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

export default Banner;
