//import axios for making http requests
const axios = require("axios");
//base url for OMDb api
const OMDB_BASE_URL = "http://www.omdbapi.com/";
//retrieve api key from environmental variables
const OMDB_API_KEY = process.env.OMDB_API_KEY;

// ----------------------------------------//
//serach movies by title
//------------------------------------------//
const searchMovies = async (req, res) => {
  //extract the title query parameter from the request
  const { title } = req.query;

  //validate if the title query parameter is missing
  if (!title) {
    return res.status(400).json({ error: "Title query parameter is required" });
  }

  try {
    //make a GET request to the OMDb API using axios
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        s: title, //'s'-search query parameter in OMDB
        apikey: OMDB_API_KEY, //api key from environment variables
      },
    });
    //send the data back to the client
    res.json(response.data);
  } catch (error) {
    //log the error message to the server console for debugging purposes
    console.error("Error in Fetching Movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movies from OMDb" });
  }
};

// ----------------------------------------//
//get movie details by IMDb ID
//------------------------------------------//

const getMovieDetails = async (req, res) => {
  //extract the id parameter from the request url
  const { id } = req.params;
  try {
    const response = await axios.get(OMDB_BASE_URL, {
      params: {
        i: id, //i is the id parameter in OMDB
        apikey: OMDB_API_KEY, //api key from environmental variables
      },
    });
    //send the detailed movie data returned from omdb api to client
    res.json(response.data);
  } catch (error) {
    console.error("Error Fetching Movie Details:", error.message);
    res.status(500).json({ error: "Failed to fetch movie details from OMDb" });
  }
};

//export the controller functions so they can be used in routes
module.exports = {
  searchMovies,
  getMovieDetails,
};
