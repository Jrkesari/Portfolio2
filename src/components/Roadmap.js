// src/components/Roadmap.js
import React from 'react';
import './css/Roadmaps.css';

const Roadmap = () => {
  return (
    <div className="roadmap">
      <div className="roadmap-item">
        <div className="roadmap-content">
          <h3>Started Learning</h3>
          <p>Started my journey in the tech world by learning basic HTML, CSS, and JavaScript.</p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="roadmap-content">
          <h3>First Project</h3>
          <p>Developed my first web application, a simple to-do list app.</p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="roadmap-content">
          <h3>Professional Experience</h3>
          <p>Started working as a junior developer at a tech company, gaining valuable experience.</p>
        </div>
      </div>
      <div className="roadmap-item">
        <div className="roadmap-content">
          <h3>Current Position</h3>
          <p>Currently working as a full-stack developer, focusing on modern web technologies and AI integration.</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
