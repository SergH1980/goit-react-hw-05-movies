import { Link } from './ListItem.styled';
import { MdLocalMovies } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

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
