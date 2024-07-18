// components/Experiences.jsx
import React from 'react';

const Experiences = ({ experiences }) => {
  return (
    <section id="experiences" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Work Experiences (+5 yrs)</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold">{experience.company}</h3>
            <ul className="list-disc pl-6 mt-2">
              {experience.solutionsBuilt.map((solution, idx) => (
                <li key={idx} className="mb-2">
                    {solution}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
