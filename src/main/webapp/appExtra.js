
angular.module('ligaBaloncestoApp')
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('ej15', {
                url: '/ej15',
                data: {
                    pageTitle: 'Ej15'
                },
                views: {
                    'content@': {
                        templateUrl: 'ej15-extra.html',
                        controller: 'creacionJugadorCtrl'
                    }
                }
            })
            .state('ej16', {
                url: '/ej16',
                data: {
                    pageTitle: 'Ej16'
                },
                views: {
                    'content@': {
                        templateUrl: 'ej16-extra.html',
                        controller: 'creacionEquipoCtrl'
                    }
                }
            })
            .state('ej17', {
                url: '/ej17',
                data: {
                    pageTitle: 'Ej17'
                },
                views: {
                    'content@': {
                        templateUrl: 'ej17-extra.html',
                        controller: 'modificacionCtrl'
                    }
                }
            })
            .state('ej14', {
                url: '/ej14',
                data: {
                    pageTitle: 'Ej14'
                },
                views: {
                    'content@': {
                        templateUrl: 'ej14-extra.html',
                        controller: 'jugadorCtrl'
                    }
                }
            })

    });
