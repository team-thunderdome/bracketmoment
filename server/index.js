import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Score } from "./models/scoreModel.js";
import cors from "cors";

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware to enable CORS
// app.use(cors()); try this if the below code doesn't work
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this client URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Express.js route handler for the root of the server
// Takes URL path and a callback function as arguments
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("typeerror");
});

// Route to POST a new player score
app.post("/scores", async (request, response) => {
  try {
    if (!request.body.name || !request.body.score) {
      return response
        .status(400)
        .send({ message: "Name and score are required fields" });
    }
    // Create a new score object
    const newScore = {
      name: request.body.name,
      score: request.body.score,
    };
    // Send the score object to the database
    const score = await Score.create(newScore);
    return response.status(201).send(score);
  } catch (error) {
    // Respond with an error message
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

// Route to GET all scores from database
app.get("/scores", async (request, response) => {
  try {
    // Get all scores from the database
    const scores = await Score.find({});
    return response.status(200).json(scores);
  } catch (error) {
    // Respond with an error message
    console.log(error.message);
    return response.status(500).send({ message: error.message });
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    // Test connection running on correct port
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  // Catch errors and log them to the console
  .catch((error) => {
    console.error(error);
  });
