var MostViewedClimbsList = React.createClass({displayName: "MostViewedClimbsList",

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
        React.createElement("li", {key: climb.id}, climb.views, " views - ", React.createElement(ClimbLink, {climb: climb}))
      );
    });

    return (
      React.createElement("div", null, 
        React.createElement("h3", null, "Most Viewed Climbs"), 
        React.createElement("ul", null, 
          climbLinks
        )
      )
    );
  }

});

CragProject.value('MostViewedClimbsList', MostViewedClimbsList);