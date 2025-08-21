//load environment variables from .env file
require("dotenv").config();

//import dependencies
const express = require("express");

//import movie routes
const movieRoutes = require("./routes/movieRoutes");

//create an Express application instance
const app = express();

//------------------------------------------------//
//mount movie routes with /api prefix
//------------------------------------------------//
app.use("/api", movieRoutes);

//define the port (default to 3001 if not in environment variables)
const PORT = process.env.PORT || 3001;

//start the server and listen on defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
