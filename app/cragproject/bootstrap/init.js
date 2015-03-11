jQuery(document)
  .ready(function ($) {
    $(window)
      .load(function () {
        $('body')
          .show();
      });
  });

var CragProject = angular.module('CragProject', ['ui.router', 'ngMaterial']);

CragProject.run(['$rootScope', '$mdSidenav',
  function ($rootScope, $mdSidenav) {

    $rootScope.openSideNav = function () {
      $mdSidenav('left')
        .open();
    };

    $rootScope.closeSideNav = function () {
      $mdSidenav('left')
        .close();
    };

    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      console.error('Error transitioning to state: \'' + toState.name + '\'...');
      console.error('Additional debugging:\n\n');
      console.error('-> toState:', toState);
      console.error('-> fromState:', fromState);
      console.error('-> toParams:', toParams);
      console.error('-> fromParams:', fromParams);
      console.error('-> error:', error);
      console.error('-> event:', event);
    });

    $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
      console.log('Missing state: \'' + unfoundState + '\'...');
      console.log('Additional debugging:\n\n');
      console.log('-> event', event);
      console.log('-> unfoundState:', unfoundState);
      console.log('-> fromState:', fromState);
      console.log('-> fromParams', fromParams);
    });

  }
]);

CragProject.config(['$urlRouterProvider',
  function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
]);