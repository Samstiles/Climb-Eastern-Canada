CragProject.factory('SublocationModel', ['$http', '$q',
  function ($http, $q) {

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
  }
]);