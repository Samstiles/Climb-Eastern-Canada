CragProject.factory('UserModel', ['$http', '$q', 'StorageService', '$state',
  function ($http, $q, StorageService, $state) {

    function User(userData) {
      if (userData) this.build(userData);
    }

    User.prototype = {

      build: function (userData) {
        angular.extend(this, userData);
      },

      loginEmail: function () {
        var _this = this;

        $http.post('/api/login/email', _this)
          .success(function (data, status) {
            _this.initialize_auth(body);
          })
          .error(function (data, status) {
            console.error('Failed to log in!', res);
          });
      },

      registerEmail: function () {
        var _this = this;
        $http.post('/api/register/email', _this)
          .success(function (data, status) {
            _this.initialize_auth(body);
          })
          .error(function (data, status) {
            console.error('Failed to register!', res);
          });
      },

      initialize_auth: function (token) {
        StorageService.store('x-access-token', token);
        $state.go('home');
      }

    };

    return User;
  }
]);