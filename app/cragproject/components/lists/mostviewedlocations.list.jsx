var MostViewedClimbsList = React.createClass({

  getInitialState: function() {
    var _this = this;
    return { climbs: [] };
  },

  componentDidMount: function() {
    var _this = this;

    $.ajax({
      url: '/api/climb/findMostViewed',
      method: 'GET',
      dataType: 'json'
    }).success(function(data) {
      _this.setState({ climbs: data });
    }).fail(function(xhr, status, err) {
      console.log('Fail!', xhr);
    });
  },

  render: function() {
    var _this = this;

    var climbLinks = _this.state.climbs.map(function (climb) {
      return (
        <li key={climb.id}>{climb.views} views - <ClimbLink climb={climb} /></li>
      );
    });

    return (
      <div>
        <h3>Most Viewed Climbs</h3>
        <ul>
          {climbLinks}
        </ul>
      </div>
    );
  }

});

CragProject.value('MostViewedClimbsList', MostViewedClimbsList);