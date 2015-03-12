CragProject.config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state('view_climb', {
      url: '/climb/{slug}',
      templateUrl: '/cragproject/states/view_climb.template.html',
      controllerAs: 'ViewClimbCtrl',
      resolve: {
        climb: ['$stateParams', 'ClimbModel', function ($stateParams, ClimbModel) {
          var climb = new ClimbModel();
          return climb.loadFromSlug($stateParams.slug);
        }]
      },
      controller: ['climb', function (climb) {
        var ctrl = this;
        ctrl.climb = climb;
        window.ViewClimbController = ctrl;
      }]
    });

  }
]);