import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/CodingWork.css';

const CodingWork = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (
    <div>
      <h2>Coding Work</h2>
      <div className="project-list">
        {projects.map(project => (
          <div key={project._id} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.githubLink && <p><a href={project.githubLink}>GitHub Repo</a></p>}
            {project.backgroundImage && <img src={project.backgroundImage} alt="Background" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingWork;
