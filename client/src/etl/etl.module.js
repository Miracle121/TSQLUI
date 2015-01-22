var etl = angular.module('etl', ['ngRoute', 'angularUtils.directives.dirPagination', 'etl.startScreen', 'etl.newProject']);

etl.config(function ($routeProvider) {
    $routeProvider
        .when('/newProject', {
            templateUrl: '../modules/newProject/newProject.html',
            controller: 'TabController'
        })
        .when('/projectList', {
            templateUrl: 'projectList.html',
            controller: 'IndexController'
        })
        .when('/project/:projectId', {
            templateUrl: 'home.html',
            controller: 'IndexController'
        })
        .when('/selectionTable', {
            templateUrl: '../modules/newProject/views/tableChoose.html',
            controller: 'SelectionCtrl'
        })
        .when('/config', {
            templateUrl: '../newProject/views/dataConfiguration.html',
            controller: 'configuration'
        })
        .otherwise({
            redirectTo: '/projectList'
        });
});
