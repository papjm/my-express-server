//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.send("<h1>My name is davinci</h1>")
});

app.get("/contact", function(req, res) {
  res.send("My sahkajhska")
})

app.listen(3000, function() {
  console.log("Server started on port 3000")
});
