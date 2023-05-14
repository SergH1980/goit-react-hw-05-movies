import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'components/GlobalStyle';

import Layout from 'components/Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const Movies = lazy(() => import('../../pages/Movies'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const PageNotFound = lazy(() => import('../../pages/PageNotFound'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

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
