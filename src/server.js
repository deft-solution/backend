const express = require("express");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

app.set("port", process.env.PORT || 3000);

// Serve static files from the 'public' folder
app.use(express.static("public"));

// Middleware to parse JSON and URLENCODED bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use Morgan for logging
app.use(morgan("dev"));

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env"),
  );
  console.log("Press CTRL-C to stop\n");
});
