const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.get("/resume", function(req, res) {
//   console.log("Got resume path");
//   res.sendFile(path.join(__dirname, "client/public/assets/images/BARTDORITYresume.pdf"));

// }); 

app.get("*", (req, res) => {
  console.log("got a request.");
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
