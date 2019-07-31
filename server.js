// EXPRESS ========
const express = require("express");
const routes = require("./routes");

const app = express();
const PORT = 3001;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//sent to routes
app.use(routes)

app.listen(PORT, function() {
  console.log("Listening on port " + PORT)
})
