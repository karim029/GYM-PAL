const express = require("express");
const connectDB = require("./config/db");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();
// express app
const app = express();

//global middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

// connect to the db
connectDB();
//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

process.env;

module.exports = app;
