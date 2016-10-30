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

    return Bikes;
  }]);
