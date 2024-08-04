import React from 'react';
import './css/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://github.com/Jrkesari" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://example.com/twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://example.com/linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://example.com/instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      </div>
      <p>&copy; 2024 My Portfolio</p>
    </footer>
  );
};

export default Footer;
