import React from "react";
import "./Main.css";
import mug from "../images/bartdority_pic1.jpg";

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
            Full Stack Web Developer with a deep knowledge of a broad range of
            web technologies and a strong background in design and computer
            science who cares deeply about user-centric product development.
            Proficient in JavaScript, CSS, HTML, PHP, MySQL, Sass, git, JQuery
            and Unix. Experienced in developing with Angular, Node.js, MongoDB,
            Ruby on Rails, Objective-C and using cloud based computing platforms
            like AWS, and CSS Frameworks like Bootstrap and Materialize. I’m
            working on a certification of Full Stack Development from UC
            Berkeley extension. I have a certificate of iPhone programming from
            The City College of San Francisco, and a BA in Computer Graphics
            from The Pratt Institute School of Art and Design, in New York. I
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
      </div>
      <div className="homebodyMobile">
        <div className="hometag">Full Stack Developer / <span className="nobr">Software Engineer</span></div>
        <div className="homebio">
            Full Stack Web Developer with a deep knowledge of a broad range of
            web technologies and a strong background in design and computer
            science who cares deeply about user-centric product development.
            Proficient in JavaScript, CSS, HTML, PHP, MySQL, Sass, git, JQuery
            and Unix. Experienced in developing with Angular, Node.js, MongoDB,
            Ruby on Rails, Objective-C and using cloud based computing platforms
            like AWS, and CSS Frameworks like Bootstrap and Materialize. I’m
            working on a certification of Full Stack Development from UC
            Berkeley extension. I have a certificate of iPhone programming from
            The City College of San Francisco, and a BA in Computer Graphics
            from The Pratt Institute School of Art and Design, in New York. I
            have extensive experience in advertising, animation, marketing and
            design. I’m looking to join a team of engineers that enjoy
            collaborating and value life-long learning.
          </div>
      </div>
    </div>
  );
}

export default Main;
