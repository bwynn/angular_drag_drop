angular.module('components.users', [])
    .controller('UsersController', ['$scope', 'Users', function($scope, Users) {

        Users.all().then(function(data) {

          $scope.users = data;

          console.log($scope.users);
        });

    }]);
