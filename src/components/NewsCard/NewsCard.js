import React from "react";

const NewsCard = ({ imgSrc, title, author, date, readTime }) => {
  return (
    <div className="news-card">
      <div className="news-img">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className="news-details">
        <h1 className="news-title">{title}</h1>
        <p className="news-author">
          by <span>{author}</span>
        </p>
        <div className="news-info-flex">
          <p>{date}</p>
          <p>{readTime}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
