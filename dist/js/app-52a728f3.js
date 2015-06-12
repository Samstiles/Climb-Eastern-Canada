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
  config.$inject = ["$stateProvider", "$urlRouterProvider"];

  function run(StateListener, BreadcrumbService) {
    StateListener.reportStateChangeErrors();
    BreadcrumbService.listenForRouteChanges();
  }
  run.$inject = ["StateListener", "BreadcrumbService"];

  angular.module('cec', ['ui.router'])
    .config(config)
    .run(run);
})();
(function () {
  'use strict';

  var appConfig = {};

  angular.module('cec')
    .constant('appConfig', appConfig);
})();
(function () {
  'use strict';

  var apiUrl = 'http://api.climbeasterncanada.com/';

  angular.module('cec')
    .constant('apiUrl', apiUrl);
})();
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
  StateListener.$inject = ["$rootScope"];

  angular.module('cec')
    .service('StateListener', StateListener);
})();
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
  BreadcrumbService.$inject = ["$rootScope"];

  angular.module('cec')
    .service('BreadcrumbService', BreadcrumbService);
})();
(function () {
  'use strict';

  function homeController() {
    $('.collapsible')
      .collapsible({
        accordion: true
      });
  }

  angular.module('cec')
    .controller('homeController', homeController);
})();
(function () {
  'use strict';

  function climbController() {
    $('.collapsible')
      .collapsible();
  }

  angular.module('cec')
    .controller('climbController', climbController);
})();
(function () {
  'use strict';

  function siteHeader() {
    return {
      scope: {},
      restrict: 'E',
      template: '<nav class="top-nav"><div class="nav-wrapper"><a class="page-title">{{ \'Climb: Stairway to Heaven\' || \'Climb Eastern Canada\' }}</a></div></nav>',
      replace: true,
      link: function () {},
      controller: ["$scope", "BreadcrumbService", function ($scope, BreadcrumbService) {
        $scope.title = BreadcrumbService.currentClimb;
      }]
    };
  }

  angular.module('cec')
    .directive('siteHeader', siteHeader);
})();
(function () {
  'use strict';

  function siteNav() {
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'templates/siteNav.html',
      replace: true,
      link: function () {},
      controller: ["$scope", function ($scope) {
        $('.collapsible')
          .collapsible({
            accordion: true
          });
      }]
    };
  }

  angular.module('cec')
    .directive('siteNav', siteNav);
})();