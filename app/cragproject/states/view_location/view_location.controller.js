CragProject.controller('ViewLocationController', ['location',
  function(location) {
    var ctrl = this;
    ctrl.location = location;
    window.ViewLocationController = ctrl;
  }
]);