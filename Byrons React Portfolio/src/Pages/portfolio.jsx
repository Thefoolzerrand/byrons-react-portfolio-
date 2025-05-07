import React from 'react';

const projects = [
    { title: "Project 1", img: "https://s3-alpha.figma.com/hub/file/4254452773/6be869a4-63f7-4ef8-8010-5cec820bd138-cover.png", live: "#", github: "#" },
  //   { title: "Project 2", img: project2, live: "#", github: "#" },
  ];
  
  function Portfolio() {
    return (
      <section>
        <h2>Portfolio</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Live App</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;