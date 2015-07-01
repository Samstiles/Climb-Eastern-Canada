(function () {
  'use strict';

  var apiUrl = window.location.href.indexOf('localhost') ? 'http://api.climbeasterncanada.com/' : 'http://localhost:9001/';

  console.log(apiUrl);

  angular.module('cec')
    .constant('apiUrl', apiUrl);
})();