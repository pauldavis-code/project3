// EXPRESS ========

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// MONGOOSE ========

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/marvel");


// Send every request to the React app
// Define any API routes before this runs
const routes = require("./routes")
app.use(routes);

// CONNECT
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});