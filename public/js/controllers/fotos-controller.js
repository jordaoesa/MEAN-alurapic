/**
 * Created by jordaoesa on 04/12/16.
 */

var app = angular.module('alurapic');

app.controller('FotosController', function ($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = "";

    $http.get('v1/fotos')
        .success(function (result) {
            $scope.fotos = result;
        }).error(function (err) {
            console.log(err);
        });





    // $scope.fotos = [
    //     {
    //         url : "http://pngimg.com/upload/audi_PNG1736.png",
    //         titulo : "Red Car"
    //     },
    //     {
    //         url : "http://media.caranddriver.com/images/media/51/25-cars-worth-waiting-for-lp-ford-gt-photo-658253-s-original.jpg",
    //         titulo : "Blue Car"
    //     },
    //     {
    //         url : "https://static.pexels.com/photos/24353/pexels-photo.jpg",
    //         titulo : "White Car"
    //     }
    // ];
});