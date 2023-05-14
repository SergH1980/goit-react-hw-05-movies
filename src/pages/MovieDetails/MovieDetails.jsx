import { Outlet, Link } from 'react-router-dom';
import { Suspense } from 'react';

import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { apiMovieSearch } from 'services/api';
import { ProgressBar } from 'react-loader-spinner';

import MovieMarkup from 'components/MovieMarkup/MovieMarkup';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref =
    location.state.from === '' ? `/` : `/movies/${location.state.from}`;

  useEffect(() => {
    const findMovie = async () => {
      try {
        setIsLoading(true);
        const result = await apiMovieSearch(movieId);
        setMovieInfo(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findMovie();
  }, [movieId]);

  return (
    <div>
      <button>{<Link to={backLinkHref}>Go back</Link>}</button>

      {isLoading ? <ProgressBar /> : <MovieMarkup movie={movieInfo} />}
      <p>Additional information:</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state.from }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
