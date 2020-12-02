import React, { useState } from "react";
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
  const [linkStyle, setLinkStyle] = useState("");

  let myTimer = setTimeout(function () {
    setLinkStyle("state2");
    clearTimeout(myTimer);
  }, 300);

  return (
    <div className="desktopMenu">
      <ul className="dmenuList">
      
        <Link to="/">
        { page=="/"?(   <li className={ 'active ' + linkStyle}>/BART DORITY</li>):(   <li className={ linkStyle}>/BART DORITY</li>)}
      
        </Link>
        <Link to="/projects">
        { page=="/projects"?(   <li className={ 'active ' + linkStyle}>/PROJECTS</li>):(   <li className={ linkStyle}>/PROJECTS</li>)}

        </Link>
        <Link to="/resume">
        { page=="/resume"?(   <li className={ 'active ' + linkStyle}>/RESUME</li>):(   <li className={ linkStyle}>/RESUME</li>)}
        </Link>
        <Link to="/contact">
        { page=="/contact"?(   <li className={ 'active ' + linkStyle}>/CONTACT</li>):(   <li className={ linkStyle}>/CONTACT</li>)}
        </Link>
      </ul>
    </div>
  );
}

export default DesktopMenu;
