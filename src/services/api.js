import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = `1a6be4acd703bdf91bdb7fd89ae97812`;

export const apiTrending = async () => {
  const response = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
  return response.data;
};

// https://api.themoviedb.org/3/trending/movie/week?api_key=1a6be4acd703bdf91bdb7fd89ae97812
