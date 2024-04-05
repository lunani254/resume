import React from 'react';
import './Footer.css'; // Import CSS for styling
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

function Footer() {
  return (
    <footer className="footer">
      <div className="contacts">
      <h2>contact me</h2>
      <ul>
       <li><a href="https://wa.link/vyhv5s" target='_blank' rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <li><a href="tel:+254768016771" target='_blank' rel="noopener noreferrer"><IoCall /></a></li>
        </li>
        </ul>
        </div>
      <p>&copy; 2024 My Website. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;