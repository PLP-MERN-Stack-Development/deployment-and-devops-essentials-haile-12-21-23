const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  } finally {
    res.status(200).json(tasks);
  }
});

//   Add a new task
router.post("/", async (req, res) => {
  try {
    if (!req.body.title) {
      return res.status(400).json({ message: "Title is required" });
    }
    const newTask = await Task.create({
      title: req.body.title,
      completed: req.body.completed || false,
    });
    res.status(200).json(newTask);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
