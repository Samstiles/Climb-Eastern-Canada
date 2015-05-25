CragProject.factory('LocationModel', ['$http', '$q',
  function ($http, $q) {

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
  }
]);