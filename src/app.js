(function () {
  'use strict';

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'pages/home/homePage.html',
        controller: 'homePageController'
      })
      .state('climb', {
        url: '/climb/:climbId',
        templateUrl: 'pages/climb/climbPage.html',
        controller: 'climbPageController'
      });

    $urlRouterProvider.otherwise('/');
  }

  function run(StateListenerService, $rootScope) {
    StateListenerService.reportAll();

    $rootScope.$on('$stateChangeSuccess', function() {
      $('.collapsible').collapsible({ accordion: true });
    });
  }

  angular.module('cec', ['ui.router'])
    .config(config)
    .run(run);
})();