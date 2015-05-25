CragProject.config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state('create_climb', {

      url: '/climb/create',

      templateUrl: '/cragproject/states/edit_climb.template.html',

      controllerAs: 'EditClimbCtrl',

      resolve: {
        locations: ['LocationFactory', function (LocationFactory) {
          return LocationFactory.findAllLocations();
        }]
      },

      controller: ['locations', 'ClimbModel', function (locations, ClimbModel) {
        var climb = new ClimbModel();
        var ctrl = this;
        ctrl.climb = climb;
        ctrl.locations = locations;
        ctrl.action = 'create';
        window.EditClimbController = ctrl;
      }]

    });

  }
]);