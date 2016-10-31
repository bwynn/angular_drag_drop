angular.module('api.bikes', [])
  .factory('Bikes', ['$http', function($http) {
    var Bikes = {};

    Bikes.getAllBikes = function() {
      return $http.get('/get_bikes').then(function(res) {
        return res.data;
      });
    };

    Bikes.getBikeById = function(id) {
      if (!id) {
        throw (Error("No parameters passed in."));
      }
      return $http.post('/get_bike_by_id', id).then(function(res) {
        return res.data;
      });
    };

    Bikes.addBike = function(data) {
      if (!data) {
        throw (Error("Parameters missing."));
      }
      return $http.post('/add_bike', data).then(function(res) {
        return res.data;
      });
    };

    Bikes.addBikeDetails = function(data) {
      // throw error if bike id isn't passed in
      if (!data._id) {
        throw (Error("Parameters are missing id value"));
      }
      return $http.put('/add_bike_details', data).then(function(res) {
        return res.data;
      });
    };

    return Bikes;
  }]);
