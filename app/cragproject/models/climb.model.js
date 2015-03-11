CragProject.factory('ClimbModel', ['$http', 'SocketService', '$q',
  function($http, SocketService, $q) {

    function Climb (climbData) {
      if (climbData) this.build(climbData);
    }

    Climb.prototype = {

      build: function(climbData) {
        angular.extend(this, climbData);
      },

      loadFromId: function(id) {
        var self = this;
      },

      loadFromSlug: function(slug) {
        var self = this;
        var deferred = $q.defer();

        SocketService.get('/api/climb/findBySlug/' + slug, function(body, res) {
          if (res.statusCode !== 200) deferred.reject(body);

          self.build(body);

          deferred.resolve(self);
        });

        return deferred.promise;
      },

      delete: function() {
        var self = this;
      },

      create: function() {
        var self = this;
        $http.post('/api/climb', self).success(function(data, status) {

        });
      },

      update: function() {
        var self = this;
        self.location = self.location.id;
        $http.put('/api/climb', self).success(function(data, status) {

        });
      }

    };

    return Climb;
  }
]);