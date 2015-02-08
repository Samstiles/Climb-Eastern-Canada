CragProject.config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: '/cragproject/states/login.template.html',
      controllerAs: 'LoginCtrl',
      controller: ['UserModel', function(UserModel) {
        var ctrl = this;
        ctrl.user = new UserModel();
        window.LoginController = ctrl;
      }]
    });

  }
]);