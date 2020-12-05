import React from "react";
import "./Resume.css";
import emailIcon from "../images/icons/email.svg";
import linkedInIcon from "../images/icons/linked_in_black.svg";
import githubIcon from "../images/icons/github_round.svg";
import textIcon from "../images/icons/textIcon.svg";
import googleDocIcon from "../images/icons/google_doc.svg";
import pdfDocIcon from "../images/icons/pdf_doc.svg";
import pdf from '../images/BART_DORITY_resume.pdf';

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

      <a
        href="https://docs.google.com/document/d/1-lmAoLQdn3TNLv3XQy1GRMnA0Z8diUM5eDvuPJHrLKQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="googleLink">
          <div className="docIcon">
            <img src={googleDocIcon} alt='google_doc_version' />
          </div>
          Google Doc
        </div>
      </a>
      {/* process.env.PUBLIC_URL + "../</div> */}
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="pdfLink">
          <div className="docIcon">
            <img src={pdfDocIcon} alt='pdf_doc_version' />
          </div>
          PDF
        </div>
      </a>
      <h1>BART DORITY</h1>
      <h2>
        <span className="nobr">Full Stack Developer</span>
      </h2>
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
        {/* <div className="emailLinker">
          <img src={textIcon} alt='email_link' />
          <span className="nobr">(415) 503-7044</span>{" "}
        </div> */}
      </div>
      {/* <h2>Portfolio</h2>
<ul>
    <li><a href="https://b0rgbart3.github.io/portfolio/" target="_blank" className="resumeLink">b0rgbart3.github.io/portfolio/ </a></li>
    <li><a href="https://ddworks.org/" target="_blank" className="resumeLink">Ddworks.org</a></li>
</ul> */}
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
        <li>Background in computer science</li>
        <li>
          Passion for user interface design and visual branding; extending brand
          continuity
        </li>
        <li>Always learning new technologies</li>
        <li>
          Industry knowledge in design, publishing, marketing, advertising, and
          animation
        </li>
      </ul>

      <br></br>
      <h2>Technical Skills</h2>
      <p>
      Javascript, Node.js, React, Angular, Flutter, Dart, Python, Ruby, Ruby on Rails, Java, Objective-C, Type- script, ES6, MySQL, HTML 5, CSS 3, MongoDB, Mongoose, Express, JQuery, Materialize, Sass, Heroku, AWS, X-Code, PHP, WordPress, Custom WordPress Theme development, AJAX, Github, ORM, Handlebars, Bootstrap, JSON, Object Oriented Programming, Problem-solving, RESTful API Design, Require.js, Greensock Animation, Unix, git, npm, VS-Code, Adobe CS Suite, Flash, ColdFusion, and ActionScript.
      </p>

      {/* React
Rest API
Sequelize
SQL
Ruby
Python
Performance
PWA  */}

      <br></br>

      <h2>Relevant Experience</h2>
      <h3>Self Employed Full Stack Developer</h3>
      <p>
       Dority Design Works<br />
       San Francisco, CA<br />
      January 2003 - Current<br />
        Running a full service web development shop, I design, build and maintain numerous clients websites with an ever evolving spectrum of technologies. With my background in graphic design, I develop logos and marketing materials and then carry the visual branding to the corresponding websites. Each project is an opportunity to explore new web development technologies. Clients include: KQED Public Television, Technesis Software, Organic Inc., ClearPath Media, ASK Learning, NyquistDesign, Soma Networks and Rick Crane Consulting.  I have launched dozens of websites, and have very satisfied and long-term clients, and I have expanded my technical skills to include data driven websites, responsive design, mobile development, restful API’s, application development, and the use of cloud based services and storage platforms like Heroku and AWS. 
      </p>

      <h3>Associate Creative Director</h3>
      <p>McQuerter Group<br />
      Burlingame, CA
        <br />
        March 2002 - September
        2002
        <br />
        Creative direction of a newly formed Silicone Valley branch office of this established San Diego based Advertising and Public Relations Firm. I designed and produced all of the online and printed 
promotional materials for the agency and it's clients, and pitch projects. Projects included rich-media ads, interstitials, websites and interactive presentations that were coded with Flash ActionScript, 
Javascript and HTML. Clients included: iPass, and Snapple Beverage Group. I designed and coded 
several 3D interactive Flash driven websites that were conceptually integrated with a 3D toy that was mailed to prospective clients as part of a successful launch campaign that won the first two contracts for the agency.
      </p>

      <h3>Associate Creative Director, Interactive</h3>
      <p>Doremus Advertising<br />
      San Francisco, CA<br />
     August 2001 - March 2002<br />
     Creative direction of the interactive department offering integrated campaigns for hi-tech B2B clients. Projects included Flash and HTML production for rich-media ads, interstitials, websites and interactive presentations.  Clients: Hitachi Data Systems, SGI, Commerce One, Ciena, and Foundry Networks.  
I conceptually designed and produced successful pitch presentations that won contracts for the agency including Foundry Networks, Commerce One, and Hitachi Data Systems.
      </p>
      <h3>Design Director</h3>
      <p>
      Boston Consulting Group<br />
      San Francisco, CA<br />
      August 2000 - January 2001<br />
 
      Directed the design staff of the San Francisco office of a bi-coastal startup web development firm, which was created to service Boston Consulting Group’s existing clients. As a founding member of this startup, I regularly met with the sales team, the HR manager, and my designers and project managers, to 
