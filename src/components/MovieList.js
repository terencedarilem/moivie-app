import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="row">
      {movies.map(movie => (
        <div key={movie.id} className="col-md-4">
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MovieList;
