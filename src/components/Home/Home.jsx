import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importa los estilos

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const apiKey = '9fbbc1dbcdf3b809aeff0a64d74456cb';
    const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Películas Populares</h1>
      <ul>
        {popularMovies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <h2>{movie.title}</h2>
            </Link>
            <p>{movie.overview}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
