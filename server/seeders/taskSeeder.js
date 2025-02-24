const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("../config/db.js");
const Task = require("../models/Task.js");

dotenv.config();
connectDB();

// Generate 100 tasks dynamically
const tasks = Array.from({ length: 100 }, (_, i) => ({
  name: `Task ${i + 1}`,
  value: Math.floor(Math.random() * 50) + 10,
  profit: Math.floor(Math.random() * 10) + 1,
  link: `https://example.com/task${i + 1}`,
  tie: Math.random() < 0.5, // Randomly assigns true or false
}));


const seedDB = async () => {
  try {
    await Task.deleteMany(); // Remove old tasks
    await Task.insertMany(tasks); // Insert new tasks
    console.log("✅ 100 Tasks Seeded Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error Seeding Tasks:", error);
    process.exit(1);
  }
};

seedDB();
