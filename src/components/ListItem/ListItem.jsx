import { Link } from './ListItem.styled';
import { MdLocalMovies } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function ListItem({ resultArray }) {
  const location = useLocation();
  // console.log(location);

  if (resultArray.length === 0) {
    return (
      <div style={{ fontSize: '30px', color: 'orange' }}>
        Nothing to show. Please enter search query!
      </div>
    );
  }

  return resultArray.map(movie => {
    return (
      <li
        key={movie.id}
        style={{
          paddingBottom: '10px',
        }}
      >
        <Link
          to={location.pathname === '/' ? `/movies/${movie.id}` : `${movie.id}`}
          state={{ from: location.search }}
          id={movie.id}
        >
          <MdLocalMovies size={35} /> {movie.title}
        </Link>
      </li>
    );
  });
}

// ListItem.propTypes = {
//   resultArray: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       release_date: PropTypes.string.isRequired,
//       overview: PropTypes.string.isRequired,
//       poster_path: PropTypes.string,
//       vote_average: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
