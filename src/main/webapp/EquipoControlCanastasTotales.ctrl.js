/**
 * Created by jhipster on 11/04/16.
 */
'use strict'
angular.module('ligaBaloncestoApp')
    .controller('vicCtrl2',function ($scope, $http, Jugador) {
        /*
        * ARCHIVOS CONFIGURADOS PARA EL Prac2Ej2.html
        *
        * JugadorRepository.java
        * JugadorResource.java
        * appExtra.js
        * jugador.service.js   --- consultarCanastas y EquipoconsultarCanastas
        * indexextra.html
        * EquipoControlCanastasTotales.ctrl.js
        *
        *ng-model scope controller
        *ng-change controller
        * */
        $http.get("api/equipos").then(function (response) {//enseña equipos
            $scope.equipos = response.data;
        });

        $scope.reloadPagina2 = function () { // scope.reloadPagina2 -- ng-change   scope.ponerCanastas2 -- ng-model
            if($scope.elegirEquipo == null) { //Si no tiene ningun equipo seleccionado
                Jugador.consultarCanastas({consultarCanastas: $scope.ponerCanastas2}, function (response) {
                    $scope.jugadores = response;
                })
            }else{
                //codigo equipo y canastas
                Jugador.EquipoconsultarCanastas({consultarCanastasos: $scope.ponerCanastas2, consultarEnEquipo: $scope.elegirEquipo}, function (response){
                    $scope.jugadores = response;
                })
            }
        };
        /**************************************************************/
        $scope.cargarPagina = function() {
            $scope.reloadPagina2();
        };

        $scope.filtrarPor = function (filtro) {
            $scope.filtracion = filtro;
        };
    });
