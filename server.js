require('dotenv').config(); // Load environment variables

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db'); // Ensure this path is correct
const inviteRoutes = require('./routes/inviteRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // Set your port number here
const MONGODB_URI = process.env.MONGODB_URI; // Load MongoDB URI from .env

// Connect to MongoDB
connectDB(MONGODB_URI);

// CORS options
const corsOptions = {
    origin: 'https://66f3a451de5df2cc33fc67b4--newregisteration.netlify.app', // Your Netlify app URL
    optionsSuccessStatus: 200 // For legacy browser support
};

// Middleware
app.use(cors(corsOptions)); // Use CORS middleware
app.use(helmet()); // Add security headers
app.use(morgan('dev')); // Log HTTP requests
app.use(bodyParser.json()); // Parse incoming JSON requests

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Use the invite routes
app.use('/api/invite', inviteRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(err.status || 500).json({ message: 'An internal server error occurred.', error: err.message }); // Send error message to client
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Shutting down gracefully...');
    process.exit(0);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
