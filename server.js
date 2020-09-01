const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

var helper = require('sendgrid').mail;
var from_email = new helper.Email('b0rgbart3@gmail.com');
var to_email = new helper.Email('bartdority@gmail.com');
var subject = 'Hello World from the SendGrid Node.js Library!';
var content = new helper.Content('text/plain', 'Hello, Email!');
// var mail = new helper.Mail(from_email, subject, to_email, content);

// var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
// var request = sg.emptyRequest({
//   method: 'POST',
//   path: '/v3/mail/send',
//   body: mail.toJSON(),
// });




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// }); 
app.post("/api/sendmessage", (req, res) => {
  console.log("got post request to send mail.");
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));

  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  }).then( (returnedObject) => {
    res.json(returnedObject);
  })
  
})

app.get("*", (req, res) => {
  console.log("got a request.");
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
