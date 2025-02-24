const mongoose = require('mongoose');
require('dotenv').config(); // 🌱 Load environment variables from .env

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // 🚀 Connecting to MongoDB
        console.log('✅ MongoDB connected'); // 🎉 Success message
    } catch (error) {
        console.error('❌ MongoDB connection error:', error); // ⚠️ Error message
        process.exit(1); // 🛑 Exit the process on failure
    }
};

module.exports = connectDB; // 📦 Export the connection function
