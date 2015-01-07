CragProject.factory('Wall',
  ['',
  function() {

    function Wall (wallData) {
      if (wallData) this.build(wallData);
    }

    Wall.prototype = {

      build: function(wallData) {
        angular.extend(this, wallData);
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

    return Wall;
  }
]);