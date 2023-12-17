import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContent, Image } from './Modal.styled';

const Modal = ({ largeImageURL, onClose }) => {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <Image src={largeImageURL} alt="" onKeyDown={handleKeyDown} />
      </ModalContent>
    </Overlay>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
