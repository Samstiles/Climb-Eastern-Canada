(function () {
  'use strict';

  function siteHeader() {
    return {
      scope: {},
      restrict: 'E',
      template: '<nav class="top-nav"><div class="nav-wrapper"><a class="page-title">{{ \'Climb: Stairway to Heaven\' || \'Climb Eastern Canada\' }}</a></div></nav>',
      replace: true,
      link: function () {},
      controller: function ($scope, BreadcrumbService) {
        $scope.title = BreadcrumbService.currentClimb;
      }
    };
  }

  angular.module('cec')
    .directive('siteHeader', siteHeader);
})();