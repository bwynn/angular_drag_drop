angular.module('ngDragDropApp', ['ui.router','dndLists', 'api.users', 'api.bikes', 'components.users'])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/users');
    });
