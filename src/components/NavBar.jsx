import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex justify-center space-x-4 md:space-x-6">
        <li><a href="#about" className="hover:text-gray-400 text-xs md:text-base">About Me</a></li>
        <li><a href="#skills" className="hover:text-gray-400 text-xs md:text-base">Skills</a></li>
        <li><a href="#experience" className="hover:text-gray-400 text-xs md:text-base">Experience</a></li>
        <li><a href="#projects" className="hover:text-gray-400 text-xs md:text-base">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400 text-xs md:text-base">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
