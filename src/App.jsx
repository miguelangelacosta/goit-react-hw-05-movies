import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; 

const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() => import('./components/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./components/Cast/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));
const Error = React.lazy(() => import('./components/Error'));

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/movies">Movies</Link> 
      </nav>
      
      <Suspense fallback={<div>Loading...</div>}>
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/cast/:movieId" element={<Cast />} />
            <Route path="/reviews/:movieId" element={<Reviews />} />
            <Route path="*" element={<Error />} />
          </Routes>
       
      </Suspense>
    </div>
  );
};

export default App;
