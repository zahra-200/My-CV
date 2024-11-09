import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="my-10">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <ul className="list-none space-y-2">
        <li className="bg-white p-4 rounded shadow">HTML5 & CSS3</li>
        <li className="bg-white p-4 rounded shadow">
          JavaScript (ES6+) / TypeScript
        </li>
        <li className="bg-white p-4 rounded shadow">
          React.js / Vite (The build tool){" "}
        </li>
        <li className="bg-white p-4 rounded shadow">Version Control (Git)</li>
        <li className="bg-white p-4 rounded shadow">
          Tailwind CSS / BootStrap5
        </li>
        <li className="bg-white p-4 rounded shadow">Responsive Design</li>
      </ul>
    </section>
  );
};

export default Skills;
