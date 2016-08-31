angular.module('api.users', [])
    .factory('Users', ['$http', function($http) {
        var Users = {};

        // hard coded array of users
        var userList = [
            {
                id: "1",
                name: "Brian",
                age: "32",
                languages: [
                    "JavaScript",
                    "CSS",
                    "HTML5"
                ],
                location: "Los Gatos"
            },
            {
                id: "2",
                name: "Grant",
                age: "32",
                languages: [
                    "Spanish",
                    "Italian"
                ],
                location: "Ventura"
            }
        ];

        Users.all = function() {
            return userList;
            // defer to below when $httpBackend has been incorporated into unit test
            /*return $http.get("/get_all_users").then(function(res) {
                return res.data;
            });*/
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
