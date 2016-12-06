/**
 * Created by jordaoesa on 04/12/16.
 */


var app = angular.module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute']);
app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({ redirectTo : '/fotos'});

    $routeProvider.when('/fotos', {
        templateUrl: 'partials/principal.html',
        controller: 'FotosController'
    });
    $routeProvider.when('/fotos/new', {
        templateUrl: 'partials/foto.html',
        controller: 'FotoController'
    });
});