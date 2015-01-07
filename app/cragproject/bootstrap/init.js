jQuery(document).ready(function($) {
  $(window).load(function(){
      $('body').show();
  });
});

var CragProject = angular.module('CragProject', ['ui.router', 'ngMaterial']);

CragProject.run(
  ['$rootScope', '$mdSidenav',
  function($rootScope, $mdSidenav) {

    $rootScope.openSideNav = function() {
      $mdSidenav('left').open();
    };

    $rootScope.closeSideNav = function() {
      $mdSidenav('left').close();
    };

  }
]);

CragProject.config(
  ['$urlRouterProvider',
  function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
]);