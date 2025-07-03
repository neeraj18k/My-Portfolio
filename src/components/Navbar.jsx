import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-black text-white px-4 py-3">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Neeraj</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li><a href="#hobbies" className="hover:text-teal-400">Hobbies</a></li>
          <li><a href="#personal" className="hover:text-teal-400">Personal Details</a></li>
          <li><a href="#education" className="hover:text-teal-400">Education</a></li>
          <li><a href="#certifications" className="hover:text-teal-400">Certifications</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#resume" className="hover:text-teal-400">Resume</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 px-4 text-center">
          <li><a href="#home" className="hover:text-teal-400">Home</a></li>
          <li><a href="#about" className="hover:text-teal-400">About</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li><a href="#hobbies" className="hover:text-teal-400">Hobbies</a></li>
          <li><a href="#personal" className="hover:text-teal-400">Personal Details</a></li>
          <li><a href="#education" className="hover:text-teal-400">Education</a></li>
          <li><a href="#certifications" className="hover:text-teal-400">Certifications</a></li>
          <li><a href="#projects" className="hover:text-teal-400">Projects</a></li>
          <li><a href="#resume" className="hover:text-teal-400">Resume</a></li>
          <li><a href="#contact" className="hover:text-teal-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;


