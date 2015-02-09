CragProject.factory('UserModel', ['SocketService', '$q', 'StorageService', '$state',
  function(SocketService, $q, StorageService, $state) {

    function User (userData) {
      if (userData) this.build(userData);
    }

    User.prototype = {

      build: function(userData) {
        angular.extend(this, userData);
      },

      loginEmail: function() {
        var _this = this;

        SocketService.post('/api/login/email', _this, function(body, res) {
          if (res.statusCode !== 200) return console.error('Failed to log in!', res);
          _this.initialize_auth(body);
        });
      },

      registerEmail: function() {
        var _this = this;

        SocketService.post('/api/register/email', _this, function(body, res) {
          if (res.statusCode !== 200) return console.error('Failed to register!', res);
          _this.initialize_auth(body);
        });
      },

      initialize_auth: function(token) {
        StorageService.store('x-access-token', token);
        $state.go('home');
      }

    };

    return User;
  }
]);