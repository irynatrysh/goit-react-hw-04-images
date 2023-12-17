import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';


const ImageGallery = ({ images, onImageClick }) => (
  <ImageGalleryStyled>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onClick={onImageClick} />
    ))}
  </ImageGalleryStyled>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
