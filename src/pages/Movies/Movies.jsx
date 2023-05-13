import { useState, useEffect } from 'react';
import { apiQuerySearch } from 'services/api';

import SearchBar from 'components/Searchbar/Searchbar';
import { ProgressBar } from 'react-loader-spinner';
import ListItem from 'components/ListItem/ListItem';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(value) {
    if (value === ``) {
      alert(`Please enter search query`);
      return;
    }
    if (value === query) {
      alert(`You've just searched for the same thing!!!`);
      return;
    }
    setQuery(value);
  }
  useEffect(() => {
    const findQuerySearch = async () => {
      try {
        setIsLoading(true);
        const { results } = await apiQuerySearch(query);
        setSearchResult(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findQuerySearch();
  }, [query]);

  return (
    <div>
      <SearchBar onSearch={handleSubmit} />
      {isLoading ? (
        <ProgressBar />
      ) : (
        <ul>
          <ListItem resultArray={searchResult} />
        </ul>
      )}
    </div>
  );
}

// apiQuerySearch;
