CragProject.config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '/cragproject/states/home/home.template.html',
      controller: 'HomeController',
      controllerAs: 'HomeCtrl'
    });

  }
]);