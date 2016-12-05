/**
 * Created by jordaoesa on 04/12/16.
 */

var app = angular.module('alurapic');
app.controller('FotoController', function ($scope) {
    $scope.foto = {
        url : "http://pngimg.com/upload/audi_PNG1736.png",
        desc : "Car"
    };
});