import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Photograph.css';

const Photographs = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/photos')
      .then(response => setPhotos(response.data))
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  return (
    <div>
      <h2>Photographs</h2>
      <div className="photo-list">
        {photos.map(photo => (
          <div key={photo._id} className="photo">
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photographs;
