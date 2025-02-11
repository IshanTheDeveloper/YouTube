import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import { User, comment, channel, videoModel } from "./Model/product.model.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017");

const db = mongoose.connection;
db.on("open", () => console.log("Database connection successful..."));
db.on("error", () => console.log("Database connection error..."));

app.listen(4000, () => console.log("Server running on port 4000"));

//-------------------------------------------------------------------------------------------------------

app.post("/saveComment", async (req, res) => {
  const { commentData } = req.body;

  if (!commentData) {
    return res.status(400).json({ message: "Comment data is required." });
  }

  try {
    const newComment = new comment({ commentData });
    await newComment.save();
    res.status(201).json({ message: "Comment added successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error adding comment", error: error.message });
  }
});

//-------------------------------------------------------------------------------------------------------

// Save channel data
app.post("/saveChannelData", async (req, res) => {
  const { username, userhandle } = req.body;

  if (!username || !userhandle) {
    return res.status(400).json({ message: "Name and handle are required." });
  }

  try {
    const existingChannel = await channel.findOne({ userhandle });
    if (existingChannel) {
      return res.status(409).json({ message: "Handle already exists." });
    }

    const newChannel = new channel({ username, userhandle });
    await newChannel.save();
    res.status(201).json({ message: "Channel created successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving channel", error: error.message });
  }
});

app.post("/generateToken", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .send({ message: "Email required to generate a token." });
  }
  const accessToken = jwt.sign({ email }, "secretKey", { expiresIn: "1h" });
  res
    .status(200)
    .send({ token: accessToken, message: "Token generated successfully!" });
});

//-------------------------------------------------------------------------------------------------------

// Save User Registration Information
app.post("/saveUserInformation", authenticateUser, async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists." });
    }

    const newRegisteredUser = new User({
      firstname,
      lastname,
      email,
      password,
    });

    await newRegisteredUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error saving user data", error: error.message });
  }
});

//------------------------------------------------------------------------------------------------------

// Token Authentication Middleware
function authenticateUser(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send({ message: "Token required" });

  jwt.verify(token, "secretKey", (err, payload) => {
    if (err) return res.status(403).send({ message: "Invalid JWT token" });
    req.payload = payload;
    next();
  });
}

//-------------------------------------------------------------------------------------------------------

app.get("/userData", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to fetch videos...", error: error.message });
  }
});

//-------------------------------------------------------------------------------------------------------

app.get("/commentsData", async (req, res) => {
  try {
    const comments = await comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to fetch videos...", error: error.message });
  }
});

//-------------------------------------------------------------------------------------------------------

app.get("/channelData", async (req, res) => {
  try {
    const channels = await channel.find();
    res.status(200).json(channels);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to fetch videos...", error: error.message });
  }
});

//-------------------------------------------------------------------------------------------------------

// Fetch Videos Handler
app.get("/videos", async (req, res) => {
  try {
    const videos = await videoModel.find();
    res.status(200).json(videos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Unable to fetch videos...", error: error.message });
  }
});

//-------------------------------------------------------------------------------------------------------
