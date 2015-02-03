CragProject.factory('LocationModel', ['SocketService', '$q',
  function(SocketService, $q) {

    function LocationModel (locationModelData) {
      if (locationModelData) this.build(locationModelData);
    }

    LocationModel.prototype = {

      build: function(locationModelData) {
        angular.extend(this, locationModelData);
      },

      loadFromId: function(id) {
        var self = this;
      },

      loadFromSlug: function(slug) {
        var self = this;
        var deferred = $q.defer();

        SocketService.get('/api/location/findBySlug/' + slug, function(body, res) {
          if (res.statusCode !== 200) return deferred.reject(body);

          self.build(body);

          return deferred.resolve(self);
        });

        return deferred.promise;
      },

      delete: function() {
        var self = this;
      },

      create: function() {
        var self = this;
      },

      update: function() {
        var self = this;
      }

    };

    return LocationModel;
  }
]);