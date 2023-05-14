import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiReviewsSearch } from 'services/api';
import { ProgressBar } from 'react-loader-spinner';

import './Reviews.css';

export default function Reviews() {
  const [isLoading, setIsLoading] = useState(false);
  const [movieReviews, setMovieReviews] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const findReviews = async () => {
      try {
        setIsLoading(true);
        const result = await apiReviewsSearch(movieId);
        setMovieReviews(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findReviews();
  }, [movieId]);

  const reviews = movieReviews.results;
  if (!reviews) {
    return <div>No reviews</div>;
  }
  if (reviews.length === 0) {
    return <div className="emptyReviews">Nothing to show yet!</div>;
  }
  return (
    <div>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <ul className="reviewList">
          {reviews.map(review => {
            const finalReviewAuthor = review.author
              ? `${review.author}`
              : `No data available`;

            const finalReviewText = review.content
              ? `${review.content}`
              : `No data available`;

            return (
              <li key={review.id} className="reviewWrap">
                <p className="authorName">{finalReviewAuthor}</p>
                <p>{finalReviewText}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
