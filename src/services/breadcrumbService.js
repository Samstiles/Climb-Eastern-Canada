(function () {
  'use strict';

  function BreadcrumbService($rootScope) {
    return {
      currentCountry: undefined,
      currentProvince: undefined,
      currentLocation: undefined,
      currentWall: undefined,
      currentClimb: undefined,
      listenForRouteChanges: function () {
        var self = this;
        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
          if (toState.name.indexOf('climb') > -1) {
            self.currentClimb = toState;
            console.log(toState);
          }
        });
      }
    };
  }

  angular.module('cec')
    .service('BreadcrumbService', BreadcrumbService);
})();