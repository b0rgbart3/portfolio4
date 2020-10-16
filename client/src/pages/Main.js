import React from "react";
import "./Main.css";
import mug from "../images/bartdority_pic1.jpg";
import mongo from "../images/shields/mongo.png";
import sql from "../images/shields/sql.png";
import express from "../images/shields/express.png";
import react from "../images/shields/react.png";
import node from "../images/shields/node.png";
import sequelize from "../images/shields/sequelize.png";

function Main() {
  return (
    <div className="Home group">
      <div className="homeColumn1">
        <div className="homelogo">
          BART
          <br />
          DORITY
        </div>
        <div className="homebody">
          <div className="hometag">
            <span className="nobr">Software Engineer</span>
          </div>
          <div className="homebio">
            I have a deep knowledge of a broad range of
            web development technologies and computer
            science. I also have extensive experience in advertising, animation, marketing and typography. I’m looking to join a team of engineers that enjoy collaborating and value life-long learning.
          </div>
        </div>
      </div>
      <div className="homeColumn2">
        <div className="mugContainer">
          <img src={mug} className="mug" alt="Bart Dority"/>
        </div>
       
        <div className="bartsShields">
        <p className="shieldTitle">Current Development Stack:</p>
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
      <div className="homebodyMobile">
        <div className="hometag"><span className="nobr">Software Engineer</span></div>
        <div className="homebio">
        I have a deep knowledge of a broad range of
            web development technologies and computer
            science. I also have extensive experience in advertising, animation, marketing and typography. I’m looking to join a team of engineers that enjoy collaborating and value life-long learning.
          </div>
          <p className="shieldTitle">Current Development Stack:</p>
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
  );
}

export default Main;
