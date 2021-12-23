import React, { useState } from "react";
import { motion } from "framer-motion";

const CookieOverlay = () => {
  const [show, setShow] = useState(true);

  const handleCookieClose = () => {
    setShow(false);
  };
  return (
    <motion.div
      animate={{ y: show ? [500, 0] : [0, 500] }}
      transition={{ duration: 1 }}
      className="cookie-container"
    >
      <div className="cookie-content">
        <h1 className="cookie-title">
          ICICI Global Investments uses cookies to enhance your experience
        </h1>
        <p className="cookie-text">
          We use cookies to collect data to improve your experience on our
          site.By using our website, you agree to the collection of data as
          described in our{" "}
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="link-text"
          >
            Cookie Policy
          </a>
        </p>
      </div>
      <button className="custom-button cookie-btn" onClick={handleCookieClose}>
        OK
      </button>
    </motion.div>
  );
};

export default CookieOverlay;
