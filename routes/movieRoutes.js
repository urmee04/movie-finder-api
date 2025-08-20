//import express to create a router
const express = require("express");
//create a new router instance
const router = express.Router();
//import controller functions
const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

//GET /search to handle movie searches by title

router.get("/search", searchMovies);

//GET /movies/:id to fetch details for a specific movie

router.get("/movies/:id", getMovieDetails);

// Export the router for server.js
module.exports = router;
