require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

// Routes
app.use("/api/tasks", taskRoutes);

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
app.get("/", (req, res) => {
  res.send(" TaskTracker API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
