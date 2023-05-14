// import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { apiMovieSearch } from 'services/api';
import { ProgressBar } from 'react-loader-spinner';

import MovieMarkup from 'components/MovieMarkup/MovieMarkup';

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieInfo, setMovieInfo] = useState({});

  const { movieId } = useParams();
  const location = useLocation();
  console.log(location);
  console.log(location.state);
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

  if (movieInfo.length === 0) {
    return;
  }
  return (
    <div>
      <button>
        <Link to={backLinkHref}>Go back</Link>
      </button>

      {isLoading ? <ProgressBar /> : <MovieMarkup movie={movieInfo} />}
    </div>
  );
}
