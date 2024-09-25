// config/db.js
const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true, // Optional for older versions of MongoDB
            useUnifiedTopology: true, // Optional for older versions of MongoDB
            useFindAndModify: false, // Disable findAndModify deprecation warning
            useCreateIndex: true // Ensure indexes are created
        });
        console.log('MongoDB connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = connectDB;
