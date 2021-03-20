import React from "react";
import "./Resume.scss";
import emailIcon from "../images/icons/email.svg";
import linkedInIcon from "../images/icons/linked_in_black.svg";
import githubIcon from "../images/icons/github_round.svg";
import googleDocIcon from "../images/icons/google_doc.svg";
import pdfDocIcon from "../images/icons/pdf_doc.svg";
import pdf from '../images/BART_DORITY_resume.pdf';
import { Link } from "react-router-dom";
import Page from "../components/Page";
import Logo from "../components/Logo";

function Resume() {

  function pageContent() {
    return (
<div className="resumeBox">

<a
  href="https://docs.google.com/document/d/1-lmAoLQdn3TNLv3XQy1GRMnA0Z8diUM5eDvuPJHrLKQ"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="googleLink">
    <div className="docIcon">
      <img src={googleDocIcon} alt='google_doc_version' />
    </div>
    GoogleDoc
  </div>
</a>

<a href={pdf} target="_blank" rel="noopener noreferrer">
  <div className="pdfLink">
    <div className="docIcon">
      <img src={pdfDocIcon} alt='pdf_doc_version' />
    </div>
    PDF
  </div>
</a>
<Link to="/endorsements">
        <div className="mbutton endorse">endorsements</div>
      </Link>

<div className="contactButtons">
  <a href="mailto:bartdority@gmail.com" className="resumeLink">
    <div className="emailLinker">
      <img src={emailIcon} alt='email_icon' />
    </div>
  </a>

  <a
    href="https://www.linkedin.com/in/bart-dority/"
    className="resumeLink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="emailLinker">
      <img src={linkedInIcon} alt='linked_in' /></div>
  </a>{" "}
  <a
    href="https://github.com/b0rgbart3"
    className="resumeLink"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="emailLinker">
      <img src={githubIcon} alt='github' />
    </div>
  </a>
  

</div>

<Logo />


<br></br>
<h2>Professional Summary</h2>
<ul>
  <li>Full Stack Developer and Front End Software Engineer</li>
  <li>
    A broad range of technical expertise and extensive experience in web
    development
  </li>
  <li>B2B, Government Agency, and Non-Profit experience</li>
  <li>
    Develops and writes code that is clean, agile, and object oriented
  </li>
  <li>
  Team driven collaborator
  </li>
  <li>Background in computer science and always learning new technologies</li>
  <li>
    Passion for user interface design and visual branding; extending brand
    continuity
  </li>
  <li>
    Industry knowledge in design, publishing, marketing, advertising, and
    animation
  </li>
</ul>

<br></br>
<h2>Technical Skills</h2>

<div className='skillRow1'>
<div className='skillCol'>
<div className='skillTitle'>Programming Languages</div>
<div className='skillCol2'>
        <div className='skill'>Javascript</div>
        <div className='year'>15 years</div>
        <div className='skill'>PHP</div>
        <div className='year'>5 years</div>
        <div className='skill'>ES6</div>
        <div className='year'>4 years</div>
        <div className='skill'>Ruby</div>
        <div className='year'>1 year</div>
     
        <div className='skill'>Objective C</div>
        <div className='year'>1 year</div>
        <div className='skill'>Typescript</div>
        <div className='year'>1 year</div>
        <div className='skill'>Python</div>
        <div className='year'>1 year</div>
 
        <div className='skill'>Dart</div>
        <div className='year'>1 year</div>
</div>
</div>
<div className='skillCol'>
      <div className='skillTitle'>Databases</div>
      <div className='skillCol1'>
      <div className='skill'>MySQL</div>
      <div className='year'>5 years</div>
      <div className='skill'>MongoDB</div>
      <div className='year'>2 years</div>
      <div className='skill'>PostgreSQL</div>
      <div className='year'>1 year</div>
      </div>
      </div>
</div>

<div className='skillRow1'>
<div className='skillCol'>
      <div className='skillTitle'>Platforms</div>
      <div class='skillCol2'>
      <div className='skill'>WordPress</div>
        <div className='year'>4 years</div>
        <div className='skill'>React</div>
        <div className='year'>2 years</div>
        <div className='skill'>Angular</div>
        <div className='year'>2 years</div>
        <div className='skill'>Flutter</div>
        <div className='year'>1 year</div>
        <div className='skill'>Ruby on Rails</div>
        <div className='year'>1 year</div>

        </div>
</div>
<div className='skillCol'>
      <div className='skillTitle'>Libraries</div>
          <div className='skill'>Matrialize</div>
          <div className='skill'>Bootstrap</div>
          <div className='skill'>JQuery</div>
          <div className='skill'>Greensock</div>
          <div className='skill'>Include.js</div>
          </div>
</div>
<div className='skillRow2'>
<div className='skillCol'>
      <div className='skillTitle'>Computer Science</div>
      <div className='skillCol2b'>
          
          <div className='skill'>problem solving</div>
          <div className='skill'>user interface design</div>

          <div className='skill'>ORMs</div>
          <div className='skill'>asychronous code</div>

          <div className='skill'>ajax</div>
          <div className='skill'>DOM manipulation</div>

          <div className='skill'>promises</div>
          <div className='skill'>data structures</div>
          
          <div className='skill'>state management</div>
          <div className='skill'>functional programming</div>

          <div className='skill'>algorithms</div>
          <div className='skill'>object oriented programming</div>
          
          
          <div className='skill'>Resful API design</div>
          <div className='skill'>MVC and pub-sub design patterns</div>
          
          </div>
</div>
<div className='skillCol'>
      <div className='skillTitle lastrow'>Supporting Technologies</div>
      <div className='skillCol2'>
          <div className='skill'>Mongoose</div>
          <div className='skill'>Sequelize</div>
          <div className='skill'>Node</div>
          <div className='skill'>HTML5</div>
          <div className='skill'>CSS3</div>
          <div className='skill'>Express</div>
          <div className='skill'>Sass</div>
          <div className='skill'>Heroku</div>
          <div className='skill'>AWS</div>
          <div className='skill'>X-Code</div>
          <div className='skill'>Github</div>
          <div className='skill'>JSON</div>
          <div className='skill'>Markdown</div>
          <div className='skill'>Unix</div>
          <div className='skill'>GIT</div>
          <div className='skill'>npm</div>
          <div className='skill'>VS-Code</div>
          <div className='skill'>Adobe CS</div>
          </div>
          </div>
    </div>
  


<br></br>

<h2>Experience</h2>
<p>Self Employed Full Stack Developer at Dority Design Works, San Francisco, CA, 2005 – Current
<br></br>
<strong><a href='https://ddworks.org'>https://ddworks.org</a></strong></p>
<p>
As a small business owner, I design, build and maintain my client’s websites. I build mobile-friendly, data-driven websites and mobile apps with responsive layouts and restful API’s, hosted on cloud based services including Heroku and AWS. I have very satisfied and long term clients, and I was awarded a Silver Caddy award for the Jeep Liberty website.  
</p>

<p>
<strong>Abbreviated Client List</strong>

  <ul>
    <li>
      Rick Crane & the SF Long Term Care Coordinating Council, San
      Francisco, CA
    </li>
    <li>KQED, Interactive Department, San Francisco, CA</li>
    <li> Willow Kelly, Charlottesville, VA</li>
    <li>Jane Meredith, Author, Sydney, Australia</li>
    <li>Jerry Frost, Artist, San Francisco, CA</li>
    <li>Suzanne Sterling, Portland, OR</li>
    <li>Ravyn Stanfield, Author, Portland, OR</li>
    <li>Reclaiming Collective, San Francisco, CA</li>
    <li>Organic, Inc, Bloomfield Hills, MI</li>
    <li>A.S.K. Learning, San Francisco, CA</li>
    <li>ClearPath Media, Mountain View, CA</li>
    <li>Technesis, Inc., Mountain View, CA</li>
    <li>CloudBreak Software, Mountain View, CA</li>
    <li>Nyquist Design, Los Gatos, CA</li>
    <li>Doremus Advertising, San Francisco, CA</li>
    <li>Grey Advertising, San Francisco, CA</li>
 
  </ul>
</p>

<h2>Projects:</h2>
<div class='projects'>
<div class='project'>
<strong>ImageShoppr:</strong>
<br></br>Makes shopping a fast, fun and social experience. It uses the Google A.I. Vision API to scan an image and identify multiple products.  It then uses the Rainforest API to find those products on Amazon.   You can also connect with your friends and find out if they bought similar items. This project features a responsive layout, a global state object, and React Hooks.
<br></br>
<strong>Technologies used:</strong> React, Javascript, Node, Express, Materialize, Mongoose, HTML5, and CSS3 hosted on Heroku with MySQL database on CloudAtlas. 
<br></br>
<a href='https://polar-tor-03271.herokuapp.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/ImageShoppr'  className='pbutton'>Github</a>
</div>

<div class='project'><strong>MiddleGround:</strong> 
<br></br>
Searches, filters, and displays social media posts from a range of news organizations so users can see how different topics are trending across the political spectrum, and get a broader range of news perspectives in a single interface. <br></br>
<strong>Technologies used:</strong> Node, Express, Axios, Handlebars, Javascript, HTML5, CSS3, the NY Times API, the News.org API and the Google Fact Check API hosted on Heroku.<br></br>
<a href='https://fast-cliffs-31437.herokuapp.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/Some_Middle_Ground'  className='pbutton'>code on github</a></div>

<div class='project'>
<strong>The Loom:</strong><br></br>
A Content Management System for an online University.  Features include:User authentication, registration, an administration dashboard, instant messaging and the ability to upload various content formats including video and pdfs. <br></br>
<strong>Technologies used:</strong> Angular 2+, Sass, Materialize, Node, Express, HTML 5, and CSS 3.  Hosted on Heroku with a MongoDB database on CloudAtlas and assets stored in an s3 bucket on AWS.  <br></br><strong>Client:</strong> Reclaiming Collective, San Francisco, CA.<br></br>
 <a href='https://thawing-mountain-56615.herokuapp.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/Loom2' className='pbutton'>code on github</a><br></br>
</div>
<div class='project'><strong>
Jerry Frost:</strong> <br></br>
Portfolio website featuring a mobile friendly responsive layout, a catalog of images, an administration dashboard for uploading images and allows the user and administrator to sort the images by title, date, or category. <br></br>
<strong>Technologies used:</strong> PHP 7, HTML 5, CSS 3, Javascript and MySQL, hosted on DreamHost. <br></br>
<strong>Client:</strong> Jerry Frost, Artist, San Francisco, CA<br></br>
<a href='https://jerryfrost.com/' className='pbutton'>live website</a>
<a href='https://github.com/b0rgbart3/jerryfrost' className='pbutton'>code on github</a>
</div>
<div class='project'><strong>
Willow Kelly:</strong> <br></br>
Brochure website featuring a mobile friendly responsive layout and a contact form. <br></br>
<strong>
Technologies used:</strong> PHP 7, HTML 5, CSS 3, and Javascript. 
<br></br> <strong>Client:</strong> Willow Kelly, Charlottesville, VA
<br></br>
<a href='http://willowkelly.com' className='pbutton'>live website</a>
</div>
<div class='project'><strong>
Jane Meredith:</strong> <br></br>
Brochure website featuring a mobile friendly responsive layout and an image slider that highlights recently published books.
<br></br> 
<strong>
Technologies used:</strong>  PHP 7, HTML 5, CSS 3 and Javascript.  <br></br>
<strong>Client:</strong> Jane Meredith, Author, Sydney, Australia
<br></br>
<a href='https://janemeredith.com/' className='pbutton'>Live website</a>
<a href='https://github.com/b0rgbart3/jane_meredith' className='pbutton'>code on github</a>
</div>
<div class='project'>
<strong>LightBurst:</strong> <br></br>
iOS mobile app: a fun graphic puzzle-style game.<br></br>
<strong>
Technologies used:</strong> Objective C, and X-Code. 
<br></br>
<a href='https://github.com/b0rgbart3/LightBurst' className='pbutton'>More Info</a>
<a href='https://github.com/b0rgbart3/LightBurst' className='pbutton'>Code on github</a></div>
</div>

<h2>Education</h2>
<ul>
<li>
Certificate in Full Stack Web Development and Coding UC Berkeley Extension Coding Bootcamp</li>
<li>
Certificate in iPhone Programming, City College of San Francisco</li>
<li>
Bachelor of Fine Arts in Computer Graphics, Pratt Institute, School of Art and Design, Brooklyn NY</li>
</ul>
</div>
    )
  }
  return (

    <Page content={pageContent()} />

 );

}

export default Resume;
