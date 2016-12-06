/**
 * Created by jordaoesa on 05/12/16.
 */

var app = angular.module('alurapic');

app.controller('FotoController', function ($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = "";

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId).success(function (foto) {
            $scope.foto = foto;
        }).error(function (err) {
            console.log(err);
            $scope.mensagem = "foto nao encontrada";
        });
    }

    $scope.submeter = function(){
        if($scope.formulario.$valid){

            if($scope.foto._id){
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto).success(function () {
                    $scope.mensagem = "foto editada com sucesso";
                }).error(function (err) {
                    console.log(err);
                    $scope.mensagem = "foto nao alterada";
                });
            } else {
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
        }
    };


});