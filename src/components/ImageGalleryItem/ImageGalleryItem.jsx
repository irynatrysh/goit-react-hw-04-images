import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItemStyled, ImageStyled } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onClick }) => {
  const handleClick = () => {
    onClick(image.largeImageURL);
  };

  return (
    <ImageGalleryItemStyled onClick={handleClick}>
      <ImageStyled src={image.webformatURL} alt="" loading="lazy" />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
