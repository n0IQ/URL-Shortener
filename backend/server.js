const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

// Connect Database
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully!");
  })
  .catch((err) => {
    console.log("Database Error 💥", err);
  });

// Start Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});
