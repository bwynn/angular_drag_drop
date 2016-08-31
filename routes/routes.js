"use strict";

const path = require('path');

module.exports = (app) => {
    const usersCtrl = require('../controllers/users_controller');

    app.get('/get_all_users', usersCtrl.getAllUsers);

    app.post('/find_by_id', usersCtrl.findById);

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};
