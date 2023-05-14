import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiActorsSearch } from 'services/api';
import { ProgressBar } from 'react-loader-spinner';
import './Cast.css';

export default function Cast() {
  const [isLoading, setIsLoading] = useState(false);
  const [castInfo, setCastInfo] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const findActors = async () => {
      try {
        setIsLoading(true);
        const result = await apiActorsSearch(movieId);
        setCastInfo(result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    findActors();
  }, [movieId]);
  const cast = castInfo.cast;
  if (!cast) {
    return <div>No information</div>;
  }
  if (cast.lenght === 0) {
    return <div className="castError">No information about actors.</div>;
  }
  return (
    <div>
      {isLoading ? (
        <ProgressBar />
      ) : (
        <ul className="actorList">
          {cast.map(actor => {
            const finalActorPhoto = actor.profile_path
              ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
              : `https://www.freeiconspng.com/uploads/no-image-icon-15.png`;

            const finalActorName = actor.name
              ? `${actor.name}`
              : `No data available`;

            const finalActorCharacter = actor.caracter
              ? `${actor.character}`
              : `No data available`;

            return (
              <li key={actor.id} className="actorWrap">
                <img
                  src={finalActorPhoto}
                  alt={actor.name}
                  className="actorPhoto"
                />
                <p className="actorName">{finalActorName}</p>
                <p className="actorCharacter">{finalActorCharacter}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
