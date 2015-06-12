(function () {
  'use strict';

  angular.module('ClimbEasternCanada', ['ui.router']);

  String.prototype.capitalize = function () {
    return this.charAt(0)
      .toUpperCase() + this.slice(1);
  };

  jQuery(document)
    .ready(function ($) {
      $(window)
        .load(function () {
          $('body')
            .show();
        });
    });

  angular.module('ClimbEasternCanada')
    .run(function ($rootScope) {
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
    });

  angular.module('ClimbEasternCanada')
    .config(function ($urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    });

  /**
   * State definitions
   */
  angular.module('ClimbEasternCanada')
    .config(function ($stateProvider) {
      // Home Page
      $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.page.html',
        controllerAs: 'HomeCtrl',
        resolve: {
          locations: function (LocationFactory) {
            return true;
            // return LocationFactory.findAllLocations();
          },
          sublocations: function (SublocationFactory) {
            return true;
            // return SublocationFactory.findAllSublocations();
          },
          climbs: function (ClimbFactory) {
            return true;
            // return ClimbFactory.findAllClimbs();
          }
        },
        controller: function ($scope, locations, sublocations, climbs) {
          console.log('Home page!');
        }
      });
    });

  /**
   * DIRECTIVES
   */
  // Sidebar
  angular.module('ClimbEasternCanada')
    .directive('cecSidebar', function () {
      return {
        restrict: 'E',
        scope: {},
        templateUrl: 'templates/sidebar.partial.html',
        controller: function ($scope, $element, $attrs) {
          console.log('Sidebar directive loaded.');
        }
      };
    });

  /**
   * MODELS -- These are the in-browser representations
   * of server side data models.
   */
  // Climb model
  angular.module('ClimbEasternCanada')
    .factory('ClimbModel', function ($http, $q) {

      function Climb(climbData) {
        if (climbData) this.build(climbData);
      }

      Climb.prototype = {

        build: function (climbData) {
          angular.extend(this, climbData);
        },

        loadFromId: function (id) {
          var _this = this;
        },

        loadFromSlug: function (slug) {
          var _this = this;
          var deferred = $q.defer();
          $http.get('/api/climb/findBySlug/' + slug)
            .success(function (data, status) {
              _this.build(data);
              deferred.resolve(_this);
            })
            .error(function (data, status) {
              deferred.reject(data);
            });
          return deferred.promise;
        },

        delete: function () {
          var _this = this;
        },

        create: function () {
          var self = this;
          $http.post('/api/climb', self)
            .success(function (data, status) {});
        },

        update: function () {
          var self = this;
          self.location = self.location.id;
          $http.put('/api/climb', self)
            .success(function (data, status) {});
        }

      };

      return Climb;
    });

  // Sublocation model
  angular.module('ClimbEasternCanada')
    .factory('SublocationModel', function ($http, $q) {

      function Sublocation(sublocationData) {
        if (sublocationData) this.build(sublocationData);
      }

      Sublocation.prototype = {

        build: function (sublocationData) {
          angular.extend(this, sublocationData);
        },

        loadFromId: function (id) {
          var _this = this;
        },

        loadFromSlug: function (slug) {
          var _this = this;
          var deferred = $q.defer();
          $http.get('/api/sublocation/findBySlug/' + slug)
            .success(function (data, status) {
              _this.build(data);
              deferred.resolve(_this);
            })
            .error(function (data, status) {
              deferred.reject(data);
            });
          return deferred.promise;
        },

        delete: function () {
          var _this = this;
        },

        create: function () {
          var _this = this;
        },

        update: function () {
          var _this = this;
        }

      };

      return Sublocation;
    });

  // Location model
  angular.module('ClimbEasternCanada')
    .factory('LocationModel', function ($http, $q) {

      function LocationModel(locationModelData) {
        if (locationModelData) this.build(locationModelData);
      }

      LocationModel.prototype = {

        build: function (locationModelData) {
          angular.extend(this, locationModelData);
        },

        loadFromId: function (id) {
          var _this = this;
        },

        loadFromSlug: function (slug) {
          var _this = this;
          var deferred = $q.defer();
          $http.get('/api/location/findBySlug/' + slug)
            .success(function (data, status) {
              _this.build(data);
              deferred.resolve(_this);
            })
            .error(function (data, status) {
              deferred.reject(data);
            });
          return deferred.promise;
        },

        delete: function () {
          var _this = this;
        },

        create: function () {
          var _this = this;
        },

        update: function () {
          var _this = this;
        }

      };

      return LocationModel;
    });

  /**
   * FACTORIES -- These gather bulk models from the DB
   * and assemble in-browser model representations
   */
  // Climb factory
  angular.module('ClimbEasternCanada')
    .service('ClimbFactory', function ($q, $http, ClimbModel) {
      return {
        findAllClimbs: function () {
          var _this = this;
          var deferred = $q.defer();
          var climbs = [];

          $http.get('/api/climb/findAll')
            .success(function (data, status) {
              _.each(data, function (climb) {
                var c = new ClimbModel(climb);
                climbs.push(c);
              });
              deferred.resolve(climbs);
            })
            .error(function (data, status) {
              deferred.reject(data);
            });
          return deferred.promise;
        }
      };
    });

  // Sublocation factory
  angular.module('ClimbEasternCanada')
    .service('SublocationFactory', function ($q, $http, SublocationModel) {
      return {
        findAllSublocations: function () {
          var _this = this;
          var deferred = $q.defer();
          var sublocations = [];

          $http.get('/api/sublocation/findAll')
            .success(function (data, status) {
              _.each(data, function (sublocation) {
                var s = new SublocationModel(sublocation);
                sublocations.push(s);
              });
              deferred.resolve(sublocations);
            })
            .error(function (data, status) {
              deferred.reject(data);
            });
          return deferred.promise;
        }
      };
    });

  // Location factory
  angular.module('ClimbEasternCanada')
    .service('LocationFactory', function ($q, $http, LocationModel) {
      return {
        findAllLocations: function () {
          var _this = this;
          var deferred = $q.defer();
          var locations = [];

          $http.get('/api/location/findAll')
            .success(function (data, status) {
              _.each(data, function (location) {
                var l = new LocationModel(location);
                locations.push(l);
              });
              deferred.resolve(locations);
            })
            .error(function (data, status) {
              deferred.reject(data);
            });
          return deferred.promise;
        }
      };
    });
})();