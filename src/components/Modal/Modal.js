import { motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ visible, toggle, children, md, preventCloseOnOverlayClick }) =>
  visible
    ? ReactDOM.createPortal(
        <>
          <div className="modal">
            <motion.div
              animate={{ y: [100, 0] }}
              transition={{ duration: 0.5 }}
              className={`modal-box ${md ? "md" : ""}`}
              role="dialog"
              aria-modal="true"
            >
              {children}
            </motion.div>
          </div>
          <div
            className={`${visible ? "modal-overlay" : null}`}
            onClick={preventCloseOnOverlayClick ? null : toggle}
          ></div>
        </>,
        document.body
      )
    : null;

export default Modal;
