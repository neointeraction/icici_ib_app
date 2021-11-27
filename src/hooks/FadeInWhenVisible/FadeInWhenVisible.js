import React from "react";

import { motion } from "framer-motion";

const FadeInWhenVisible = ({ children, delay }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.8, delay: delay }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 1, y: 15 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
