import React, { useEffect } from 'react';
import Roadmap from './Roadmap';
import Photographs from './Photography';
import CodingWork from './CodingWork';
import AboutMe from './AboutMe';
import './Home.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate');
        } else {
          section.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <section className="section about-me">
        {/* <div className="content left"> */}
          <AboutMe />
          {/* <h2>About Me</h2>
          <p>Your about me content goes here...</p>
        </div> */}
      </section>

      <section className="section roadmap">
        <Roadmap />
      </section>

      <section className="section coding-work">
        <CodingWork /> {/* Render CodingWork component */}
      </section>

      <section className="section photographs">
        <Photographs />
      </section>
    </div>
  );
};

export default Home;
