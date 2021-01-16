import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "./MobileMenu.css";
import slashes from "../images/slashes.png";

function Menu() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("MenuPanel group m_stage2");

  function toggleMenu() {
   if (menuOpen) { setMenuOpen(false); } else { setMenuOpen(true);}
   if (menuOpen) { setMenuClass("MenuPanel group m_stage2");} else { setMenuClass("MenuPanel group m_stage1"); }
  }

  return (
    <div className={menuClass || "MenuPanel group m_stage2"}>
      <div className="Menu group">
        <Link to="/">
          <div className="logo" onClick={toggleMenu}>
            BART<br></br>DORITY
          </div>
        </Link>
        <ul className="menuList">
          <Link to="/">
            <li onClick={toggleMenu}>/HOME</li>
          </Link>
          <Link to="/projects" onClick={toggleMenu}>
            <li>/PROJECTS</li>
          </Link>
          <Link to="/resume">
            <li onClick={toggleMenu}>/RESUME</li>
          </Link>
          <Link to="/contact">
            <li onClick={toggleMenu}>/CONTACT</li>
          </Link>
        </ul>
      </div>
      <div className="handle" onClick={toggleMenu}>
        <img className="slashes" src={slashes} alt="menu"></img>
      </div>
    </div>
  );
}

export default Menu;
