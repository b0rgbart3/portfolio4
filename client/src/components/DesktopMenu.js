import React from "react";
import { Link, useLocation } from "react-router-dom"; // ,useLocation
import "./DesktopMenu.css";
import {usePortfolioContext}  from "../utils/GlobalState";

let page="/";

function getPage() {
  let location = useLocation();
 // console.log('My Location: ', location.pathname);
  if (location && location.pathname) {
    page = location.pathname;
  }
}
function DesktopMenu(props) {

  getPage();
  return (
    <div className="desktopMenu">
      <ul className="dmenuList">
      
        <Link to="/">
        { page=="/"?(   <li class='active'>/BART DORITY</li>):(   <li >/BART DORITY</li>)}
      
        </Link>
        <Link to="/projects">
        { page=="/projects"?(   <li class='active'>/PROJECTS</li>):(   <li >/PROJECTS</li>)}

        </Link>
        <Link to="/resume">
        { page=="/resume"?(   <li class='active'>/RESUME</li>):(   <li >/RESUME</li>)}
        </Link>
        <Link to="/contact">
        { page=="/contact"?(   <li class='active'>/CONTACT</li>):(   <li >/CONTACT</li>)}
        </Link>
      </ul>
    </div>
  );
}

export default DesktopMenu;
