import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/product.routes.js";
import videoModel from "./Model/product.model.js";
import cors from "cors";
const app = new express();
app.use(cors());
app.use(express.json());

app.listen(4000, () => {
  console.log("Server running on port 3000");
});

mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection; // Accessing the database connection object
db.on("open", () => {
  // Listening for successful connection event
  console.log("Database connection successfull....");
});
db.on("error", () => {
  // Handling connection errors
  console.log("Database Connection Error....");
});
routes(app); // Registering routes

export async function fetchVideos(req, res) {
  try {
    const videos = await videoModel.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch videos...",
      error: error.message,
    });
  }
}

const userSchema = new mongoose.Schema({
  username: String,
  userhandle: String,
});
const User = mongoose.model("User", userSchema);
app.post("/saveUserData", async (req, res) => {
  try {
    const { username, userhandle } = req.body;
    const newUser = new User({ username, userhandle });
    await newUser.save();
    res.status(201).send("User data saved successfully!");
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error saving user data", error: error.message });
  }
});

export async function fetchUserData(req, res) {
  try {
    const userDatas = await User.find();
    res.status(200).json(userDatas);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch user data...",
      error: error.message,
    });
  }
}
