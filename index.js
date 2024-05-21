// Import express
const express = require('express');

// Import route
const router = require('./Router/route');

// Import cors
const cors = require('cors');

// Import db connection
const db = require('./DB/connection');

// Create a backend server using express
const pfServer = express();

// Use cors middleware
pfServer.use(cors());

// Returns middleware that only parses JSON
pfServer.use(express.json());

// Use router
pfServer.use(router);

// Serve static files from the 'uploads' directory
pfServer.use('/uploads', express.static('./uploads'));

// Define the port
const PORT = 4001;

// Root route
pfServer.get("/", (req, res) => {
    res.send('<h1>Server is started</h1>');
});

// Error handling middleware
pfServer.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server listen
pfServer.listen(PORT, () => {
    console.log('Listening on port ' + PORT);
});
