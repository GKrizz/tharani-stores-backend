// config/db.js
const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/tharani_db"; // Your MongoDB URL

mongoose.connect(mongoURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection
  .once("open", () => console.log("MongoDB connection established successfully"))
  .on("error", (err) => console.log("MongoDB connection error:", err));

module.exports = connection;
