import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import {
  SearchbarContainer,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <Icon icon="mdi:magnify" width="28" height="28" />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <SearchFormInput
          type="text"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarContainer>
  );
};

export default Searchbar;
