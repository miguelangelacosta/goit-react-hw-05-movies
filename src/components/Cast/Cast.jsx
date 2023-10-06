import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = '9fbbc1dbcdf3b809aeff0a64d74456cb';
    const castUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

    fetch(castUrl)
      .then((response) => response.json())
      .then((data) => {
        setCast(data.cast);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener elenco de la película:', error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      {loading ? (
        <p>Cargando elenco...</p>
      ) : (
        <div>
          <h2>Elenco:</h2>
          <ul>
            {cast.map((actor) => (
              <li key={actor.id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                    alt={actor.name}
                  />
                  <p>{actor.name}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cast;
