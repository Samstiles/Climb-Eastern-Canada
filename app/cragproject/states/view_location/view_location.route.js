CragProject.config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('view_location', {
      url: '/view_location/:slug',
      templateUrl: '/cragproject/states/view_location/view_location.template.html',
      controller: 'ViewLocationController',
      controllerAs: 'ViewLocationCtrl',
      resolve: {
        "_location": ['$stateParams', 'LocationModel', function($stateparams, LocationModel) {
          return true;
        }]
      }
    });

  }
]);