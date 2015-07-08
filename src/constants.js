(function () {
  'use strict';

  var API_URL = window.location.href.indexOf('localhost') ? 'http://api.climbeasterncanada.com/' : 'http://localhost:9001/';

  angular.module('cec').constant('API_URL', API_URL);
})();