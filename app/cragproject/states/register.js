CragProject.config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state('register', {

      url: '/register',

      templateUrl: '/cragproject/states/register.template.html',

      controllerAs: 'RegisterCtrl',

      controller: ['UserModel', function (UserModel) {
        var ctrl = this;
        ctrl.user = new UserModel();
        window.RegisterController = ctrl;
      }]

    });

  }
]);