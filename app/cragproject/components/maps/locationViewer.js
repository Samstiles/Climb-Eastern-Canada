CragProject.directive('locationViewer', function() {
  return {
    scope: {
      lat: '=lat',
      lng: '=lng'
    },
    restrict: 'A',
    link: function(scope, element, attrs) {
      var location = new google.maps.LatLng(scope.lat, scope.lng);

      var mapOptions = {
        center: location,
        zoom: 6
      };

      var map =  new google.maps.Map(element[0], mapOptions);
      marker = new google.maps.Marker({
        position: location,
        map: map,
      });
    }
  };
});