CragProject.directive('backstretch', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $(element).backstretch(attrs.backstretch);
    }
  };
});