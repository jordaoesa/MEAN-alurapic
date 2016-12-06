/**
 * Created by jordaoesa on 05/12/16.
 */

var app = angular.module('alurapic');

app.controller('FotoController', function ($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = "";

    $scope.submeter = function(){
        if($scope.formulario.$valid){
            $http.post('v1/fotos', $scope.foto)
                .success(function () {
                    console.log("foto cadastrada");
                    $scope.foto = {};
                    $scope.mensagem = "sucesso";

                }).error(function (err) {
                    console.log(err);
                    $scope.mensagem = "erro";
                });
        }
    };


});