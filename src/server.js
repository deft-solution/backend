const express = require("express");
const morgan = require("morgan");
const { NotFoundError, HttpError, InternalServerError } = require("./core");
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

// Catch-all route for handling undefined routes
app.use((req, res, next) => {
  const err = new NotFoundError("Not found");
  next(err);
});

app.use((err, req, res, next) => {
  // Handle known exceptions
  if (err instanceof HttpError) {
    const httpError = err;
    return res.status(httpError.statusCode).json(httpError.toJSON());
  }

  // Handle unknown exceptions
  if (err instanceof Error) {
    const errorMessage = `Uncaught Exception: ${err.message}`;

    const error = new InternalServerError(errorMessage, 500);
    // Send an appropriate status code and error message back to the client
    return res.status(500).json(error.toJSON());
  }
});

app.listen(app.get("port"), () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env"),
  );
  console.log("Press CTRL-C to stop\n");
});
