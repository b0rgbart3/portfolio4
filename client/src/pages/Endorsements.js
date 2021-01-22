import React from "react";
import "./Endorsements.css";

import kumari from "../images/endorsements/kumari.jpg";


function Endorsements() {

    const endorseObjects = 
    [ {"source": "Shambhawi Kumari",
      "address": "",
      "connection": "",
      "quote": ""},
    ];

  return (
    <div className="endBox">


      <h1>BART DORITY</h1>
      <h2>
        <span className="nobr">Full Stack Developer</span>
      </h2>

      <br></br>
      <h2 id="endH2">Endorsements</h2>
     

     <div className='source'>
        <div class='endPhoto'>
            <img src={kumari} className="endPic" />
        </div>
        <div className='address'><strong>Shambhawi Kumari</strong><br/>
            <p>Technical Lead at Wipro, (Client: Apple)<br/>
            Santa Clara, California</p>
        </div>
        <div className='connection'>September 17, 2020:
         Shambhawi and Bart were students together</div>
     </div>
     <div className='quote'>
    It's rare that we come across such an amazing and talented person who is always willing to learn new tech stack and help others grow. I had the pleasure of working with Bart at UC Berkeley Bootcamp. Bart is always known for his inquisitive thoughts and questions during the class. His questions were always an eye-opener. He has an amazing design and UI skills. Not just front-end but his reasoning and data visualization capabilities also make him a perfect backend developer. I am glad I got to work with Bart in our Shoppr Project and would not hesitate to work with him again. I definitely recommend Bart as a software engineer. He is an asset to the team. Thanks, Bart for all your contributions - it was a pleasure working with you.
     </div>
    </div>
  );
}

export default Endorsements;
