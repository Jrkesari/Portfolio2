import React from 'react';
import './css/Aboutme.css';

const AboutMe = () => {
  return (
    
    <div className="about-me-section">
      <div className="about-me-card">
        <div className="about-me-heading">
          <div className="about-me-wrapper">
            <div className="about-me">ABOUT ME</div>
          </div>
          <img className="about-me-heading-child" alt="" src="/line-5.svg" />
        </div>
        <div className="about-me-details">
          <div className="hello-there-im-container">
            <p className="hello-there-im">
              Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile
            </p>
            <p className="hello-there-im">
              full-stack developer with a keen interest in exploring the latest cutting-edge technologies.
            </p>
            <p className="hello-there-im">
              My journey in the world of web development has been nothing short of exhilarating, and 
            </p>
            <p className="hello-there-im">
              I constantly strive to enhance my skills and embrace emerging trends in the industry.
            </p>
          </div>
        </div>
      </div>
      <div className="about-subheading">What I do!</div>
      <div className="card-section">
        <div className="card web-development">
          <div className="card-heading">
            <img className="material-symbolsdownload-icon" alt="" src="/code-icon.svg" />
            <div className="app-development">Web Development</div>
          </div>
          <div className="card-content">
            <p>As a developer, I find myself most captivated by the power and flexibility of NEXT.js.</p>
            <p>I'm always eager to dive into new projects that leverage NEXT.js and discover innovative ways to create fast, scalable, and user-friendly applications.</p>
          </div>
        </div>
        <div className="card app-development-section">
          <div className="card-heading">
            <img className="material-symbolsdownload-icon" alt="" src="/app.svg" />
            <div className="app-development">App Development</div>
          </div>
          <div className="card-content">
            <p>With a focus on user-centric design and cutting-edge technologies, I thrive on building intuitive and efficient apps that make a positive impact on people's lives.</p>
            <p>Let's turn ideas into reality and shape the future together.</p>
          </div>
        </div>
        <div className="card uiux-section">
          <div className="card-heading">
            <img className="material-symbolsdownload-icon" alt="" src="/ux-icon.svg" />
            <div className="uiux-designing">UI/UX Designing</div>
          </div>
          <div className="card-content">
            <p>Crafting visually appealing and intuitive user interfaces that offer a delightful user experience is something I'm truly fanatic about.</p>
          </div>
        </div>
        <div className="card mentorship">
          <div className="card-heading">
            <img className="mentor-icon" alt="" src="/mentor-icon.svg" />
            <div className="uiux-designing">Mentorship</div>
          </div>
          <div className="card-content">
            <p>I have also found great joy in sharing my knowledge with others.</p>
            <p>Being a technical mentor allows me to give back to the community that has supported me throughout my career.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
