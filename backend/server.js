require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {});
        console.log("CONNECTED TO DATABASE SUCCESSFULLY");
    } catch (error) {
        console.error('COULD NOT CONNECT TO DATABASE:', error.message);
    }
};

// Schema and Model
const locationSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
});
const Location = mongoose.model("Location", locationSchema);

// Routes
app.post("/api/location", async (req, res) => {
  try {
    const { location } = req.body;
    const newLocation = new Location(location);
    await newLocation.save();
    res.status(200).send("Location saved successfully!");
  } catch (error) {
    res.status(500).send("Error saving location.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));