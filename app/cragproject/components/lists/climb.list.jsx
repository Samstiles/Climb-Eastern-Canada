var ClimbList = React.createClass({

  getInitialState: function() {
    var _this = this;
    return { climbs: _this.props.climbs };
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
        <h3>Climbs</h3>
        <ul>
          {climbLinks}
        </ul>
      </div>
    );
  }

});

CragProject.value('ClimbList', ClimbList);