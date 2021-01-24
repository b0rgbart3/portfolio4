import React from "react";
import "./Endorsements.scss";

import kumari from "../images/endorsements/kumari.jpg";
import goodfriend from "../images/endorsements/goodfriend.jpg";
import smith from "../images/endorsements/smith.jpg";
import yoon from "../images/endorsements/yoon.jpg";
import chenette from "../images/endorsements/chenette.jpg";
import Page from "../components/Page";
import Logo from "../components/Logo";

function Endorsements() {
  const photos ={ kumari, goodfriend, smith, yoon, chenette };
  const endorseObjects = [
    {
        photo: "goodfriend",
        source: "Wendy Goodfriend",
        position: "Business Owner at Wendy Goodfriend Design",
        address: "San Francisco, California",
        connection:
          "September 17, 2020: Wendy was a client of Bart's",
        quote:
          `As a Senior digital producer at KQED Public Media, I hired Bart Dority to design the animated components of three cooking show websites I was designing for KQED TV. Two of the websites featured the world-renowned chef Jacques Pépin and the third showcased local Bay Area chef celebrity Joanne Weir. Bart’s assignment was to take specific visual components of the site and make them come alive. He listened to my vision and not only created what I imagined but embellished on the ideas and made the animations even better. I have to say Bart is one of the best people I have ever worked with, both technically and personally. He is highly creative and simultaneously collaborative and responsible. My experience was we were creative partners designing something special and unique and he was as equally invested in the project as I was. I had fun working with Bart and he is a kind, considerate and extremely talented person. I highly recommend hiring Bart Dority for any digital projects, he is reliable, has good time management skills, and is a pleasure to work with.`,
      },
    {
      photo: "kumari",
      source: "Shambhawi Kumari",
      position: "Technical Lead at Wipro, (Client: Apple)",
      address: "Santa Clara, California",
      connection:
        "September 17, 2020: Shambhawi and Bart were students together",
      quote:
        "It's rare that we come across such an amazing and talented person who is always willing to learn new tech stack and help others grow. I had the pleasure of working with Bart at UC Berkeley Bootcamp. Bart is always known for his inquisitive thoughts and questions during the class. His questions were always an eye-opener. He has an amazing design and UI skills. Not just front-end but his reasoning and data visualization capabilities also make him a perfect backend developer. I am glad I got to work with Bart in our Shoppr Project and would not hesitate to work with him again. I definitely recommend Bart as a software engineer. He is an asset to the team. Thanks, Bart for all your contributions - it was a pleasure working with you.",
    },

      {
        photo: "smith",
        source: "Hannah Smith",
        position: "Maps Team at Apple",
        address: "Santa Clara, California",
        connection:
          "September 17, 2020: Bart worked with Hannah in the same group",
        quote:
          "I had the honor of working with Bart on our first project at UC Berkeley Coding Bootcamp. He is an excellent developer who was the heart and soul of our team. He was always happy to take the time assist and explain concepts to the group. His code was always concise and very readable for others. He was a great collaborator and always brought new insights to the table. He is an excellent developer and a great mentor to our team. He is able to quickly grasp new technologies and convey them to others in more palpable terms. I cannot recommend Bart enough. He is an all around great developer who would be a great asset to any development team.",
      },
      {
        photo: "yoon",
        source: "Stacey Yoon",
        position: "Recent graduate from UC Berkeley Extension's Full Stack Coding Bootcamp",
        address: "Garden Grove, California",
        connection:
          "October 2, 2020: Bart worked with Stacey in the same group",
        quote:
          "Bart was a team member that I would instantly pick to work with again. He went above and beyond our boot camp curriculum and introduced new knowledge to our teammates. Bart was our go-to guy if we had any bugs in our code that we couldn't figure out. It was a pleasure working on a group project with him.",
      },  

  ];

  function pageContent() {
  return (
    <div className="endBox">
      <Logo />
      <h2 id="endH2">Endorsements</h2>

      {endorseObjects.map((eObj, index) => (
        <div className="endorsementObject group" key={index}>
          <div className="source">
            <div className="endPhoto">
              <img src={photos[eObj.photo]} className="endPic" alt={eObj.source}/>
            </div>
            <div className="address">
              <strong>{eObj.source}</strong>
              <br />
              <p>{eObj.position}</p>
              <p>{eObj.address}</p>
            </div>
            <div className="connection">{eObj.connection}</div>
          </div>
          <div className="quote">{eObj.quote}</div>
        </div>
        
      ))}
    </div>
  );}
  return (

    <Page content={pageContent()} />

 );

}

export default Endorsements;


/*

      {
        photo: "chenette",
        source: "Jerome Chenette",
        position: "Lead Online Web Development Instructor at UC Berkeley Extension",
        address: "Berkeley, California",
        connection:
          "August 27, 2019: Bart was a student of Jerome's",
        quote:
          `I wanted to send along a note of gratitude for your participation in our classroom experience. 
          Bart - thank you. Thank you for having been part of this class.  Please know that you will be an asset to whatever team you decide to join. Your kindness, humor, openness, and curiosity has enriched the class as a whole, and made my experience as an instructor that much more enjoyable. Thank you for always seeking clarification and enthusiasm to each new subject. It has been a real pleasure.`,
      },

      */
     