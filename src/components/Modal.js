import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <button onClick={props.onClose} className="Modal__close-button">
          X
        </button>
        <div className="CreateMovieModal">
          <h1>{props.titleModal}</h1>
          {props.children}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
