const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/attendanceDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// Define Schema
const attendanceSchema = new mongoose.Schema({
  user: String,
  status: { type: String, enum: ["Present", "Absent"], default: "Present" },
  timestamp: { type: Date, default: Date.now },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

// API to mark attendance
app.post("/attendance", async (req, res) => {
  try {
    const { user } = req.body;
    
    if (!user) {
      return res.status(400).json({ error: "User name is required" });
    }

    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const existingRecord = await Attendance.findOne({
      user,
      timestamp: { $gte: startOfDay, $lte: endOfDay }
    });

    if (existingRecord) {
      return res.status(400).json({ error: "You have already marked attendance today" });
    }

    const newAttendance = new Attendance({ user, status: "Present" });
    await newAttendance.save();
    res.status(201).json(newAttendance);
  } catch (error) {
    res.status(500).json({ error: "Error marking attendance" });
  }
});

// API to get attendance records
app.get("/attendance", async (req, res) => {
  try {
    const records = await Attendance.find();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: "Error fetching attendance records" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
