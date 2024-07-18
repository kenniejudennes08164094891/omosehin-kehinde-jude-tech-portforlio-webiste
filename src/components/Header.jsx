// components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Omosehin Kehinde Jude</h1>
          <p className="text-sm">
            <u>judeomosehin@gmail.com</u>
          </p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
            <li><a href="#experiences" className="hover:text-gray-300">Experiences</a></li>
            <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
