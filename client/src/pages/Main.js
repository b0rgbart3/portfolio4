import React from "react";
import "./Main.css";
import mug from "../images/bartdority_pic1.jpg";
import mongo from "../images/shields/mongo.png";
import express from "../images/shields/express.png";
import react from "../images/shields/react.png";
import node from "../images/shields/node.png";

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
            <span className="nobr">Full Stack Developer</span>
          </div>
          <div className="homebio">
            I'm a Software Engineer with a deep knowledge of a broad range of
            web technologies and a strong background in design and computer
            science who cares deeply about user-centric product development.
            Proficient in JavaScript, CSS, HTML, PHP, MySQL, Sass, git, JQuery
            and Unix. Experienced in developing with Angular, Node.js, MongoDB,
            Ruby on Rails, Objective-C and using cloud based computing platforms
            like AWS, and CSS Frameworks like Bootstrap and Materialize. I have a certificate of Full Stack Development from UC
            Berkeley extension, and a certificate of iPhone programming from
            The City College of San Francisco, and a BA in Computer Graphics
            from The Pratt Institute School of Art and Design, in New York.<br></br>I
            have extensive experience in advertising, animation, marketing and
            design. I’m looking to join a team of engineers that enjoy
            collaborating and value life-long learning.
          </div>
        </div>
      </div>
      <div className="homeColumn2">
        <div className="mugContainer">
          <img src={mug} className="mug" alt="Bart Dority"/>
        </div>
        <p className="shieldTitle">Current Dev Stack:</p>
        <div className="bartsShields">
          <div className="shieldContainer">
            MONGO DB<br></br>
              <img src={mongo} className="shield" alt="shield"/>
          </div>
          <div className="shieldContainer">
          Express<br></br>
              <img src={express} className="shield" alt="shield"/>
          </div>
          <div className="shieldContainer">
          React<br></br>
              <img src={react} className="shield" alt="shield"/>
          </div>
          <div className="shieldContainer">
          Node.js<br></br>
             <img src={node} className="shield" alt="shield"/>
          </div>
       </div>
      </div>
      <div className="homebodyMobile">
        <div className="hometag"><span className="nobr">Full Stack Developer</span></div>
        <div className="homebio">
        I'm a Software Engineer with a deep knowledge of a broad range of
            web technologies and a strong background in design and computer
            science who cares deeply about user-centric product development.
            Proficient in JavaScript, CSS, HTML, PHP, MySQL, Sass, git, JQuery
            and Unix. Experienced in developing with Angular, Node.js, MongoDB,
            Ruby on Rails, Objective-C and using cloud based computing platforms
            like AWS, and CSS Frameworks like Bootstrap and Materialize. I have a certificate of Full Stack Development from UC
            Berkeley extension, and a certificate of iPhone programming from
            The City College of San Francisco, and a BA in Computer Graphics
            from The Pratt Institute School of Art and Design, in New York.<br></br>I
            have extensive experience in advertising, animation, marketing and
            design. I’m looking to join a team of engineers that enjoy
            collaborating and value life-long learning.
          </div>
      </div>
    </div>
  );
}

export default Main;
