"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const BikeSchema = new Schema({
  brand: String,
  model: String,
  year: String,
  image: {type: Schema.Types.Mixed},
  price: Number,
  frameMaterial: String,
  fork: String,
  buildKit: String,
  geometry: [
    {
      size: String,
      wheelbase: Number,
      ttLength: Number, // top tube length
      htAngle: Number, // head tube angle
      stAngle: Number, // seat tube angle
      bbHeight: Number, // bottom bracket height
      soHeight: Number // standover height
    }
  ]
});

module.exports = mongoose.model('Bike', BikeSchema);
