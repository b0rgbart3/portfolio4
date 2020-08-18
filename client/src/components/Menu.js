import React, { useContext } from 'react';
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
                 <div className="logo">BART<br></br>DORITY</div>
                 <ul className="menuList">
                     <li>/HOME</li>
                     <li>/PROJECTS</li>
                     <li>/RESUME</li>
                     <li>/CONTACT</li>
                 </ul>
            </div>
            <div className="handle" onClick={()=>toggleMenu()}>
               <img className="slashes" src={slashes} alt="menu"></img>
            </div>
            </div>
        )
        
    }

  
  export default Menu;
  