import React, { useState } from "react";
import "./Main.css";
import mug from "../images/bartdority_pic2.jpg";
// import mongo from "../images/shields/mongo.png";
import sql from "../images/shields/sql.png";
import express from "../images/shields/express.png";
import react from "../images/shields/react.png";
import node from "../images/shields/node.png";
import sequelize from "../images/shields/sequelize.png";
import { Link } from "react-router-dom";  // UseLocation
import Shield from "../components/Shield";


function Main() {

  // These are my animation timers
  const [cardStyle, setCardStyle] = useState("state1");
  const [divStyle, setDivStyle] = useState("state1");
  const [photoStyle, setPhotoStyle] = useState("state1");
  const [stackStyle, setStackStyle] = useState("state1");
  const [projButtonStyle, setProjButtonStyle ] = useState("state1");


  let cardTimer = setTimeout(function () {
    setCardStyle("state2");

  }, 300);

  let photoTimer = setTimeout(function () {
    setPhotoStyle("state2");
  }, 900);

  let divTimer = setTimeout(function () {
    setDivStyle("state2");
  }, 600);

  let stackTimer = setTimeout(function() {
    setStackStyle("state2");
  }, 1500);

  let projButtonTimer = setTimeout(function() {
    setProjButtonStyle("state2");
    clearTimeout(projButtonTimer);
  }, 3200);




  return (
    <div className="homeContainer">
    <div className={"Home group " + cardStyle}>
        
      <div className={"homeColumn1 " + divStyle}>
        <div className="homelogo">
          BART
          <br />
          DORITY
        </div>
        <div className="homebody">
          <div className="hometag">
            <span className="nobr">Full Stack Developer</span>
          </div>
          <div className="homebio">
          I have a deep knowledge of a broad range of
            web development technologies and computer
            science. I also have extensive experience in advertising, animation, marketing and design. I build applications that people find intuitive, and I’m looking to join a team of engineers that enjoy collaborating and value life-long learning.<br></br><br></br>
            <Link to="/projects">
            <div className={'mbutton ' + projButtonStyle}>Projects</div></Link> 
            <Link to="/resume"><div className={'mbutton ' + projButtonStyle}>resume</div></Link>
          </div>
        </div>
      </div>
      <div className="homeColumn2">
        <div className="mugContainer">
          <img src={mug} className={"mug " + photoStyle} alt="Bart Dority"/>
        </div>
       
        <div className={"bartsShields " + stackStyle}>
        <p className="shieldTitle">Current Development Stack:</p>

        <Shield shieldNumber="0" />
        <Shield shieldNumber="1" />
        <Shield shieldNumber="2" />
        <Shield shieldNumber="3" />
        <Shield shieldNumber="4" />

       </div>
      </div>
      <div className="homebodyMobile">
        <div className="hometag"><span className="nobr">Full Stack Developer</span></div>
        <div className="homebio">
        I have a deep knowledge of a broad range of
            web development technologies and computer
            science. I also have extensive experience in advertising, animation, marketing and design. I build applications that people find intuitive, and I’m looking to join a team of engineers that enjoy collaborating and value life-long learning.<br></br><br></br>
            <Link to="/projects">
            <div className='mbutton'>Projects</div></Link> 
            <Link to="/resume"><div className='mbutton'>resume</div></Link>
            <br></br><br></br>
          </div>
          <p className="shieldTitle">Current Development Stack:</p>
          <div className="shieldGroup group">
        <div className="shieldContainer">
              <img src={react} className="shield" alt="shield"/>
          </div>
        <div className="shieldContainer">
             <img src={node} className="shield" alt="shield"/>
          </div>
 
          <div className="shieldContainer">
              <img src={express} className="shield" alt="shield"/>
          </div>
          <div className="shieldContainer">
              <img src={sql} className="shield" alt="shield"/>
          </div>
          <div className="shieldContainer">
              <img src={sequelize} className="shield" alt="shield"/>
          </div>
          </div>
       
      </div>
    </div>
    </div>
  );
}

export default Main;
