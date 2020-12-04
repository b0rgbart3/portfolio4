const path = require("path");
const express = require("express");
const router = require("express").Router();
const apiRoutes = require("./api");
const axios = require("axios");

// API Routes for data pertaining to our DB
router.use("/api", apiRoutes);


// // API Route to query the Google API
// router.get("/google/:name", (req, res) => {
//   // make an api call to `https://www.googleapis.com/books/v1/volumes?q=<Book Name>` and return the relevant results.

//   console.log("Looking for: "+ req.params.name  );
//    //res.json({q: req.params.name });

//   axios.get("https://www.googleapis.com/books/v1/volumes",
//    { params: { q: req.params.name }}).then(({ data }) => {

//     console.log(data.items);

//     res.json( data.items );
//   })
//     .catch(err => res.status(422).json(err));
// });

// Jerome's example
// router.get("/recipes", (req, res) => {
//   axios
//     .get("http://www.recipepuppy.com/api/", { params: req.query })
//     .then(({ data: { results } }) => res.json(results))
//     .catch(err => res.status(422).json(err));
// });

// Send every other request to the React app
// Define any API routes before this runs

router.get("/BART_DORITY_resume.pdf", (req, res) => {
  console.log("serving up the static pdf.");
  res.sendFile(path.join(__dirname, "../client/build/BART_DORITY_resume.pdf"));

});
router.get("*", (req, res) => {
  console.log("Got to the catch-all block of the router.");

  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


module.exports = router;
