### SBA 12: Build a RESTful Server

A RESTful API server that fetches movie information from the OMDb (Open Movie Database) API and provides cleaned-up, relevant data to front-end applications

---

#### Features

- Search movies by title
- Get detailed information about specific movies by IMDb ID
- Secure configuration management using environment variables
- Proper error handling and validation
- RESTful architecture with intuitive endpoints

---

#### API Endpoints

**Search Movies**

- GET /search?title={movie_title}
- Searches for movies by title
- Returns a list of matching movies

**Get Movie Details**

- GET /movies/:id
- Fetches detailed information about a specific movie
- Requires a valid IMDb ID (e.g., tt1285016)

**Test endpoints using a tool like Postman or by visiting the URLs in browser**

- http://localhost:3000/api/search?title=batman
- http://localhost:3000/api/movies/tt0372784
---
#### Project Structure

```bash
movie-finder-api/
.
├── controllers/
│   └── movieController.js # Controller logic: searchMovies & getMovieDetails
│
├── routes/
│   └── movieRoutes.js # Defines routes for searching and fetching movie details
│
├── server.js # Entry point: sets up Express server and mounts routes
│
├── .env # Environment variables (PORT, OMDB_API_KEY)
├── package.json # Project dependencies and scripts
├── package-lock.json # Dependency lock file
└── README.md # Project documentation

```

---

#### Installation & Setup

1. Clone the repository:
   ```bash
    git clone https://github.com/urmee04/movie-finder-api.git
    cd movie-finder-api
   ```
2. Install dependencies:

   `npm install`

3. Get an API key from [OMDb API](https://www.omdbapi.com/apikey.aspx) (free plan available)

4. Create a .env file in the root directory and add your API key:
   `OMDB_API_KEY=your_actual_api_key_here`

5. Start the server:

   `npm start`

6. The server will run on http://localhost:3000

---

#### Dependencies

- express: Web framework for Node.js
- axios: HTTP client for making requests to OMDb API
- dotenv: Loads environment variables from .env file

---

#### References

To complete the SBA, I primarily used the code examples from the lessons and also consulted the following resources to understand the process flow.

- [express router](https://expressjs.com/en/guide/routing.html#express-router)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [config](https://12factor.net/config)
