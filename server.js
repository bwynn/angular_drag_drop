"use strict";

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      mongoose = require('mongoose');

const port = 8080;
const db = require('./config/db');

mongoose.connect(db.db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

require('./routes/routes')(app);
require('./routes/bike_routes')(app);

app.listen(port);

console.log("Connected on port " + port);

exports = module.exports = app;
