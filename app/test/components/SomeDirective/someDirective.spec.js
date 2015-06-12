(function() {
  'use strict';

  describe('someDirective Tests', function() {
    var $scope;
    var $element;
    var $controller;

    beforeEach(module('YOUR-MODULE-NAME-HERE'));

    beforeEach(inject(function($compile, $rootScope) {
      $scope = $rootScope.$new();
      $element = $compile(angular.element('<some-directive></some-directive>'))($scope);
      $scope.$digest();
      $controller = $element.controller;
    }));

    it('Should toggle the directives scope active property', function() {
      var $directiveScope = $scope.$$childHead;
      $directiveScope.toggleActive();
      $directiveScope.$apply();
      expect($element[0].children[1].classList[0] === 'active').toBe(true);
    });
  });
})();

