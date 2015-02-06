var RandomRoutesList = React.createClass({

  getInitialState: function() {
    return { climbs: [] };
  },

  componentDidMount: function() {
    var _this = this;
    $.ajax({
      url: '/api/climb/find5Random',
      method: 'GET',
      dataType: 'json'
    }).success(function(data) {
      _this.setState({ climbs: data });
    }).fail(function(xhr, status, err) {
      console.log('Fail!', xhr);
    });
  },

  render: function() {
    var climbLinks = this.state.climbs.map(function (climb) {
      return (
        <li key={climb.id}><ClimbLink climb={climb} /></li>
      );
    });

    return (
      <div id="random_routes_list">
        <h3>Random Routes</h3>
        <ul>
          {climbLinks}
        </ul>
      </div>
    );
  }

});

CragProject.value('RandomRoutesList', RandomRoutesList);