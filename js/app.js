var guitarToolsApp;
guitarToolsApp = angular.module('guitarToolsApp', ['ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/learnFretboard.html',
                controller: 'LearnFretboardCtrl'
            })
            .when('/nameThatFret', {
                templateUrl: 'views/nameThatFret.html',
                controller: 'NameThatFretCtrl'
            })
            .otherwise('/');
    });
