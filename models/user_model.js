"use strict";

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: Number,
    name: String,
    age: String,
    location: String,
    languages: [String]
});

module.exports = mongoose.model('User', UserSchema);
