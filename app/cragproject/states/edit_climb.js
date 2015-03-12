CragProject.config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state('edit_climb', {

      url: '/climb/edit/{slug}',

      templateUrl: '/cragproject/states/edit_climb.template.html',

      controllerAs: 'EditClimbCtrl',

      resolve: {
        climb: ['$stateParams', 'ClimbModel', function ($stateParams, ClimbModel) {
          var climb = new ClimbModel();
          return climb.loadFromSlug($stateParams.slug);
        }],
        locations: ['LocationFactory', function (LocationFactory) {
          return LocationFactory.findAllLocations();
        }]
      },

      controller: ['climb', 'locations', function (climb, locations) {
        var ctrl = this;
        ctrl.climb = climb;
        ctrl.locations = locations;
        ctrl.action = 'edit';
        window.EditClimbController = ctrl;
      }]

    });

  }
]);