import { useState, useEffect } from 'react';

import { apiTrending } from 'services/api';

import { Link } from './HomePage.styled';

export default function HomePage() {
  const [trendingResults, setTrendingResults] = useState([]);

  useEffect(() => {
    apiTrending().then(result => {
      setTrendingResults(result.results);
    });
  }, []);

  return (
    <ul
      style={{
        width: '1980px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '40px',
      }}
    >
      {trendingResults.map(movie => {
        return (
          <li
            key={movie.id}
            style={{
              paddingBottom: '10px',
            }}
          >
            <Link>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
