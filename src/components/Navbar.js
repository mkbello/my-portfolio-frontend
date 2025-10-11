import React from 'react';

export default function Navbar() {
  return (
    <nav className="container">
      <div className="brand">MB</div>
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
