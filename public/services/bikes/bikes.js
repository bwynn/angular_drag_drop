angular.module('api.bikes', [])
  .factory('Bikes', ['$http', function($http) {
    var Bikes = {};

    Bikes.getAllBikes = function() {
      return $http.get('/get_bikes').then(function(res) {
        return res.data;
      });
    }; 

    return Bikes;
  }]);
