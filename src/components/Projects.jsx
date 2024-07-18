// components/Projects.jsx
import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p>{project.description}</p>
            {project.url && <a href={project.url} target='_blank' className="text-blue-500 hover:underline">{project.url}</a>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
