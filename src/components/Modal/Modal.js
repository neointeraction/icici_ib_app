import { motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, toggle, children }) =>
  visible
    ? ReactDOM.createPortal(
        <>
          <div className="modal">
            <motion.div
              animate={{ y: [100, 0] }}
              transition={{ duration: 0.5 }}
              className="modal-box"
              role="dialog"
              aria-modal="true"
            >
              {children}
            </motion.div>
          </div>
          <div
            className={`${visible ? "modal-overlay" : null}`}
            onClick={toggle}
          ></div>
        </>,
        document.body
      )
    : null;

export default Modal;
