CragProject.service('SublocationFactory',
  ['StorageService', '$q', 'SocketService', 'SublocationModel',
  function(StorageService, $q, SocketService, SublocationModel) {

    this.findAllSublocations = function() {
      var self = this;
      var deferred = $q.defer();
      var sublocations = [];

      SocketService.get('/api/sublocation/findAll', function(body, res) {
        if (res.statusCode !== 200) return deferred.reject(body);

        _.each(body, function(sublocation) {
          var l = new SublocationModel(sublocation);
          sublocations.push(l);
        });

        return deferred.resolve(sublocations);
      });

      return deferred.promise;
    };

  }]
);