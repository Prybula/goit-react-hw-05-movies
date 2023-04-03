import axios from 'axios';
const API_KEY = '372e9c91a067b2d0ab40ec17b7b864be';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;
export const fetchTrendings = () => {
  return axios.get('/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchSearchMovies = search => {
  return axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query: search,
    },
  });
};

export const fetchDetails = movieId => {
  return axios.get(`/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchCredits = movieId => {
  return axios.get(`/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const fetchReviews = movieId => {
  return axios.get(`/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
};
