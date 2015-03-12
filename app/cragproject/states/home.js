CragProject.config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/cragproject/states/home.template.html',
      controllerAs: 'HomeCtrl',
      resolve: {
        locations: ['LocationFactory', function (LocationFactory) {
          return LocationFactory.findAllLocations();
        }],
        sublocations: ['SublocationFactory', function (SublocationFactory) {
          return SublocationFactory.findAllSublocations();
        }],
        climbs: ['ClimbFactory', function (ClimbFactory) {
          return ClimbFactory.findAllClimbs();
        }]
      },
      controller: ['locations', 'sublocations', 'climbs', function (locations, sublocations, climbs) {
        var ctrl = this;
        ctrl.locations = locations;
        ctrl.sublocations = sublocations;
        ctrl.climbs = climbs;
        window.HomeController = ctrl;
      }]
    });

  }
]);