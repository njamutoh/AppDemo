// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Set up a basic route
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to my Node.js project!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
