CragProject.config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('create_climb', {
      url: '/climb/create',
      templateUrl: '/cragproject/states/edit_climb.template.html',
      controllerAs: 'CreateClimbCtrl',
      controller: ['ClimbModel', function(ClimbModel) {
        var climb = new ClimbModel();
        var ctrl = this;
        ctrl.climb = climb;
        window.CreateClimbController = ctrl;
      }]
    });

  }
]);