establish and define internal processes and develop identity materials for new client presentations.  
I also designed and produced several experimental conceptual projects to demonstrate the use and 
capabilities of websites to accomplish business objectives that previously had not been realized for BCG’s clients.  I built a web application, the HyperClock - which allowed users to set up clocks in multiple time zones so they could more easily plan meetings with colleagues across the globe.  I designed a 
fluidly animated conceptual navigation system that allowed young business leaders to explore and learn about business strategy from BCG’s large archive of historical articles about business anectodes in a way that was engaging and sparked their interest.
      </p>

      <h3>Vice President and Creative Director</h3>
      <p>Dynamind, LLC<br />
      New York, NY<br />
      October 1996 - May 2000<br />
   
      Built and directed operations of a large web development firm.  Projects included corporate identities, websites, software development and interactive presentations for Fortune 100 and hi-tech companies. I developed internal procedures for tracking workflow, assets, style-guides, client correspondence, pitch presentations, production and maintenance.  Clients: Amerada Hess, AIG, Artel Video, Ascend Communications, Akamai Technologies, Battery Ventures, Eduneering, Intira, Lucent, Next Venue, TDK, The Futures Group, Fuji Medical, Tiaa-Cref, US Peace Corps, The White House Fellows Program, Xevo, and Xpedior. The founders were the CTO and CEO, and I was the second person hired originally as a web developer.  I was continually promoted as the company and my staff grew.  We moved locations twice, each time to a larger office space. In 1998 I was promoted to be an officer of the company, 
managing a staff of over 14 designers and web developers. I worked closely with the CEO, CTO and sales department, and the company had a staff of over 25 people.
      </p>

      <br></br>
      <h2>Education</h2>
      <ul>
        <li>Professional Certificate in Full Stack Web Development and Coding<br />
        UC Berkeley Extension Bootcamp - 2020</li><br />
        <li>
          Professional Certificate in iPhone Programming <br />
          City College of San Francisco - 2016
        </li><br />
        <li>
          CG Special Effects Animation Internship<br />
          R/Greenburg Associates, New York, NY
        </li><br />
        <li>
          Bachelor of Fine Arts - specializing in Computer Graphics<br />
          Pratt Institute / School of Art and Design, Brooklyn, NY, 1992
        </li><br />
        <li>C Programming Internship<br />
        Los Alamos National Laboratory, NM</li>
      </ul>

      <br></br>
      {/* <h2>Live Websites</h2>
      <ul className="livewebsiteList">
        <li>
          <a href="https://ddworks.org" className="resumeLink">
            ddworks.org
          </a>
        </li>
        <li>
          <a href="https://jerryfrost.com" className="resumeLink">
            jerryfrost.com
          </a>
        </li>
        <li>
          <a href="https://jackdavisart.com" className="resumeLink">
            jackdavisart.com
          </a>
        </li>
        <li>
          <a href="https://bigmuscletrainer.com" className="resumeLink">
            bigmuscletrainer.com
          </a>
        </li> */}
        {/* <li><a href="http://www.paintedmonkeysf.com" className="resumeLink">paintedmonkeysf.com</a></li> */}
        {/* <li><a href="https://michaellawrenceart.com" className="resumeLink">michaellawrenceart.com</a></li>  */}
        {/* <li>
          <a href="https://willowkelly.com" className="resumeLink">
            willowkelly.com
          </a>
        </li> */}
        {/* <li><a href="https://darkmessenger.net" className="resumeLink">darkmessenger.net</a></li>  */}
        {/* <li>
          <a href="http://www.laurellittletheatre.com" className="resumeLink">
            laurellittletheatre.com
          </a>
        </li>
        <li>
          <a href="http://gedeparma.com" className="resumeLink">
            gedeparma.com
          </a>
        </li>
        <li>
          <a href="http://vargatorte.com" className="resumeLink">
            vargatorte.com
          </a>
        </li>
      </ul> */}

      <br></br>
      <h2>Awards and Recognition</h2>
      <ul>
       <li> Silver Caddy Award for Jeep.com</li>
       <li>
        Pratt Circle Award, Dean’s List</li>
        <li>Outstanding Academic Achievement Award Taylor Endowment
        Scholarship</li>
        <li>Pratt School of Art and Design Talent Scholarship</li>
      </ul>

      <br></br>
      <h2>Abbreviated Client List</h2>
      <p className="clientList"></p>
        <ul>
          <li>
            Rick Crane & the SF Long Term Care, Coordinating Council , San
            Francisco, CA
          </li>
          <li>KQED, Interactive Department, San Francisco, CA</li>
          <li>Organic, Inc, Bloomfield Hills, MI</li>
          <li>A.S.K. Learning, San Francisco, CA</li>
          <li>ClearPath Media, Mountain View, CA</li>
          <li>Technesis, Inc., Mountain View, CA</li>
          <li>CloudBreak Software, Mountain View, CA</li>
          <li>Nyquist Design, Los Gatos, CA</li>
          <li>Soma Networks, San Francisco, CA</li>
          <li>Doremus Advertising, San Francisco, CA</li>
          <li>Grey Advertising, San Francisco, CA</li>
          <li>Ric Cohn Productions, New York, NY</li>
          <li>
            Catholic Charities, Dept of AIDS Health Care Services, New York, NY
          </li>
          <li>Lovett Productions, and The Cancer Institute of Brooklyn, NY</li>
          <li>Dixon & Company Publishing, New York, NY</li>
        </ul>
     
    </div>
  );
}

export default Resume;
