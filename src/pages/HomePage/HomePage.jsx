import { useState, useEffect } from 'react';

import { ProgressBar } from 'react-loader-spinner';

import { apiTrending } from 'services/api';
import ListItem from 'components/ListItem/ListItem';

export default function HomePage() {
  const [trendingResults, setTrendingResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const findTrendingList = async () => {
      try {
        setIsLoading(true);
        const { results } = await apiTrending();
        setTrendingResults(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findTrendingList();
  }, []);

  return (
    <div>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <ul>
          <ListItem resultArray={trendingResults} />
        </ul>
      )}
    </div>
  );
}
