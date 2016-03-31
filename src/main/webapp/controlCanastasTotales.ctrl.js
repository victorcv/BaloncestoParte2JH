/**
 * Created by jhipster on 29/03/16.
 */

'use strict'
angular.module('ligaBaloncestoApp')
    .controller('VicCtrl',function ($scope, $http) {
       //$http.get("api/jugadorsURL/70000").then(function(response){$scope.jugadores=response.data;});// response es response.data(la respuesta de la peticion)
        // peticion get a la url del request maping(en el JugadorResource). la respuesta de la funcion la guardamos en el scope de jugadores para hacer el ng.repeat
        //$scope.jugadores hace referencia al model jugadores(lo hemos llamado asi)
        $scope.reloadPagina = function (){
            $http.get("api/jugadorsURL/"+$scope.ponerCanastas).then(function(response){
                $scope.jugadores=response.data;
            });
        }

        $scope.filtrarPor = function (filtro) {
            $scope.filtracion = filtro;
        };
    });
