'use strict';

angular.module('ligaBaloncestoApp')
    .controller('EquipoDetailController', function ($scope, $rootScope, $stateParams, entity, maxCanastasJugador, Equipo, Jugador, Estadio, Socio, Entrenador, Temporada) {
        $scope.equipo = entity;
        $scope.maxCanastasJugador = maxCanastasJugador;
        $scope.load = function (id) {
            Equipo.get({id: id}, function(result) {
                $scope.equipo = result;
            });
            Equipo.maxCanastasJugador({id: id}, function(result) {
                $scope.maxCanastasJugador = result;
            });
        };
        var unsubscribe = $rootScope.$on('ligaBaloncestoApp:equipoUpdate', function(event, result) {
            $scope.equipo = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
