import React from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ open, setOpen, menuList }) => {
  return (
    <>
      <div className="side-menu-container">
        <AnimatePresence>
          <motion.div
            animate={{ x: open ? 0 : -380 }}
            transition={{ duration: 0.5 }}
            initial={false}
            className="side-menu-panel"
          >
            <ul className="menu-list">
              {menuList.map((item, i) => (
                <motion.li
                  animate={{ x: open ? 20 : 0 }}
                  transition={{ duration: 0.5, delay: i / 8 }}
                  initial={true}
                  key={i}
                  className="menu-item"
                >
                  <Link to={item.link} onClick={() => setOpen(!open)}>
                    <motion.div
                      whileHover={{ x: 10, opacity: 0.5 }}
                      transition={{ duration: 0.5 }}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Menu;
