import React from 'react';
import './Menu.css';
import slashes from '../images/slashes.png';

function Menu() {
    return (
        <div className="MenuPanel group">
            <div className="Menu group">
                 <div className="logo">BART<br></br>DORITY</div>
                 <ul className="menuList">
                     <li>/HOME</li>
                     <li>/PROJECTS</li>
                     <li>/RESUME</li>
                     <li>/CONTACT</li>
                 </ul>
            </div>
            <div className="handle">
               <img className="slashes" src={slashes}></img>
            </div>
      </div>
    );
  }
  
  export default Menu;
  