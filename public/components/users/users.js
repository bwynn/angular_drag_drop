angular.module('components.users', [])
    .controller('UsersController', ['Users', function(Users) {
        var vm = this;

        Users.all().then(function(data) {
            vm.users = data;
        });

    }])
    .config(function($stateProvider) {
        $stateProvider
            .state('users', {
                url: '/users',
                templateUrl: 'components/users/users.html',
                controller: 'UsersController as uc'
            });
    });
