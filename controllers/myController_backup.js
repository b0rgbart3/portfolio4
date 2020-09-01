const db = require("../models");


var helper = require('sendgrid').mail;
var from_email = new helper.Email('b0rgbart3@gmail.com');
var to_email = new helper.Email('bartdority@gmail.com');
var subject = 'Hello World from the SendGrid Node.js Library!';
var content = new helper.Content('text/plain', 'Hello, Email!');
var mail = new helper.Mail(from_email, subject, to_email, content);

var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
});

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main( messageObject ) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
   let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USERNAME, // generated ethereal user
      pass: process.env.GMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Bart Dority" <b0rgBart3@gmail.com>', // sender address
    to: "bartdority@gmail.com, b0rgBart3@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  // Send two email messages -- first, send this message on to myself,
  // so that I know someone filled out my form.
  // Secondly, I want to send whomever filled it out a "receipt".
  let textMessage = "You have received the following message from your contact form on your website.\n";
  textMessage += "--------------\n";
  textMessage += "From: " + messageObject.first_name + " " + messageObject.last_name + "\n";
  textMessage += "Email: " + messageObject.email + "\n";
  textMessage += "\n";
  textMessage += "Their Message:\n";
  textMessage += messageObject.message;
  textMessage += "-------------\nEnd of Transmission.\n\n";
  console.log(typeof(textMessage));


  // let info = await transporter.sendMail({
  //   from: '"Bart Dority" <b0rgBart3@gmail.com>', // sender address
  //   to: "b0rgBart3@gmail.com", // list of receivers
  //   subject: "A Message from your Porftolio Website", // Subject line
  //   text: textMessage, // plain text body
  //   html: "<div>"+textMessage+"</div>", // html body
  // })

  console.log("Message sent: %s", info.messageId);
  //return info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

// Defining methods for the booksController
module.exports = {

  nodemail: function(req, res) {
    console.log("Sending Nodemail:",req.body);

    main(req.body).catch(console.error);
    res.end();
  },
  sendmail: function(req, res) {
    console.log("got to the server side.");

    console.log("got post request to send mail.");
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));

  sg.API(request).then( (returnedObject) => {
    res.json(returnedObject);
  }).catch(err => res.status(422).json(err));

  
  },
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

// Right now we don't yet need a find by ID request

//   findById: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

// right now we don't need an update request

//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
