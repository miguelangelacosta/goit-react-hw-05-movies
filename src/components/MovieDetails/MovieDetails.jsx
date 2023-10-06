import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';
import { useNavigate } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const apiKey = '9fbbc1dbcdf3b809aeff0a64d74456cb';
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    fetch(movieDetailsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMovieDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener detalles de la película:', error);
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <button onClick={() => navigate(-1)} className="back-link">Volver atrás</button>
      {loading ? (
        <p>Cargando detalles de la película...</p>
      ) : movieDetails ? (
        <div>
          <h1 className="movie-title">{movieDetails.title}</h1>
          <p className="movie-rating">Calificación: {movieDetails.vote_average}</p>
          <p className="movie-overview">Sinopsis: {movieDetails.overview}</p>
          {movieDetails.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="movie-poster"
            />
          )}

          <div className="movie-links">
            <Link to={`/cast/${movieId}`}>Ver elenco</Link>
            <Link to={`/reviews/${movieId}`}>Ver revisiones</Link>
          </div>
        </div>
      ) : (
        <p>No se encontraron detalles de la película.</p>
      )}
    </div>
  );
}

export default MovieDetails;
