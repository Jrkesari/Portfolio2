import React from 'react';

const Photographs = () => {
  return (
    <div className="photographs-container" onClick={() => window.location.href='/photographs'}>
      <div className="photograph-tile">
        <img src="your-image-url" alt="Photograph 1" />
        <h2>Title 1</h2>
        <p>Description about Photograph 1 goes here...</p>
      </div>
      <div className="photograph-tile">
        <img src="your-image-url" alt="Photograph 2" />
        <h2>Title 2</h2>
        <p>Description about Photograph 2 goes here...</p>
      </div>
      <div className="photograph-tile">
        <img src="your-image-url" alt="Photograph 3" />
        <h2>Title 3</h2>
        <p>Description about Photograph 3 goes here...</p>
      </div>
    </div>
  );
};

export default Photographs;
