(function () {
  'use strict';

  function climbController() {
    $('.collapsible')
      .collapsible();
  }

  angular.module('cec')
    .controller('climbController', climbController);
})();