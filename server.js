// Setting up Express
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Connecting DB
const db = require('./database/db');

// Connecting Routes
const postsRoutes = require('./routes/api/Posts');

// User routes - POST
app.use('/api/posts', postsRoutes);
 
// Connecting Port
const port = 80;
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));