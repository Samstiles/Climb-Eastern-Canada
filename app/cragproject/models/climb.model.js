CragProject.factory('Climb', ['',
  function() {

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

    return Climb;
  }
]);