CragProject.factory('UserModel', ['SocketService', '$q', '$http',
  function(SocketService, $q, $http) {

    function User (userData) {
      if (userData) this.build(userData);
    }

    User.prototype = {

      build: function(userData) {
        angular.extend(this, userData);
      },

      loginEmail: function() {
        var _this = this;
        var deferred = $q.defer();

        SocketService.post('/api/login/email', _this, function(body, res) {
          if (res.statusCode !== 200) return deferred.reject(body);
          return deferred.resolve(body);
        });

        return deferred.promise();
      },

      registerEmail: function() {
        var _this = this;
        // var deferred = $q.defer();

        SocketService.post('/api/register/email', _this, function(body, res) {
          if (res.statusCode !== 200) return console.error('Failed to register!', body);

          console.log('body', body);
          console.log('res', res);
        });

        // return deferred.promise();
      }

    };

    return User;
  }
]);