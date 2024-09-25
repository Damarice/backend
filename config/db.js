// config/db.js
const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true, // Optional for older versions of MongoDB
            useUnifiedTopology: true // Optional for older versions of MongoDB
        });
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
