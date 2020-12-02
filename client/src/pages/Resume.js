import React from "react";
import "./Resume.css";
import emailIcon from "../images/icons/email.svg";
import linkedInIcon from "../images/icons/linked_in_black.svg";
import githubIcon from "../images/icons/github_round.svg";
import textIcon from "../images/icons/textIcon.svg";
import googleDocIcon from "../images/icons/google_doc.svg";

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
        href="https://docs.google.com/document/d/1-lmAoLQdn3TNLv3XQy1GRMnA0Z8diUM5eDvuPJHrLKQ/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="googleLink">
          <div className="googleDocIcon">
            <img src={googleDocIcon} alt='google_doc_version' />
          </div>
          Google Doc
          <br />
          Version
        </div>
      </a>
      <h1>BART DORITY</h1>
      <h2>
        <span className="nobr">Software Engineer</span>
      </h2>
      <div className="contactButtons">
        <a href="mailto:bartdority@gmail.com" className="resumeLink">
          <div className="emailLinker">
            <img src={emailIcon} alt='email_icon' />bartdority@gmail.com
          </div>
        </a>
        ​{" "}
        <a
          href="https://www.linkedin.com/in/bart-dority/"
          className="resumeLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="emailLinker">
            <img src={linkedInIcon} alt='linked_in' />
            linkedin.com/in/bart-dority
          </div>
        </a>{" "}
        <a
          href="https://github.com/b0rgbart3"
          className="resumeLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="emailLinker">
            <img src={githubIcon} alt='github' />github.com/b0rgbart3
          </div>
        </a>
        <div className="emailLinker">
          <img src={textIcon} alt='email_link' />
          <span className="nobr">(415) 503-7044</span>{" "}
        </div>
      </div>
      {/* <h2>Portfolio</h2>
<ul>
    <li><a href="https://b0rgbart3.github.io/portfolio/" target="_blank" className="resumeLink">b0rgbart3.github.io/portfolio/ </a></li>
    <li><a href="https://ddworks.org/" target="_blank" className="resumeLink">Ddworks.org</a></li>
</ul> */}
      <br></br>
      <h2>Professional Summary</h2>
      <ul>
        <li>Senior-level Software Engineer and Full Stack Developer</li>
        <li>
          A broad range of technical expertise and extensive experience in web
          development
        </li>
        <li>B2B, Government Agency, and Non-Profit experience</li>
        <li>
          Develops and writes code that is clean, agile, and object oriented
        </li>
        <li>
          Team driven collaborator with the ability to quickly learn and teach
          new technologies{" "}
        </li>
        <li>Background in computer science</li>
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
      <h2>Skills</h2>
      <p>
        Javascript, Node.js, React, Angular, Flutter, Dart, Python, Ruby, Ruby
        on Rails, Java, Objective-C, Typescript, ES6, MySQL, HTML 5, CSS 3,
        MongoDB, Mongoose, Express, JQuery, Materialize, Sass, Heroku, AWS,
        X-Code, PHP, WordPress, AJAX, Github, ORM, Handlebars, Bootstrap, JSON,
        Object Oriented Programming, Problem-solving, RESTful API Design,
        Require.js, Greensock Animation, Unix, git, npm, VS-Code, Adobe CS
        Suite, Flash, ColdFusion, and ActionScript.
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
      <h3>Dority Design Works - San Francisco, CA</h3>
      <p>
        Principal - Independent Software Engineer and Full Stack Developer 20003
        - Current<br></br>
        Designing, building and maintaining client websites with an ever
        evolving spectrum of technologies.
      </p>

      <h3>McQuerter Group - Burlingame, CA</h3>
      <p>
        Design Director & Associate Creative Director March 2002 - September
        2002
        <br />
        Managed all creative development of on-line and off-line media for the
        agency’s integrated advertising, public relations and interactive
        agency. Projects included websites, direct mail, email campaigns,
        on-line advertising and promotional materials. Responsibilities included
        creative direction, Flash animation, programming in ActionScript, and
        coding HTML. Clients: iPass, and Snapple Beverage Group.
      </p>

      <h3>Doremus Advertising - San Francisco, CA</h3>
      <p>
        Associate Creative Director, Interactive August 2001 - March 2002
        Creative direction of the interactive department offering integrated
        campaigns for hi-tech B2B clients. Projects included: Flash and HTML
        production for rich-media ads, interstitials, websites, and interactive
        presentations. Clients: Hitachi Data Systems, SGI, Commerce One, Ciena,
        and Foundry Networks.
      </p>
      <h3>Boston Consulting Group - San Francisco, CA</h3>
      <p>
        Design Director August 2000 - January 2001 Directed the design staff of
        the San Francisco office of a bi-coastal start-up web development firm.
        Defined internal processes and infrastructure, and developed identity
        materials.
      </p>

      <h3>Dynamind, LLC - New York, NY</h3>
      <p>
        VP, Creative Director October 1996 - May 2000 Built and directed
        operations of a large full-service web development firm. Projects
        included corporate identities, websites, software development and
        interactive presentations for Fortune 100 and hi-tech companies.
        Creative direction, client contact, staff management and training.
        Developed internal procedures for tracking workflow, assets,
        style-guides, correspondence, presentations, and production. Clients:
        Amerada Hess, AIG, Artel Video, Ascend Communications, Akamai
        Technologies, Battery Ventures, Eduneering, Intira, Lucent, Next Venue,
        TDK, The Futures Group, Fuji Medical, Tiaa-Cref, US Peace Corps, The
        White House Fellows Program, Xevo and Xpedior.
      </p>

      <br></br>
      <h2>Education</h2>
      <ul>
        <li>UC Berkeley - Full Stack Web Development Coding Bootcamp - 2020</li>
        <li>
          City College of San Francisco - Certificate of iPhone Programming,
          2014
        </li>
        <li>
          R/Greenburg Associates - CG Special Effects Animation Internship, New
          York, NY, 1994
        </li>
        <li>
          Pratt Institute / School of Art and Design - BFA Computer Graphics,
          Brooklyn, NY, 1992
        </li>
        <li>Los Alamos National Laboratory, NM - C-Programming Internship</li>
      </ul>

      <br></br>
      <h2>Live Websites</h2>
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
        </li>
        {/* <li><a href="http://www.paintedmonkeysf.com" className="resumeLink">paintedmonkeysf.com</a></li> */}
        {/* <li><a href="https://michaellawrenceart.com" className="resumeLink">michaellawrenceart.com</a></li>  */}
        <li>
          <a href="https://willowkelly.com" className="resumeLink">
            willowkelly.com
          </a>
        </li>
        {/* <li><a href="https://darkmessenger.net" className="resumeLink">darkmessenger.net</a></li>  */}
        <li>
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
      </ul>

      <br></br>
      <h2>Awards & Recognition</h2>
      <p>
        Silver Caddy Award, for Jeep.com Pratt Circle Award, Dean’s List, 1990,
        1991, 1992 Outstanding Academic Achievement Award Taylor Endowment
        Scholarship
      </p>

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
