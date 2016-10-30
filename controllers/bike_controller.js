"use strict";

const Bike = require('../models/bike_model');

// Bike Controllers

// get_bikes
exports.getBikes = (req, res) => {
  Bike.find().then((err, user) => {
    if (err) res.send(err);

    res.json(user);
  });
};

// getBikeById
exports.getBikeById = (req, res) => {
  Bike.findOne({_id: req.body.id}, (err, bike) => {
    if (err) res.send(err);

    res.json(bike);
  });
};

// add_bike
exports.addBike = (req, res) => {

  var bike = new Bike();
  bike.brand = req.body.brand;
  bike.model = req.body.model;
  bike.year = req.body.year;
  bike.image = req.body.image;
  bike.price = req.body.price;
  bike.fork = req.body.fork;
  bike.buildKit = req.body.kit;

  bike.save((err, bike) => {
    if (err) res.send(err);

    res.json(bike);
  });
};

// add_bike_details
exports.addBikeDetails = (req, res) => {
  Bike.update({_id: req.body.id}, {
    $push: {geometry: {
      size: req.body.size,
      wheelbase: req.body.wheelbase,
      ttLength: req.body.ttLength,
      htAngle: req.body.htAngle,
      stAngle: req.body.stAngle,
      bbHeight: req.body.bbHeight,
      soHeight: req.body.soHeight
    }}
  }, (err, bike) => {
    if (err) res.send(err);

    res.json(bike);
  });
};

// update_bike
exports.updateBike = (req, res) => {
  Bike.find({brand: req.body.brand}, (err, bike) => {
    Bike.update({_id: req.body.id}, {
      model: req.body.model,
      year: req.body.year,
      image: req.body.image,
      price: req.body.price,
      fork: req.body.fork,
      buildKit: req.body.kit
    }, (err, bike) => {
      if (err) res.send(err);

      res.json(bike);
    });
  });
};

// delete bike
exports.removeBike = (req, res) => {
  Bike.find({brand: req.body.brand}, (err, bike) => {
    Bike.remove({_id: req.body.id}, (err, bike) => {
      if (err) res.send(err);

      res.json({message: "Bike successfully removed"});
    });
  });
};
