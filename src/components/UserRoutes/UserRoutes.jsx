import { Routes, Route } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<MovieDetails />} />
      {/* <Route path="cast" element={<Cast />} />
      <Route path="reviews" element={<Reviews />} /> */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
