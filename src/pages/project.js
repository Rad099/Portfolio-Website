import React from 'react';
import './projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        <div className="project-card" data-aos="fade-up">
          <img src="/assets/images/project1.png" alt="Project 1" />
          <h3>Full Stack Faculty Performance Page</h3>
          <p>Project description goes here...</p>
        </div>
        <div className="project-card" data-aos="fade-up">
          <img src="/assets/images/project2.png" alt="Project 2" />
          <h3>Air and Radiance Monitoring System</h3>
          <p>Project description goes here...</p>
        </div>
        <div className="project-card" data-aos="fade-up">
          <img src="/assets/images/project2.png" alt="Project 3" />
          <h3>MIPS Assembler</h3>
          <p>Project description goes here...</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
