import axios from 'axios';
const apiKey = '40305157-29c77b29b48ab694c9a8a21a8';


const fetchImages = async (query, page, perPage) => {
  return await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
  
};

export { fetchImages };
