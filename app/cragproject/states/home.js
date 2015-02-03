CragProject.config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/cragproject/states/home.template.html',
      controllerAs: 'HomeCtrl',
      controller: ['$scope', function($scope) {
        var ctrl = this;
        window.HomeController = ctrl;
      }]
    });

  }
]);