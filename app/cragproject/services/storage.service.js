CragProject.service('StorageService', ['$window',
  function($window) {
    return {

      store: function(key, value) {
        $window.localStorage.setItem(key, value);
        return $window.localStorage.getItem(key);
      },

      retrieve: function(key) {
        return $window.localStorage.getItem(key);
      },

      remove: function(key) {
        return $window.localStorage.removeItem(key);
      }

    };
  }
]);