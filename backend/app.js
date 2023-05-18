const express = require("express");
const cors = require("cors");
const urlRouter = require("./routes/urlRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Server is up and working fine!!!");
});
app.use("https://url-shortener-bc6q-f50bic5eo-n0iq.vercel.app/url", urlRouter);

module.exports = app;
