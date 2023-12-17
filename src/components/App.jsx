import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';
import { fetchImages } from '../Api/FetchGalleryImg';
import { Wrapper } from './App.styled';

const perPage = 12;

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showModal: false,
    selectedImage: '',
    totalCount: 0,
  };

  handleSearchSubmit = (query) => {
    this.setState({
      query: query,
      images: [],
      page: 1,
      totalCount: 0,
      selectedImage: '',
    });
  };

  handleLoadMore = () => {
    this.setState((prev) => {
      return { page: prev.page + 1 };
    });
  };

  handleImageClick = (imageUrl) => {
    this.setState({ showModal: true, selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: '' });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.query !== prevState.query) {
      this.setState({ isLoading: true });
      fetchImages(this.state.query, this.state.page, perPage)
        .then((response) => {
          if (response.data.totalHits === 0) return alert('No data for this search');
          this.setState((prev) => ({
            images: [...prev.images, ...response.data.hits],
            totalCount: response.data.totalHits,
            isLoading: false,
          }));
        })
        .catch((error) => {
          console.error('Error fetching images:', error);
        });
    }
  }

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;
    const shouldShowLoadMore = this.state.totalCount > perPage && this.state.page * perPage < this.state.totalCount;

    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {shouldShowLoadMore && <Button onClick={this.handleLoadMore} />}
        {showModal && <Modal largeImageURL={selectedImage} onClose={this.handleCloseModal} />}
      </Wrapper>
    );
  }
}

export default App;
