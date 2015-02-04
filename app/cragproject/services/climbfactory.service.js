CragProject.service('ClimbFactory',
  ['StorageService', '$q',
  function(StorageService, $q) {

    this.findAllClimbs = function() {
      var self = this;
      var deferred = $q.defer();
      var climbs = [];

      SocketService.get('/api/climb/findAll', function(body, res) {
        if (res.statusCode !== 200) return deferred.reject(body);

        _.each(body, function(climb) {
          var l = new ClimbModel(climb);
          climbs.push(l);
        });

        return deferred.resolve(climbs);
      });

      return deferred.promise;
    };

  }]
);