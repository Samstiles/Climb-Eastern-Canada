CragProject.factory('Crag', 
  ['',
  function() {

    function Crag (cragData) {
      if (cragData) this.build(cragData);
    }

    Crag.prototype = {

      build: function(cragData) {
        angular.extend(this, cragData);
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

    return Crag;
  }
]);