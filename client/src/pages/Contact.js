import React, { useRef, useState, useEffect } from "react";
import "./Contact.css";
import API from "../utils/API";
import emailIcon from "../images/icons/email.svg";
import linkedInIcon from "../images/icons/linked_in_black.svg";
import githubIcon from "../images/icons/github_round.svg";
import textIcon from "../images/icons/textIcon.svg";
// import googleDocIcon from "../images/icons/google_doc.svg";

function Contact() {
  const fullname = useRef();
  const email = useRef();
  const message = useRef();
  const [error, setError] = useState(null);
  const [errMsg, setErrMsg] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Update the document title using the browser API
    setError(false);
    setErrMsg("");
    setSent(false);
  }, []);

  function handleOnSubmit(e) {
    e.preventDefault();

    if (!fullname.current.value || fullname.current.value.length < 1) {
      setError(true);
      setErrMsg("Please include your Full Name");
    } else {
      if (!email.current.value || email.current.value.length < 5) {
        setError(true);
        setErrMsg("Please include your Email");
      } else {
        if (!message.current.value || message.current.value.length < 4) {
          setError(true);
          setErrMsg("Please include a Message");
        } else {
          let info = {
            full_name: fullname.current.value,
            email: email.current.value,
            message: message.current.value,
          };

          API.nodeMail(info)
            .then((result) => {
              console.log("sent node mail");
              setError(false);
              setErrMsg("");
              setSent(true);
            })
            .catch((err) => console.log(err));
        }
      }
    }
  }
  return (
    <div className="Contact group">
      <form className="contactForm" onSubmit={handleOnSubmit}>
        <div className="contactPageButtons">
          <a href="mailto:bartdority@gmail.com" className="resumeLink">
            <div className="emailLinker">
              <img src={emailIcon} alt="email_icon" />
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
              <img src={linkedInIcon} alt="linked_in" />
            </div>
          </a>{" "}
          <a
            href="https://github.com/b0rgbart3"
            className="resumeLink"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="emailLinker">
              <img src={githubIcon} alt="github_icon" />
            </div>
          </a>
          {/* <div className="emailLinker">
          <img src={textIcon} alt='email_link' />
          <span className="nobr">(415) 503-7044</span>{" "}
        </div> */}
        </div>
        <div className="actualForm group">
          {error ? <div className="error">{errMsg} </div> : <div></div>}

          {sent ? (
            <div>
              <h1>Your message was sent.</h1>
              <br></br>
              <h2>Thank you for contacting me.</h2>
              <br></br>
            </div>
          ) : (
            <div>
              <h1>Contact Bart Dority</h1>
              <div className="myLabel">Full Name:</div>
              <input id="full_name" type="text" ref={fullname}></input>
              <div className="myLabel">Email:</div>
              <input id="email" type="email" ref={email}></input>
              <br></br>
              <div className="myLabel">Your message:</div>
              <textarea ref={message}></textarea>
              <button type="submit" className="send">
                Send
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
