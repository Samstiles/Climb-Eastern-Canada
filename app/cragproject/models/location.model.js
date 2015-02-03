CragProject.factory('LocationModel', 
  ['$scope',
  function($scope) {

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