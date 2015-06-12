(function() {
  'use strict';

  describe('someService Tests', function() {

    beforeEach(module('YOUR-MODULE-NAME-HERE'));

    it('Should concanenate two strings together', inject(function(someService) {
      expect(someService.concatTwoStrings('foo', 'bar')).toBe('foobar');
    }));

  });

})();
