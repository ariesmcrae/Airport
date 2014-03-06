"use strict";

var express = require('express');

var airports = require('./data/airports.json');
var flights = require('./data/flights.json');
var reservations = [];


for (var i = 0; i < flights.length; i++) {
  flights[i].originFullName = airports[flights[i].origin].name;
  flights[i].destinationFullName = airports[flights[i].destination].name;
}



function getMatchingFlights (data) {
  return flights.filter(function  (item) {
    return (item.origin === data.origin) &&
      (item.destination === data.destination);
  });
}


var app = express();

//app.configure(function() {
app.use(express.static('public')); // set the static files location /public/img will be /img for users
//	app.use(express.logger('dev')); // log every request to the console
//	app.use(express.bodyParser()); // have the ability to pull information from html in POST
//	app.use(express.methodOverride()); // have the ability to simulate DELETE and PUT
//});



app.get('/airports', function  (req, res) {
  res.json(airports);
});



app.get('/airports/:airport', function (req, res) {
  if (typeof airports[req.params.airport] === 'undefined') {
    res.json(404, {status: 'not found - invalid airport code'});
  } else {
    res.json(airports[req.params.airport]);
  }
});



app.get('/flights', function (req, res) {
  res.json(flights);
});



app.get('/flights/:origin', function (req, res) {
  var with_origin = flights.filter(function  (item) {
    return item.origin === req.params.origin;
  });

  res.json(with_origin);
});



app.get('/flights/:origin/:destination', function (req, res) {
  var matches = getMatchingFlights(req.params);

  res.json(matches);
});



app.get('/reservations', function  (req, res) {
  res.json(reservations);
});



app.post('/reservations', function  (req, res) {
  var matches = getMatchingFlights(req.body);

  if (matches.length) {
    reservations.push(matches[0]);
    res.json(matches[0]);
  } else {
    res.status(404).end();
  }
});



app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});



app.listen(3000);
console.log("App started on http://localhost:3000");