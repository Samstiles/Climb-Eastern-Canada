CragProject.service('SublocationFactory', ['StorageService', '$q', '$http', 'SublocationModel',
  function (StorageService, $q, $http, SublocationModel) {

    this.findAllSublocations = function () {
      var _this = this;
      var deferred = $q.defer();
      var sublocations = [];

      $http.get('/api/sublocation/findAll')
        .success(function (data, status) {
          _.each(data, function (sublocation) {
            var l = new SublocationModel(sublocation);
            sublocations.push(l);
          });
          deferred.resolve(sublocations);
        })
        .error(function (data, status) {
          deferred.reject(data);
        });

      return deferred.promise;
    };

    return this;

  }
]);