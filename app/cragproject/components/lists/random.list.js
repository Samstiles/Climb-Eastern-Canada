var RandomList = React.createClass({displayName: "RandomList",

  getInitialState: function() {
    return { climbs: [], count: this.props.count, resourceType: this.props.resourceType };
  },

  componentDidMount: function() {
    var _this = this;

    $.ajax({
      url: '/api/' + _this.state.resourceType + '/findRandom/' + _this.state.count,
      method: 'GET',
      dataType: 'json'
    }).success(function(data) {
      _this.setState({ climbs: data, count: _this.state.count, resourceType: _this.state.resourceType });
    }).fail(function(xhr, status, err) {
      console.log('Fail!', xhr);
    });
  },

  render: function() {

    var climbLinks = this.state.climbs.map(function (climb) {
      return (
        React.createElement("li", {key: climb.id}, React.createElement(ClimbLink, {climb: climb}))
      );
    });

    return (
      React.createElement("div", null, 
        React.createElement("h3", null, "Random " + this.props.resourceType + "s"), 
        React.createElement("ul", null, 
          climbLinks
        )
      )
    );
  }

});

window.RandomList = RandomList;

CragProject.value('RandomList', RandomList);