import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import ImageText from "../../components/ImageText/ImageText";

import FundImg from "../../assets/images/fund-img.jpg";
import FundBanner from "../../assets/images/fund-banner.jpg";

const data = [
  {
    anchor: "KBA",
    imgSrc: FundImg,
    title: "KBA India Dynamic Fixed Income Fund",
    text: `ICICI Prudential Asset Management Company Limited is the Investment Manager to the KBA India Dynamic Fixed Income Sub Fund of India Opportunities Fund (the Trust), a UCITs compliant umbrella Fund domiciled in Ireland. The Fund aims to generate total returns with moderate levels of credit risk by investing primarily in a portfolio of debt securities issued in India, by companies operating in India, or by companies deriving a significant portion of their business from India.`,
    buttonLink:"/kba"
  },
  {
    anchor: "Equity",
    imgSrc: FundImg,
    title: "India Equity Strategies",
    text: `ICICI Prudential Asset Management Company Limited is the Investment Manager to the KBA India Dynamic Fixed Income Sub Fund of India Opportunities Fund (the Trust), a UCITs compliant umbrella Fund domiciled in Ireland. The Fund aims to generate total returns with moderate levels of credit risk by investing primarily in a portfolio of debt securities issued in India, by companies operating in India, or by companies deriving a significant portion of their business from India.`,
    buttonLink:null
  },
  {
    anchor: "Income",
    imgSrc: FundImg,
    title: "Investment Grade Long Only India Fixed Income Strategies",
    text: `ICICI Prudential Asset Management Company Limited is the Investment Manager to the KBA India Dynamic Fixed Income Sub Fund of India Opportunities Fund (the Trust), a UCITs compliant umbrella Fund domiciled in Ireland. The Fund aims to generate total returns with moderate levels of credit risk by investing primarily in a portfolio of debt securities issued in India, by companies operating in India, or by companies deriving a significant portion of their business from India.`,
    buttonLink:null
  },
  {
    anchor: "Balanced",
    imgSrc: FundImg,
    title: "India Balanced Strategy",
    text: `ICICI Prudential Asset Management Company Limited is the Investment Manager to the KBA India Dynamic Fixed Income Sub Fund of India Opportunities Fund (the Trust), a UCITs compliant umbrella Fund domiciled in Ireland. The Fund aims to generate total returns with moderate levels of credit risk by investing primarily in a portfolio of debt securities issued in India, by companies operating in India, or by companies deriving a significant portion of their business from India.`,
    buttonLink:null
  },
  {
    anchor: "credit",
    imgSrc: FundImg,
    title: "India High Yield Credit",
    text: `ICICI Prudential Asset Management Company Limited is the Investment Manager to the KBA India Dynamic Fixed Income Sub Fund of India Opportunities Fund (the Trust), a UCITs compliant umbrella Fund domiciled in Ireland. The Fund aims to generate total returns with moderate levels of credit risk by investing primarily in a portfolio of debt securities issued in India, by companies operating in India, or by companies deriving a significant portion of their business from India.`,
    buttonLink:null
  },
];

const Funds = ({ hamOpen }) => {
  const isOdd = (x) => Boolean(x % 2);

  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={FundBanner} alt="FundBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="Investment Strategies" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <div className="anchor-links-flex">
              <AnchorLink className="anchor-button" href="#KBA" offset="80">
                KBA
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#Equity" offset="80">
                India Equity Strategies
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#Income" offset="80">
                Fixed Income Strtegies
              </AnchorLink>
              <AnchorLink
                className="anchor-button"
                href="#Balanced"
                offset="80"
              >
                India Balanced Strategies
              </AnchorLink>
              <AnchorLink className="anchor-button" href="#credit" offset="80">
                India High yield credit
              </AnchorLink>
            </div>
          </FadeInWhenVisible>
          {data.map((item, index) => (
            <FadeInWhenVisible>
              <div id={item.anchor}>
                <ImageText
                  imgSrc={item.imgSrc}
                  title={item.title}
                  text={item.text}
                  imageRight={isOdd(index + 1)}
                  buttonLink={item.buttonLink}
                />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Funds;
