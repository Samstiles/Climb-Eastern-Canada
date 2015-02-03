CragProject.config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('view_location', {
      url: '/location/:slug',
      templateUrl: '/cragproject/states/view_location.template.html',
      controllerAs: 'ViewLocationCtrl',
      resolve: {
        "location": ['$stateParams', 'LocationModel', function($stateParams, LocationModel) {
          var location = new LocationModel();
          return location.loadFromSlug($stateParams.slug);
        }]
      },
      controller: ['location', function(location) {
        var ctrl = this;
        ctrl.location = JSON.stringify(location, null, 2);
        window.ViewLocationController = ctrl;
      }]
    });

  }
]);