const express = require('express');
const urlRouter = require('./routes/urlRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/', urlRouter);

module.exports = app;
