CragProject.factory('SublocationModel', ['SocketService', '$q',
  function(SocketService, $q) {

    function Sublocation (sublocationData) {
      if (sublocationData) this.build(sublocationData);
    }

    Sublocation.prototype = {

      build: function(sublocationData) {
        angular.extend(this, sublocationData);
      },

      loadFromId: function(id) {
        var self = this;
      },

      loadFromSlug: function(slug) {
        var self = this;
        var deferred = $q.defer();

        SocketService.get('/api/sublocation/findBySlug/' + slug, function(body, res) {
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

    return Sublocation;
  }
]);