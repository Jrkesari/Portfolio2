import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // Import the CSS file
import resumePdf from '../assets/JayeshResume.pdf';
// Import the resume PDF file

const Navbar = ({ isAuthenticated, onSignOut }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">My Portfolio</Link>
      </h1>
      <ul className="nav-links">
        <li><Link to="/coding-work">Coding Work</Link></li>
        <li><Link to="/photographs">Photographs</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/admin">Admin Panel</Link></li>
            <li><button onClick={onSignOut}>Sign Out</button></li>
          </>
        ) : (
          <li><Link to="/sign-in">Sign In</Link></li>
        )}
        <li><a href={resumePdf} download="JayeshResume.pdf"><button className="resume-download">Download Resume</button></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
