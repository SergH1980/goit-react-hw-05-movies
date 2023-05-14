import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'components/GlobalStyle';

import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </div>
  );
}
