(function () {
  'use strict';

  function StateListener($rootScope) {
    return {
      reportStateChangeErrors: function () {
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
      },

      reportStateChangeStarts: function () {
        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
          console.log('Missing state: \'' + unfoundState + '\'...');
          console.log('Additional debugging:\n\n');
          console.log('-> event', event);
          console.log('-> unfoundState:', unfoundState);
          console.log('-> fromState:', fromState);
          console.log('-> fromParams', fromParams);
        });
      },

      reportStateNotFoundErrors: function () {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          // console.log('Beginning transition to state: \'' + toState.name + '\'...');
          // console.log('Additional debugging:\n\n');
          // console.log('-> event:', event);
          // console.log('-> toState:', toState);
          // console.log('-> toParams:', toParams);
          // console.log('-> fromState:', fromState);
          // console.log('-> fromParams:', fromParams);
        });
      }
    };
  }

  angular.module('cec')
    .service('StateListener', StateListener);
})();