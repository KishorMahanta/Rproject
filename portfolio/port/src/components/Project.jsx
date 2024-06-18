import React from 'react';

function Projects() {
  // You can fetch project data from an API or use static data
  const projects = [
    { id: 1, name: 'Project 1', description: 'This is project 1' },
    { id: 2, name: 'Project 2', description: 'This is project 2' },
    // Add more projects here
  ];

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;