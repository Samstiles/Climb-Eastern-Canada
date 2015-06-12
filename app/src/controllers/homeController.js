(function () {
  'use strict';

  function homeController() {
    $('.collapsible')
      .collapsible({
        accordion: true
      });
  }

  angular.module('cec')
    .controller('homeController', homeController);
})();