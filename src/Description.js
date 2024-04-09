import React from 'react';
import './Description.css'; // Import CSS for styling
import profileImage from './Images/profile.jpg'
import { FaInstagram,FaGithub,FaLinkedin } from "react-icons/fa";

function Description() {
  return (
    <div className="description-container">
      <div className="description-text">
        <h2>FULL STACK DEVELOPER</h2>
        <p> Hi, I'm Victor Lunani, Passionate about database administration and front-end development based in Nairobi, Kenya.</p>
      </div>
      <div className="description-image">
      <img src={profileImage} alt="Profile"/>
  
        <ul className='social-media'>
          <div>
          <li><a href="https://www.instagram.com/vikings_vic/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a></li>
          <li><a href="https://github.com/lunani254" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
          <li><a href="https://www.linkedin.com/in/victor-lunani-734943215/"><FaLinkedin/></a></li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Description;