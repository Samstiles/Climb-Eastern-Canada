(function () {
  'use strict';

  function homeViewController() {
    $('.collapsible')
      .collapsible({
        accordion: true
      });
  }

  angular.module('cec')
    .controller('homeViewController', homeViewController);
})();