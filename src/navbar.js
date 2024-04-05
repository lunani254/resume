import React, { useState } from 'react';
import './Navbar.css';


function Navbar() {
  const [showDropdown]=useState(false);
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
          {showDropdown && (
            <div className="dropdown-content">
              <a href="/email">Email</a>
              <a href="/phone">Phone</a>
            </div>
          )}
        </li>
      </ul>
      <a href="https://victor.devs" className="nav-link" style={{ position: 'absolute', top: '10px', right: '10px' }}>victor dev</a>
    </nav>
  );
}

export default Navbar;
