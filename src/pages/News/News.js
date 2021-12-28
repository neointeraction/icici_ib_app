import React from "react";
import { motion } from "framer-motion";

import FadeInWhenVisible from "../../hooks/FadeInWhenVisible";
import Title from "../../components/Title/Title";
import NewsCard from "../../components/NewsCard";

import Temp from "../../assets/images/temp.jpg";
import NewsBanner from "../../assets/images/news-banner.jpg";

const data = [
  {
    imgSrc: Temp,
    title: "Lorem ipsum dolor sit amet, adipiscing elit.",
    author: "Rajesh Tagore",
    date: "21 March 2021",
    readTime: "2 min read",
  },
  {
    imgSrc: Temp,
    title: "Lorem ipsum dolor sit amet, adipiscing elit.",
    author: "Rajesh Tagore",
    date: "21 March 2021",
    readTime: "2 min read",
  },
  {
    imgSrc: Temp,
    title: "Lorem ipsum dolor sit amet, adipiscing elit.",
    author: "Rajesh Tagore",
    date: "21 March 2021",
    readTime: "2 min read",
  },
  {
    imgSrc: Temp,
    title: "Lorem ipsum dolor sit amet, adipiscing elit.",
    author: "Rajesh Tagore",
    date: "21 March 2021",
    readTime: "2 min read",
  },
  {
    imgSrc: Temp,
    title: "Lorem ipsum dolor sit amet, adipiscing elit.",
    author: "Rajesh Tagore",
    date: "21 March 2021",
    readTime: "2 min read",
  },
  {
    imgSrc: Temp,
    title: "Lorem ipsum dolor sit amet, adipiscing elit.",
    author: "Rajesh Tagore",
    date: "21 March 2021",
    readTime: "2 min read",
  },
];

const News = ({ hamOpen }) => {
  return (
    <motion.div
      animate={{ scale: hamOpen ? 0.995 : 1 }}
      transition={{ duration: 0.3 }}
      initial={false}
      className="page-container"
    >
      <div className="banner-static">
        <img src={NewsBanner} alt="NewsBanner" />
        <div className="banner-static-content">
          <FadeInWhenVisible delay={0.1}>
            <Title titleText="News & Insights" />
          </FadeInWhenVisible>
        </div>
      </div>
      <div className="section-padding">
        <div className="container">
          <FadeInWhenVisible>
            <div className="anchor-links-flex filter-links-flex">
              <button className="anchor-button">Sort by</button>
              <button className="anchor-button">Last 30 days</button>
              <button className="anchor-button">Mutual Funds</button>
              <button className="anchor-button">Equity Shares</button>
              <button className="anchor-button">Investments</button>
              <button className="anchor-button">Strategies</button>
            </div>
          </FadeInWhenVisible>
          <div className="news-card-block">
            <div className="row">
              {data.map((item, index) => (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  // animate={{ y: [100, 0] }}
                  transition={{ duration: 0.6, delay: index / 5 }}
                  viewport={{ once: true }}
                  variants={{
                    visible: { y: [100, 0] },
                    hidden: { y: [0, 100] },
                  }}
                  className="col-md-4"
                >
                  <NewsCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    author={item.author}
                    date={item.date}
                    readTime={item.readTime}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default News;
