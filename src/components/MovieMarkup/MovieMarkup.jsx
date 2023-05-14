// import PropTypes from 'prop-types';

import './MovieMarkup.css';

export default function MovieMarkup({ movie }) {
  // console.log(movie);
  const { title, vote_average, overview, genres, poster_path, release_date } =
    movie;

  const finaltitle = title ? `${title}` : `Undefined`;

  const finalVote = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : `Undefined`;

  const finalOverview = overview ? `${overview}` : `Not available yet`;

  const finalPath = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : `http://randomchatter.com/wp-content/uploads/2017/01/400px-x-600px-r01BookNotPictured.jpg`;

  const finalGenres = genres
    ? genres.map(genre => genre.name).join(', ')
    : `Nothing to show`;

  const dateToSeconds = new Date(release_date);

  const finalYear = isNaN(dateToSeconds)
    ? `Unknown`
    : dateToSeconds.getFullYear();

  return (
    <div className="movieMarkupWrap">
      <img src={finalPath} alt={finaltitle} />
      <div>
        <h2 className="movieTitle">
          {finaltitle}({finalYear})
        </h2>
        <p className="movieRating">User Score: {finalVote} </p>
        <div className="movieInfoWrap">
          <p className="movieInfoTitle">Overview</p>
          <p className="movieOverview">{finalOverview}</p>
        </div>
        <div className="movieInfoWrap">
          <p className="movieInfoTitle">Genres</p>
          <p className="movieGenres">{finalGenres}</p>
        </div>
      </div>
    </div>
  );
}

// MovieMarkup.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     vote_average: PropTypes.number.isRequired,
//     overview: PropTypes.string.isRequired,
//     poster_path: PropTypes.string,
//     release_date: PropTypes.string.isRequired,
//     id: PropTypes.number.isRequired,
//     // genres: PropTypes.arrayOf(PropTypes.string.isRequired),
//   }).isRequired,
// };
