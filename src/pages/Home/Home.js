import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import axios from "axios";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Banner from "../../components/Banner";
import InfoStrp from "../../components/InfoStrp";
import Title from "../../components/Title/Title";
import IconButton from "../../components/IconButton";

import BannerImg from "../../assets/images/banner.jpg";
import BannerImg2 from "../../assets/images/banner2.jpg";
import BannerImg3 from "../../assets/images/banner3.jpg";
import Prev from "../../assets/images/icons/prev.svg";
import Next from "../../assets/images/icons/next.svg";
import GlobalBanner from "../../assets/images/global-img.jpg";
import CookieOverlay from "../../components/CookieOverlay";

const data = [
  {
    text: "For our latest India outlook pls click here",
    bannerImage: BannerImg,
    link: "/hello",
  },
  {
    text: "This 1315 meters long and 359 meters high Chenab Bridge is in Kashmir, India. Once completed (by end of 2022) it will be the tallest Railway Arch Bridge in the world, crossing over the deep gorges of the Chenab River to connect the Kashmir to the rest of India..The bridge would be 35 metres higher than the Eiffel Tower in Paris, and is being constructed at a cost of INR15Bn as part of the Udhampur-Srinagar-Baramulla Railway Link  project.. Source: aecom.com, business standard.com",
    bannerImage: BannerImg2,
    link: "/hello",
  },
  {
    text: "India is the world’s fourth largest country by cumulative wind capacity  currently at 39GW, as on 31 Mar 2021 and has generated around 60.15 Billion Units during 2020-21. Information Source: https://mnre.gov.in/wind/current-status",
    bannerImage: BannerImg3,
    link: "/hello",
  },
];

const Home = ({ hamOpen }) => {
  useEffect(() => {
    getUser();
    setbannerData(data);
  }, []);

  const [bannerData, setbannerData] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get("/api/banners.json");
      setbannerData(response.data.banners);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(bannerData, "bannerData");

  var slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <motion.img
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        initial={false}
        src={Prev}
        alt="Prev"
      />
    ),
    nextArrow: (
      <motion.img
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        initial={false}
        src={Next}
        alt="Next"
      />
    ),
  };
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-slider">
        <Slider {...slideSettings}>
          {bannerData.map((item) => (
            <div>
              <Banner
                BannerImg={item.bannerImage}
                text={item.text}
                link={item.link}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <Title titleText="ICICI Global Investments" />
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <p className="body-text">
              ICICI Prudential Asset Management Company Limited (the
              AMC/IPAMC)offers fund management and advisory services to marquee
              global clients investing across public equities, IG and High Yield
              Credits, fixed income, and alternative strategies in India. These
              investments could be through FPI registered funds or separate
              accounts (custom portfolios) directly into Indian equity and FI
              markets or offshore feeder funds holding ICICI Prudential Mutual
              Funds Schemes as underlying portfolios. The investors in these
              funds are retail individuals, high and ultra-high net worth
              individuals, large pensions, sovereigns, and other institutions
              from North Asia, Europe, Latin America, and the GCC.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible>
            <p className="body-text">
              ICICI Global Investments branding represents the international
              asset management activities of the AMC. The AMC firm provides
              bespoke advisory and fund management services focused in Indian
              capital markets to global institutional investors, led by a
              specialized cross-functional team across the asset management
              company firm.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <InfoStrp
              infoText="To learn more, click"
              infoLink="https://www.icicipruamc.com/about-us"
            />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding bordered-grid">
        <div className="img-text-flex">
          <div className="itf-img">
            <img src={GlobalBanner} alt="global-img" />
          </div>
          <FadeInWhenVisible>
            <div className="itf-content">
              <Title titleText="Global Investments" isSuperText align dark />
              <Title
                titleText="ICICI Global Investments, a unit of ICICI Prudential Asset
                  Management (AMC)"
                align
              />
              <IconButton link="/" isGold alignLeft />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      <CookieOverlay />
    </motion.div>
  );
};

export default Home;
