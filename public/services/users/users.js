angular.module('api.users', [])
    .factory('Users', ['$http', function($http) {
        var Users = {};

        Users.all = function() {
            return $http.get("/get_all_users").then(function(res) {
                return res.data;
            });
        };

        Users.findById = function(id) {
            return $http.post("/find_by_id", id).then(function(res) {
                return res.data;
            })
            .catch(function(res) {
                return res.data;
            });
        };

        return Users;
    }]);
