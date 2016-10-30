"use strict";

module.exports = (app) => {

  const bikeCtrl = require('../controllers/bike_controller');

  // get bikes
  app.get('/get_bikes', bikeCtrl.getBikes);

  // get bike
  app.get('/bike_by_id', bikeCtrl.getBikeById); 

  // add bike
  app.post('/add_bike', bikeCtrl.addBike);

  // update bike details
  app.put('/add_bike_details', bikeCtrl.addBikeDetails);

  // update bike
  app.put('/update_bike', bikeCtrl.updateBike);

  // remove bike
  app.put('/remove_bike', bikeCtrl.removeBike);
};
