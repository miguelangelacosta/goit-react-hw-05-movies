import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Movies.css'; // Import the CSS file for styling

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to search for movies with the keyword
    const searchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=9fbbc1dbcdf3b809aeff0a64d74456cb&query=${keyword}`
        );

        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
        } else {
          console.error('Error al buscar películas');
        }
      } catch (error) {
        console.error('Error al buscar películas', error);
      }
    };

    if (keyword) {
      searchMovies();
    }
  }, [keyword]);

  const handleSearchInputChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div>
      <h2>Buscar Películas</h2>
      <input
        type="text"
        placeholder="Buscar películas por palabra clave..."
        value={keyword}
        onChange={handleSearchInputChange}
      />
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
