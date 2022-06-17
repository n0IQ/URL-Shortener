const express = require('express');
const cors = require('cors');
const urlRouter = require('./routes/urlRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/', urlRouter);

module.exports = app;
