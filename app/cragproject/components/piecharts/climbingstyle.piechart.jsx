var ClimbingStylePieChart = React.createClass({

  getInitialState: function() {
    var _this = this;
    return { climbs: [] };
  },

  componentDidMount: function() {
    var _this = this;

    $.ajax({
      url: '/api/climb/findRandom/' + _this.state.count,
      method: 'GET',
      dataType: 'json'
    }).success(function(data) {
      _this.setState({ climbs: data, count: _this.state.count });
    }).fail(function(xhr, status, err) {
      console.log('Fail!', xhr);
    });
  },

  render: function() {
    var _this = this;

    var climbLinks = _this.state.climbs.map(function (climb) {
      return (
        <li key={climb.id}><ClimbLink climb={climb} /></li>
      );
    });

    return (
      <div>
      </div>
    );
  }

});

CragProject.value('ClimbingStylePieChart', ClimbingStylePieChart);