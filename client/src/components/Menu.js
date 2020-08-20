import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Menu.css';
import slashes from '../images/slashes.png';
import {usePortfolioContext}  from "../utils/GlobalState";
import {
    CLOSE_MENU,
    OPEN_MENU,
    SET_CLASS
  } from "../utils/actions.js";



function Menu() {
    const [state, dispatch] = usePortfolioContext();
    function closeMenu() {
  
        toggleMenu();
    }
    function toggleMenu() {
        console.log("menuOpen: "+state.menuOpen);
        //toggle the menuOpen var
        if (state.menuOpen) {
            dispatch({type: CLOSE_MENU});
        } else {
            dispatch({type: OPEN_MENU});
        }
        console.log("menuOpen: "+state.menuOpen);
        console.log("menuClass: "+state.menuClass);
    
        if (state.menuOpen) {
            dispatch({type:SET_CLASS, menuClass: "MenuPanel group m_stage2"});
        } else {
            dispatch({type:SET_CLASS, menuClass: "MenuPanel group m_stage1"});
        }
      }
    
    return (
      
            <div className={ state.menuClass || "MenuPanel group m_stage1" }>
            <div className="Menu group">
            <Link to="/"><div className="logo" onClick={closeMenu}>BART<br></br>DORITY</div></Link>
                 <ul className="menuList">
                     <Link to="/"><li onClick={closeMenu}>/HOME</li></Link>
                     <Link to="/projects" onClick={closeMenu}><li>/PROJECTS</li></Link>
                     <Link to="/resume" ><li onClick={closeMenu}>/RESUME</li></Link>
                     <Link to="/contact">
                     <li onClick={closeMenu}>/CONTACT</li></Link>
                 </ul>
            </div>
            <div className="handle" onClick={()=>toggleMenu()}>
               <img className="slashes" src={slashes} alt="menu"></img>
            </div>
            </div>
        )
        
    }

  
  export default Menu;
  