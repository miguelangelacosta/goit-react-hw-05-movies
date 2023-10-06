import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams(); // Asegúrate de que 'movieId' coincida con el parámetro en la URL
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiKey = '9fbbc1dbcdf3b809aeff0a64d74456cb';

    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.results);
      })
      .catch((error) => {
        console.error('Error al obtener críticas:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Críticas de la Película</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
