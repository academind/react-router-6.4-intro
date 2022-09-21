import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

function Modal({ children, onClose }) {
  return createPortal(
    <div className={classes.backdrop} onClick={onClose}>
      <dialog
        className={classes.modal}
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>,
    document.getElementById('modal')
  );
}

export default Modal;
