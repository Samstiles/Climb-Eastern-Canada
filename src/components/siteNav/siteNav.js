(function () {
  'use strict';

  function siteNav() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'components/siteNav/siteNav.html',
      replace: true,
      link: function () {},
      controller: function ($scope) {
        $('.collapsible')
          .collapsible({
            accordion: true
          });
      }
    };
  }

  angular.module('cec').directive('siteNav', siteNav);
})();