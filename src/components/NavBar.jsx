import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <ul className="flex justify-center space-x-6">
        <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
        <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
        <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
        <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
