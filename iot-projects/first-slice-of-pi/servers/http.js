var sensorRoutes = require("./../routes/sensors");

const express = require("express"),
  cors = require("cors");

  var actuatorRoutes = require('./../routes/actuators');
var app = express();
app.use(cors());
app.use("/pi/sensors", sensorRoutes);
app.use('/leds/sensors', sensorRoutes);

app.get("/", function (req, res) {
  res.send("Some response for accessing the root");
});

app.get("/pi", function (req, res) {
  res.send("pi accessed");
});
module.exports = app;

//i have looked through all files//
