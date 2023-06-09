import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = `1a6be4acd703bdf91bdb7fd89ae97812`;

export const apiTrending = async () => {
  const response = await axios.get(
    `trending/movie/week?api_key=${API_KEY}&include_adult=false`
  );
  return response.data;
};

export const apiQuerySearch = async query => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const apiMovieSearch = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
};

export const apiActorsSearch = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const apiReviewsSearch = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
