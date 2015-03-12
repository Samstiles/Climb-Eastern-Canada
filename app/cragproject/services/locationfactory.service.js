CragProject.service('LocationFactory', ['StorageService', '$q', '$http', 'LocationModel',
  function (StorageService, $q, $http, LocationModel) {

    this.findAllLocations = function () {
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
    };

    return this;

  }
]);