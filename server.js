const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // Ensure this path is correct
const inviteRoutes = require('./routes/inviteRoutes');

const app = express();
const PORT = 5000; // Set your port number here
const MONGODB_URI = 'mongodb://localhost:27017/inviteDB'; // Set your MongoDB URI here

// Connect to MongoDB
connectDB(MONGODB_URI);

app.use(cors());
app.use(bodyParser.json());

// Use the invite routes
app.use('/api/invite', inviteRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'An internal server error occurred.' });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Shutting down gracefully...');
    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
