CragProject.service('ClimbFactory', ['StorageService', '$q', '$http', 'ClimbModel',
  function (StorageService, $q, $http, ClimbModel) {

    this.findAllClimbs = function () {
      var _this = this;
      var deferred = $q.defer();
      var climbs = [];

      $http.get('/api/climb/findAll')
        .success(function (data, status) {
          _.each(body, function (climb) {
            var l = new ClimbModel(climb);
            climbs.push(l);
          });
          deferred.resolve(climbs);
        })
        .error(function (data, status) {
          deferred.reject(data);
        });

      return deferred.promise;
    };

    return this;

  }
]);