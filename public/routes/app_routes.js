angular.module('appRoutes', [])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $routeProvider
      .when('/', {
        templateUrl: 'components/bikes/bikes.html',
        controller: 'BikesController'
      })
      .when('/bikes', {
        templateUrl: 'components/bikes/bikes.html',
        controller: 'BikesController'
      })
      .when('/users', {
        templateUrl: 'components/users/users.html',
        controller: 'UsersController'
      })
      .otherwise('/', {
        templateUrl: 'components/bikes/bikes.html',
        controller: 'BikesController'
      });
  }]);
