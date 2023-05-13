import { useState, useEffect } from 'react';
import { apiQuerySearch } from 'services/api';
import { useLocation, useSearchParams } from 'react-router-dom';

import SearchBar from 'components/Searchbar/Searchbar';
import { ProgressBar } from 'react-loader-spinner';
import ListItem from 'components/ListItem/ListItem';

export default function Movies() {
  const [searchResult, setSearchResult] = useState(``);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log(location);

  function handleSubmit(value) {
    console.log(value);
    if (value === ``) {
      alert(`Please enter search query`);
      return;
    }
    if (value === searchParams.get(`title`)) {
      alert(`Your are looking at the result!`);
      return;
    }
    setSearchParams({ title: value });
  }

  // search on param title change
  useEffect(() => {
    const findQuerySearch = async () => {
      const title = searchParams.get(`title`);
      try {
        if (!title) {
          setSearchResult([]);
          return;
        }

        setIsLoading(true);
        const { results } = await apiQuerySearch(title);
        setSearchResult(results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findQuerySearch();
  }, [searchParams]);

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
