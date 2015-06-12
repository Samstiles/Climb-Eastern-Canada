(function() {
  'use strict';

  describe('someController Tests', function() {
    var $scope;
    var $ctrl;

    beforeEach(module('YOUR-MODULE-NAME-HERE'));

    beforeEach(inject(function(_$rootScope_, _$controller_) {
      $scope = _$rootScope_.$new();
      $ctrl = _$controller_('someController', {$scope: $scope});
    }));

    it('Should add two numbers together', function() {
      expect($scope.addTwoNumbers($scope.foo, $scope.bar)).toBe(4);
    });
  });

})();
