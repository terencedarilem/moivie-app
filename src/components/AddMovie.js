import React, { useState } from 'react';

const AddMovie = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');

  const handleAddMovie = () => {
    onAdd({ id: Date.now(), title, description, posterUrl, rating: Number(rating) });
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating('');
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterUrl}
        onChange={(e) => setPosterUrl(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="form-control mb-2"
      />
      <button onClick={handleAddMovie} className="btn btn-success">Add Movie</button>
    </div>
  );
};

export default AddMovie;
