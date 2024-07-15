import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-4">
      <img src={movie.posterUrl} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.description}</p>
        <p className="card-text">Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  }).isRequired
};

export default MovieCard;
