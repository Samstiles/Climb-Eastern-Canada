CragProject.factory('ClimbModel', ['$http', '$q',
  function ($http, $q) {

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
        var _this = this;
      },

      update: function () {
        var _this = this;
      }

    };

    return Climb;
  }
]);