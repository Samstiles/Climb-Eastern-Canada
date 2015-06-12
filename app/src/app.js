(function () {
  'use strict';

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      })
      .state('climb', {
        url: '/climb/:climbId',
        templateUrl: 'templates/climb.html',
        controller: 'climbController'
      });

    $urlRouterProvider.otherwise('/');
  }

  function run(StateListener, BreadcrumbService) {
    StateListener.reportStateChangeErrors();
    BreadcrumbService.listenForRouteChanges();
  }

  angular.module('cec', ['ui.router'])
    .config(config)
    .run(run);
})();