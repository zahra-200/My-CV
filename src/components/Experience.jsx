import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="my-10">
      <h3 className="text-2xl font-semibold mb-4">Experience</h3>
      <div className="bg-white p-6 rounded shadow mb-4">
        <h4 className="text-xl font-bold">
          Frontend Developer (Personal Projects)
        </h4>
        <p className="text-gray-600">Jan 2022 - Present</p>
        <p className="text-gray-700 mt-2 px-7 text-justify">
          <ol className="list-disc grid gap-4">
            <li>
              <span className="font-bold ">
                Shopping Site (Vite, React, TypeScript, Tailwind CSS):
              </span>{" "}
              I developed a fully functional shopping website using Vite, React.js,
              TypeScript, and Tailwind CSS. I worked independently to design and
              implement reusable components, ensuring scalability and
              maintainability. I utilized Git for version control, applying
              modern development practices throughout the project.
            </li>
            <li>
              <span className="font-bold">
                Intro section with dropdown navigation :
              </span>{" "}
              Using React and TailwindCSS.
            </li>
            <li>
              <span className="font-bold">Countries :</span> Using React, Vite, TypeScript and
              TailwindCSS.
            </li>
            <li>
              <span className="font-bold">Advice generator app :</span> Using
              Vite ,React , TailwindCSS and JS.
            </li>
            <li>
              <span className="font-bold">Weather app :</span> Using React , TypeScript and
              CSS.
            </li>
            <li>
              <span className="font-bold">Age calculator app :</span> Using
              React and TailwindCSS.
            </li>
            <li>
              <span className="font-bold">Product list with cart :</span> Using
              React and TaiwindCSS.
            </li>
            
            <li>
              <span className="font-bold">Space tourism website :</span> Using
              Html , CSS and JS.
            </li>
          </ol>
        </p>
      </div>
    </section>
  );
};

export default Experience;
