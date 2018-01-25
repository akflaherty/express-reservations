// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 
var tables = [{
    "customerName": "John Smith",
    "phoneNumber": "330-612-3333",
    "customerEmail": "john@hotmail.com",
    "customerID": "johnyjohn"
}, {
    "customerName": "Ian",
    "phoneNumber": "5555555555",
    "customerEmail": "me@me.com",
    "customerID": "password"
}];

var waitlist = [{
    "customerName": "John Smith",
    "phoneNumber": "330-612-3333",
    "customerEmail": "john@hotmail.com",
    "customerID": "johnyjohn"
}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// add reservation
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});


// tables API
app.get("/api/tables", function(req, res) {
    res.json(tables);
});

// waitlist API
app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newReservation);
  tables.push(newReservation);
  res.json(newReservation);
});

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});