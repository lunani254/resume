import React from 'react';
import './Tech.css';
import './App.css';
import { FaReact, FaHtml5, FaCss3, FaPhp, FaJava, FaGitSquare, FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";

function Tech() {
  return (
    <div className="TechContainer">
      <h2>Technologies</h2>
        <ul>
        <li className="TechItem"><FaReact /></li>
        <li className="TechItem"><TbBrandReactNative /></li>
        <li className="TechItem"><FaHtml5 /></li>
        <li className="TechItem"><FaCss3 /></li>
        <li className="TechItem"><IoLogoJavascript /></li>
        <li className="TechItem"><SiTypescript /></li>
        <li className="TechItem"><DiMysql /></li>
        <li className="TechItem"><FaPhp /></li>
        <li className="TechItem"><FaJava /></li>
        <li className="TechItem"><FaGitSquare /></li>
        <li className="TechItem"><FaGithub /></li>
      </ul>
    </div>
  );
}

export default Tech;
