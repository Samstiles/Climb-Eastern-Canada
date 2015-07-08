(function () {
  'use strict';

  function StateListenerService($rootScope) {
    return {
      reportAll: function () {
        this.reportStateChangeErrors();
        this.reportStateChangeStarts();
        this.reportStateNotFoundErrors();
      },
      reportStateChangeErrors: function () {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
          console.error('--- > !! State Change Error !! < --- \n', arguments);
        });
      },
      reportStateNotFoundErrors: function () {
        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
          console.error('--- > !! State Not Found !! < --- \n', arguments);
        });
      },
      reportStateChangeStarts: function () {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          console.info('--- > Beginning state transition < --- \n', arguments);
        });
      }
    };
  }

  angular.module('cec')
    .service('StateListenerService', StateListenerService);
})();