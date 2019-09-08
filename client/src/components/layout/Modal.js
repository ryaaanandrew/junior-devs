import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return(
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modal__content">
          { props.children }
        </div>       
      </div>,
      document.getElementById('modal-root')
    )
  );
};

export default Modal;
