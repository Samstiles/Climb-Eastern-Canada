CragProject.factory('UserModel', ['SocketService', '$q',
  function(SocketService, $q) {

    function User (userData) {
      if (userData) this.build(userData);
    }

    User.prototype = {

      build: function(userData) {
        angular.extend(this, userData);
      },

      login: function() {
        var _this = this;
        var deferred = $q.defer();

        SocketService.post('/api/login/email', _this, function(body, res) {
          if (res.statusCode !== 200) return deferred.reject(body);
          return deferred.resolve(body);
        });

        return deferred.promise();
      },

      register: function() {
        var _this = this;
        var deferred = $q.defer();

        SocketService.post('/api/register/email', _this, function(body, res) {
          if (res.statusCode !== 200) return deferred.reject(body);
          return deferred.resolve(body);
        });

        return deferred.promise();
      }

    };

    return User;
  }
]);