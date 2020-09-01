import React, {useRef} from "react";
import "./Contact.css";
import Axios from "axios";

function Contact() {

  const first_name=useRef();
  const last_name=useRef();
  const email=useRef();
  const message = useRef();

  function handleOnSubmit(e) {
    e.preventDefault();

    let messageObject = {
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      email: email.current.value,
      message: message.current.value
    }

    Axios.put("/api/sendmessage", messageObject);

  }
  return (
       
<div className="Contact group">
        <form className="contactForm" onSubmit={handleOnSubmit}>
            <h1>Contact Bart Dority</h1>
            <div className="myLabel">First Name:</div>
            <input id="first_name" type="text" ref={first_name}></input>
            <div className="myLabel">Last Name:</div>
            <input id="last_name" type="text" ref={last_name}></input>
            <div className="myLabel">Email:</div>
            <input id="email" type="email" ref={email}></input>
            <br></br>
            <div className="myLabel">Your message:</div>
            <textarea ref={message}></textarea>
            <button type="submit">Send</button>
         </form>
    </div> 
//     <div className="row">
//     <form className="col s12">
//       <div className="row">
//         <div className="input-field col s6">
//           <input placeholder="Placeholder" id="first_name" type="text" className="validate" />
//           <label for="first_name">First Name</label>
//         </div>
//         <div className="input-field col s6">
//           <input id="last_name" type="text" className="validate"/>
//           <label for="last_name">Last Name</label>
//         </div>
//       </div>
//       <div className="row">
//         <div className="input-field col s12">
//           <input disabled value="I am not editable" id="disabled" type="text" className="validate"/>
//           <label for="disabled">Disabled</label>
//         </div>
//       </div>
//       <div className="row">
//         <div className="input-field col s12">
//           <input id="password" type="password" className="validate"/>
//           <label for="password">Password</label>
//         </div>
//       </div>
//       <div className="row">
//         <div className="input-field col s12">
//           <input id="email" type="email" className="validate"/>
//           <label for="email">Email</label>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col s12">
//           This is an inline input field:
//           <div className="input-field inline">
//             <input id="email_inline" type="email" className="validate"/>
//             <label for="email_inline">Email</label>
//             <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
//           </div>
//         </div>
//       </div>
//     </form>
//   </div>

  );
}

export default Contact;

