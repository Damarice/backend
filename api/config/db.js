const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        // Remove deprecated options
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
