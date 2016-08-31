"use strict";

const userList = [
    {
        id: "1",
        name: "Brian",
        age: "32",
        languages: [
            "JavaScript",
            "CSS",
            "HTML5"
        ],
        location: "Los Gatos"
    },
    {
        id: "2",
        name: "Grant",
        age: "32",
        languages: [
            "Spanish",
            "Italian"
        ],
        location: "Ventura"
    }
];

const Users = require('../models/user_model');

// /get_all_users - GET
exports.getAllUsers = (req, res) => {
    Users.find().then((err, users) => {
        if (err) {
            res.send(err);
        }

        res.json(users);
    });
};

exports.findById = (req, res) => {
    Users.findOne({id: req.body.id}, (err, user) => {
        if (err) {
            res.send(err);
        }

        res.json(user);
    });
};
