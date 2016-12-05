angular.module('ctrl.bikes', [])
  .controller('BikesController', ['$scope', 'Bikes', function($scope, Bikes) {
    $scope.hello = "Hello World!";
  }]);
