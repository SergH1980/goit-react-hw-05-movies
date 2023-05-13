import { Link } from './ListItem.styled';
import { MdLocalMovies } from 'react-icons/md';

export default function ListItem({ resultArray }) {
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
