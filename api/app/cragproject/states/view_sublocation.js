CragProject.config(['$stateProvider',
  function ($stateProvider) {

    $stateProvider.state('view_sublocation', {

      url: '/sublocation/{slug}',

      templateUrl: '/cragproject/states/view_sublocation.template.html',

      controllerAs: 'ViewSublocationCtrl',

      resolve: {
        sublocation: ['$stateParams', 'SublocationModel', function ($stateParams, SublocationModel) {
          var sublocation = new SublocationModel();
          return sublocation.loadFromSlug($stateParams.slug);
        }]
      },

      controller: ['sublocation', function (sublocation) {
        var ctrl = this;
        ctrl.sublocation = JSON.stringify(sublocation, null, 2);
        window.ViewSublocationController = ctrl;
      }]

    });

  }
]);