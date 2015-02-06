var MostViewedLocationsList = React.createClass({

  getInitialState: function() {
    var _this = this;
    return { locations: [] };
  },

  componentDidMount: function() {
    var _this = this;

    $.ajax({
      url: '/api/location/findMostViewed',
      method: 'GET',
      dataType: 'json'
    }).success(function(data) {
      _this.setState({ locations: data });
    }).fail(function(xhr, status, err) {
      console.log('Fail!', xhr);
    });
  },

  render: function() {
    var _this = this;

    var locationLinks = _this.state.locations.map(function (location) {
      return (
        <li key={location.id}>{location.views} views - <LocationLink location={location} /></li>
      );
    });

    return (
      <div>
        <h3>Most Viewed Locations</h3>
        <ul>
          {locationLinks}
        </ul>
      </div>
    );
  }

});

CragProject.value('MostViewedLocationsList', MostViewedLocationsList);