//import axios for making http requests
const axios = require("axios");
//base url for OMDb api
const OMDb_BASE_URL = "http://www.omdbapi.com/";
//retrieve api key from environmental variables
const API_KEY = process.env.OMDB_API_KEY;

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
  } catch (error) {
    //log the error message to the server console for debugging purposes
    console.error("Error in Fetching Movies:", error.message);
    res.status(500).json({ error: "Failed to fetch movies from OMDb" });
  }
};
