angular.module('ngDragDropApp', ['ui.router','dndLists', 'api.users', 'components.users'])
    .config(function($urlRouterProvider) {
        $urlRouterProvider.otherwise('/users');
    });
