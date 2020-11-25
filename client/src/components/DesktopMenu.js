import React from "react";
import { Link } from "react-router-dom"; // ,useLocation
import "./DesktopMenu.css";

function DesktopMenu() {
  //const [state, dispatch] = usePortfolioContext();

  return (
    <div className="desktopMenu">
      <ul className="dmenuList">
        <Link to="/">
          <li>/BART DORITY</li>
        </Link>
        <Link to="/projects">
          <li>/PROJECTS</li>
        </Link>
        <Link to="/resume">
          <li>/RESUME</li>
        </Link>
        <Link to="/contact">
          <li>/CONTACT</li>
        </Link>
      </ul>
    </div>
  );
}

export default DesktopMenu;
