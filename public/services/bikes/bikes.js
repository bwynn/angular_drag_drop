angular.module('api.bikes', [])
  .factory('Bikes', ['$http', function($http) {
    var Bikes = {};

    Bikes.getAllBikes = function() {
      return $http.get('/get_bikes').then(function(res) {
        return res.data;
      });
    };

    Bikes.getBikeById = function(id) {
      return $http.post('/get_bike_by_id', id).then(function(res) {
        return res.data;
      });
    };

    Bikes.addBike = function(data) {
      return $http.post('/add_bike', data).then(function(res) {
        return res.data;
      });
    };

    Bikes.addBikeDetails = function(data) {
      return $http.put('/add_bike_details', data).then(function(res) {
        return res.data;
      });
    }; 

    return Bikes;
  }]);
