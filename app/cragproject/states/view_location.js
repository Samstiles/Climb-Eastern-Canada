CragProject.config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('view_location', {
      url: '/view_location/:slug',
      templateUrl: '/cragproject/states/view_location.template.html',
      controllerAs: 'ViewLocationCtrl',
      resolve: {
        "location": ['$stateParams', 'LocationModel', function($stateparams, LocationModel) {
          return true;
        }]
      },
      controller: ['location', function(location) {
        var ctrl = this;
        ctrl.location = location;
        window.ViewLocationController = ctrl;
      }]
    });

  }
]);