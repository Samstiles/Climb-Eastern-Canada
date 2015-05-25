CragProject.directive("locationSelector", [function() {
  return {
    scope: {
      location: '=location'
    },
    link: function(scope, element, attrs) {
      var marker = null;
      // TODO get users location and set center to it
      var center = new google.maps.LatLng(46.474,-66.479);
      var mapOptions = {
        center: center,
        zoom: 6
      };
      var map =  new google.maps.Map(element[0], mapOptions);
      google.maps.event.addListener(map, 'click', function(event) {
        scope.$apply(function() {
          if (marker !== null) {
            marker.setMap(null);
          }
          marker = new google.maps.Marker({
            position: event.latLng,
            map: map,
          });

          scope.location.parking_location_latitude = marker.getPosition().lat();
          scope.location.parking_location_longitude = marker.getPosition().lng();
        });
      });
    },
  };
}]);