import React from 'react';
import { LoaderOverlay, LoaderSpinner } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderOverlay>
      <LoaderSpinner />
    </LoaderOverlay>
  );
};

export default Loader;
