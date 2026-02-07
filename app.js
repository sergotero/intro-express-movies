import express from "express";
import morgan from "morgan";
import Movie from "./movies.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

// 1. GET /movies - Retrieve a list of all movies.

// 2. GET /movies/:id - Retrieve a single movie by its ID.

// 3. POST /movies - Create a new movie using JSON body

// 4. PATCH /movies/:id - Update an existing movie by its ID using JSON body

// 5. DELETE /movies/:id - Delete a movie by its ID.

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
