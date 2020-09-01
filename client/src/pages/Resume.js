import React, {useState } from "react";
import "./Resume.css";
// import { usePortfolioContext } from "../utils/GlobalState";

function Resume() {
//   const [state, dispatch] = usePortfolioContext();

//const [numPages, setNumPages] = useState(null);
//const [pageNumber, setPageNumber] = useState(1);

// function onDocumentLoadSuccess({ numPages }) {
//   setNumPages(numPages);
// }

  return (
    <div className="resumeBox">
    {/* <Document
      file="../images/.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
    >
      <Page pageNumber={pageNumber} />
    </Document>
    <p>Page {pageNumber} of {numPages}</p> */}

    <h1>BART<br />DORITY</h1>
    <h2><span className="nobr">Software Engineer</span></h2>
    <p><a href="mailto:bartdority@gmail.com" className="resumeLink">bartdority@gmail.com</a> 
​ |  <a href="https://www.linkedin.com/in/bart-dority/" className="resumeLink" target="_blank" rel="noopener noreferrer"  >linkedin.com/in/bart-dority/</a> | <a href="https://github.com/b0rgbart3" className="resumeLink" target="_blank" rel="noopener noreferrer"  >github.com/b0rgbart3</a>
<br></br><span className="nobr">(415) 503-7044</span> </p>
{/* <h2>Portfolio</h2>
<ul>
    <li><a href="https://b0rgbart3.github.io/portfolio/" target="_blank" className="resumeLink">b0rgbart3.github.io/portfolio/ </a></li>
    <li><a href="https://ddworks.org/" target="_blank" className="resumeLink">Ddworks.org</a></li>
</ul> */}

    <h2>Skills</h2>
<p>
Javascript, Node.js, React, ES6, HTML 5, CSS 3, Express, Sass, MySQL, MongoDB, Handlebars, Bootstrap, API, AJAX, Github, Heroku, jQuery, JSON, Object Oriented Programming (OOP), Problem-solving, RESTful API Design, Require.js, Greensock Animation, Unix, git, npm, AWS, Ruby, Ruby on Rails, Objective-C, XCode, VS-Code, Photoshop, Illustrator, InDesign, AfterEffects and Premier</p>

<h2>
Professional Summary</h2>
<ul>
<li>Senior-level Full Stack Developer with a broad range of technical expertise and extensive experience in web development</li>
<li>B2B, Government Agency, Non-Profit experience</li>
<li>Develop and write code that is clean, agile, object oriented, and test driven</li>
<li>Passion for user interface design and visual branding; extending the brand’s continuity</li>
<li>Vast expertise in design, publishing, marketing, advertising, and animation</li>
<li>Highly skilled collaborator with the ability to quickly learn and teach new technologies</li>
<li>Background in computer science</li>

<h2>Noteworthy Projects</h2>
<li>MiddleGround​ ​ -​ F​ull stack application that analyzes social media feeds and displays analytics, aggregating analysis from multiple APIs, built with Node.js, Express, handlebars, custom CSS, Sequelize and MySQL.</li>
<li>The Loom​ - F​ull stack Content Management System for an online University, built with Node.js, Javascript, jQuery, and MongoDB</li>
<li>Starburst​ ​- G​ame for the iPhone and iPad, written in Objective C</li>
<li>Jeep.com​ -​ A​ nnouncement of the new Jeep Liberty, built with Flash and ActionScript</li>
<li>NewLine Cinema Films Intro Animation​ -​ ​Built with SoftImage, and Unix scripting on Silicone
Graphics The Loom Workstations</li>
</ul>

<h2>Employment History</h2>
<h3>Dority Design Works - San Francisco, CA</h3>
<p>Principal - Independent Full Stack Developer and Graphic Designer 2003 – Current<br/>
Web hosting, database management, designing and developing custom themes for WordPress, and technical consultation. Full range of graphic design services including logo design, branding, illustration, and related promotional materials, such as business cards, postcards, and HTML emails.</p>
           
<h3>McQuerter Group - Burlingame, CA</h3>
<p>Design Director & Associate Creative Director March 2002 - September 2002<br/>
Managed all creative development of on-line and off-line media for the agency’s integrated advertising, public relations and interactive agency. Projects included websites, direct mail, email campaigns, on-line advertising and promotional materials. Responsibilities included creative direction, Flash animation, programming in ActionScript, and coding HTML. Clients: iPass, and Snapple Beverage Group.</p>

<h3>Doremus Advertising - San Francisco, CA</h3>
<p>Associate Creative Director, Interactive
August 2001 - March 2002
Creative direction of the interactive department offering integrated campaigns for hi-tech B2B clients. Projects included: Flash and HTML production for rich-media ads, interstitials, websites, and interactive presentations. Clients: Hitachi Data Systems, SGI, Commerce One, Ciena, and Foundry Networks.
</p>
<h3>Boston Consulting Group - San Francisco, CA</h3>
<p>
Design Director
August 2000 - January 2001
Directed the design staff of the San Francisco office of a bi-coastal start-up web development firm. Defined internal processes and infrastructure, and developed identity materials.</p>

<h3>Dynamind, LLC - New York, NY</h3>
<p>VP, Creative Director
October 1996 - May 2000
Built and directed operations of a large full-service web development firm. Projects included corporate identities, websites, software development and interactive presentations for Fortune 100 and hi-tech companies. Creative direction, client contact, staff management and training. Developed internal procedures for tracking workflow, assets, style-guides, correspondence, presentations, and production. Clients: Amerada Hess, AIG, Artel Video, Ascend Communications, Akamai Technologies, Battery Ventures, Eduneering, Intira, Lucent, Next Venue, TDK, The Futures Group, Fuji Medical, Tiaa-Cref, US Peace Corps, The White House Fellows Program, Xevo and Xpedior.
</p>

<h2>Education</h2>
<ul>
<li>UC Berkeley - Full Stack Web Development Coding Bootcamp - 2020</li>
<li>City College of San Francisco - Certificate of iPhone Programming, 2014</li>
<li>R/Greenburg Associates - CG Special Effects Animation Internship, New York, NY, 1994</li>
<li>Pratt Institute / School of Art and Design - BFA Computer Graphics, Brooklyn, NY, 1992</li>
<li>Los Alamos National Laboratory, NM - C-Programming Internship</li>
</ul>

<h2>Live Websites</h2>
<ul className="livewebsiteList">
<li>
<a href="https://ddworks.org" className="resumeLink">ddworks.org</a></li>
<li><a href="https://jerryfrost.com" className="resumeLink">jerryfrost.com</a></li>
<li><a href="https://jackdavisart.com" className="resumeLink">jackdavisart.com</a></li>
<li><a href="https://bigmuscletrainer.com" className="resumeLink">bigmuscletrainer.com</a></li>
{/* <li><a href="http://www.paintedmonkeysf.com" className="resumeLink">paintedmonkeysf.com</a></li> */}
<li><a href="https://michaellawrenceart.com" className="resumeLink">michaellawrenceart.com</a></li> 
<li><a href="https://willowkelly.com" className="resumeLink">willowkelly.com</a></li> 
<li><a href="https://darkmessenger.net" className="resumeLink">darkmessenger.net</a></li> 
<li><a href="http://www.laurellittletheatre.com" className="resumeLink">laurellittletheatre.com</a></li>
<li><a href="http://gedeparma.com" className="resumeLink">gedeparma.com</a></li>
<li><a href="http://vargatorte.com" className="resumeLink">vargatorte.com</a></li>
</ul>

<h2>Awards & Recognition</h2>
<p>
Silver Caddy Award, for Jeep.com
Pratt Circle Award, Dean’s List, 1990, 1991, 1992 Outstanding Academic Achievement Award Taylor Endowment Scholarship
</p>
<h2>Abbreviated Client List</h2>
<p className="clientList">
Rick Crane & the SF Long Term Care, Coordinating Council , San Francisco, CA, KQED, Interactive Department, San Francisco, CA, Organic, Inc, Bloomfield Hills, MI, A.S.K. Learning, San Francisco, CA, ClearPath Media, Mountain View, CA, Technesis, Inc., Mountain View, CA, CloudBreak Software, Mountain View, CA, Nyquist Design, Los Gatos, CA, Soma Networks, San Francisco, CA, Doremus Advertising, San Francisco, CA, Grey Advertising, San Francisco, CA, Ric Cohn Productions, New York, NY, Catholic Charities, Dept of AIDS Health Care Services, New York, NY, Lovett Productions, and The Cancer Institute of Brooklyn, NY, Dixon & Company Publishing, New York, NY
</p>
  </div>
  )
}

export default Resume