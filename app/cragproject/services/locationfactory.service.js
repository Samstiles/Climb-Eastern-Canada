CragProject.service('LocationFactory',
  ['StorageService', '$q',
  function(StorageService, $q) {

    this.findAllLocations = function() {
      var self = this;
      var deferred = $q.defer();
      var locations = [];

      SocketService.get('/api/location/findAll', function(body, res) {
        if (res.statusCode !== 200) return deferred.reject(body);

        _.each(body, function(location) {
          var l = new LocationModel(location);
          locations.push(l);
        });

        return deferred.resolve(locations);
      });

      return deferred.promise;
    };

  }]
);