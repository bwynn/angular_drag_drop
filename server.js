"use strict";

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      morgan = require('morgan');

const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

require('./routes/routes');

app.listen(port);

console.log("Connected on port " + port);

exports = module.exports = app;
