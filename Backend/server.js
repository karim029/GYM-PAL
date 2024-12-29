const express = require("express");
require("dotenv").config();
// express app
const app = express();

//global middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
// setup route
app.get("/", (req, res) => {
  res.json({ message: "welcome to the App" });
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});

process.env;
