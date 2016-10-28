angular.module('ngDragDropApp', ['ui.router','dndLists', 'api.users', 'api.bikes', 'components.users', 'components.bikes'])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/bikes');
    });
