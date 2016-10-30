angular.module('components.bikes', [])
  .controller('BikesController', ['$scope','Bikes', function($scope, Bikes) {
    $scope.hello = "Hello World!";
  }]).config(function($stateProvider) {
    $stateProvider
      .state('bikes', {
        url: '/bikes',
        templateUrl: 'components/bikes/bikes.html',
        controller: 'BikesController as bc'
      });
  });
