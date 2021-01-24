import React from "react";
import mug from "../images/bartdority_pic2.jpg";
import sql from "../images/shields/sql.png";
import express from "../images/shields/express.png";
import react from "../images/shields/react.png";
import node from "../images/shields/node.png";
import sequelize from "../images/shields/sequelize.png";
import { Link } from "react-router-dom";
import Shield from "../components/Shield";
import Page from "../components/Page";
import Logo from "../components/Logo";
import "./Home.scss";

function Home() {
  // These are my animation timers


  let bio = `Passionate about the web, and addicted to learning. I apply the Bauhaus school of design theory to software development with a focus on reducing cognitive friction to create intuitive interfaces. As a digital polyglot, I have the knowledge and understanding of a broad range of creative and web development technologies, which allows me to think in terms of common principles and design systems. I’m currently looking to join a team of engineers who enjoy collaborating to build apps that benefit the people who use them. `;

  bio = `I have a deep knowledge of a broad range of web development technologies and computer science. I also have extensive experience in advertising, animation, marketing and design. I build applications that people find intuitive, and I’m looking to join a team of engineers that enjoy collaborating and value life-long learning.`;



  function Desktop() {
      return (
          <>
    <div className={"homeColumn1 "}>
    <Logo stacked="true" />
    <div className="homebody">
      <BioBlock />
    </div>
  </div>
  <div className="homeColumn2">
    <div className="mugContainer ">
      <img src={mug} className={"mugPic "} alt="Bart Dority" />
    </div>

    <div className={"bartsShields "}>
      <p className="shieldTitle">Current Development Stack:</p>

      <Shield shieldNumber="0" animate="true" />
      <Shield shieldNumber="1" animate="true"  />
      <Shield shieldNumber="2" animate="true"  />
      <Shield shieldNumber="3" animate="true"  />
      <Shield shieldNumber="4" animate="true"  />
    </div>
  </div> 
  </>
  );
  }
  function BioBlock() {
    return (
 
        <div className="homebio">
          {bio} <br />
            <div className="sublinks">
              <Link to="/Skills">
                <div className={"mbutton "}>Skills</div>
              </Link>
              <Link to="/projects">
                <div className={"mbutton "}>Projects</div>
              </Link><br />
              <Link to="/resume">
                <div className={"mbutton "}>resume</div>
              </Link>
              <Link to="/endorsements">
                <div className={"mbutton "}>endorsements</div>
              </Link> 
            </div>
        </div>
 
    );
  }

  function Mobile() {
      return (
        <div className="homebodyMobile">
        <BioBlock />
        <p className="shieldTitle">Current Development Stack:</p>
        <div className="shieldGroup group">
          <div className="shieldContainer">
            <img src={react} className="shield" alt="shield" />
          </div>
          <div className="shieldContainer">
            <img src={node} className="shield" alt="shield" />
          </div>

          <div className="shieldContainer">
            <img src={express} className="shield" alt="shield" />
          </div>
          <div className="shieldContainer">
            <img src={sql} className="shield" alt="shield" />
          </div>
          <div className="shieldContainer">
            <img src={sequelize} className="shield" alt="shield" />
          </div>
        </div>
      </div>
      );
  }

  function pageContent() {
      return (
          <>
            <Desktop />
            <Mobile />
          </>
      )
  }

  return (

     <Page content={pageContent()} />

  );
}

export default Home;
