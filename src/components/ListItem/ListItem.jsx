import { Link } from './ListItem.styled';
import { MdLocalMovies } from 'react-icons/md';

export default function ListItem({ resultArray }) {
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
        <Link>
          <MdLocalMovies size={35} /> {movie.title}
        </Link>
      </li>
    );
  });
}
