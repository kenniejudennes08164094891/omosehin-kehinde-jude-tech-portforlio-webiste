// components/Skills.jsx
import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="text-lg">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
