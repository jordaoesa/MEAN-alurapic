/**
 * Created by jordaoesa on 04/12/16.
 */

var minhasDiretivas = angular.module('minhasDiretivas', []);

minhasDiretivas.directive('meuPainel', function () {
    var ddo = {}; // Directive Definition Object

    ddo.restrict = "AE"; // Attribute Element
    ddo.scope = {
        titulo: '@titulo'
    };
    ddo.transclude = true; // Usado caso a diretiva tenha q utilizar algum html extra la na pagina estatica
    ddo.templateUrl = "js/directives/meu-painel.html";


    return ddo;
});

// o nome da diretiva deve ser escrito em camel case
// a utilizacao da mesma deve utilizar hifen, por definicao
// <div meu-painel></div> Attribute
// <meu-painel titulo="Title"></meu-painel> Element