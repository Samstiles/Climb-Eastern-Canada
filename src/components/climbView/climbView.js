(function () {
  'use strict';

  function climbViewController() {
    $('.collapsible')
      .collapsible();
  }

  angular.module('cec')
    .controller('climbViewController', climbViewController);
})();