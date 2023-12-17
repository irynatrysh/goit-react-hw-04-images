// App.jsx
import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from '../Api/FetchGalleryImg';
import { Wrapper } from './App.styled';

const perPage = 12;

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [totalCount, setTotalCount] = useState(0);

  const handleSearchSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalCount(0);
    setSelectedImage('');
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleImageClick = imageUrl => {
    setShowModal(true);
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage('');
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetchImages(query, page, perPage);
        if (response.data.totalHits === 0) {
          alert('No data for this search');
        } else {
          setImages(prevImages => [...prevImages, ...response.data.hits]);
          setTotalCount(response.data.totalHits);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (page !== 1 || query !== '') {
      fetchData();
    }
  }, [page, query]);

  const shouldShowLoadMore = totalCount > perPage && page * perPage < totalCount;

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {shouldShowLoadMore && <Button onClick={handleLoadMore} />}
      {showModal && <Modal largeImageURL={selectedImage} onClose={handleCloseModal} />}
    </Wrapper>
  );
};

export default App;
