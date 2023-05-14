import './MovieMarkup.css';

export default function MovieMarkup({ movie }) {
  // console.log(movie);
  const { title, vote_average, overview, genres, poster_path } = movie;

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

  return (
    <div className="movieMarkupWrap">
      <img src={finalPath} alt={finaltitle} />
      <div>
        <h2 className="movieTitle">{finaltitle}</h2>
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
