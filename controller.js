angular.module('MainCtrl', [])
    .controller('mainController', ['$scope', function($scope) {

        // items to select from
        $scope.items = [
            {title: "Affinity.Exe", "color": "green"},
            {title: "Initiate", "color": "purple"},
            {title: "1985", "color": "yellow"},
            {title: "Lapse", "color": "red"},
            {title: "The Architect", "color": "brown"},
            {title: "Earthrise", "color": "blue"},
            {title: "Red Giant", "color": "grey"},
            {title: "The Endless Knot", "color": "tomato"},
            {title: "Bound by Gravity", "color": "steelblue"}
        ];

        // newItems array to hold selected objects
        $scope.newItems = [];

        // called with the onDrop method
        $scope.finished = function() {
            console.log($scope.newItems);
        };

    }]);
