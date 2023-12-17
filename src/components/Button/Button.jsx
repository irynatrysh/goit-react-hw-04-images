import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ onClick }) => (
  <ButtonLoadMore type="button" className="load-more" onClick={onClick}>
    Load more
  </ButtonLoadMore>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

