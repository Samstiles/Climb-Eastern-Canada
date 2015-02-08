CragProject.directive('randomList', ['$rootScope', function($rootScope) {
  return {
    scope: {
      count: '=count',
      resourcetype: '=resourcetype'
    },
    restrict: 'E',
    replace: true,
    link: function(scope, elem, attr) {
      elem = elem[0];

      var RandomList = React.createClass({displayName: "RandomList",
        getInitialState: function() {
          return { resources: [], count: scope.count, resourceType: scope.resourcetype };
        },
        componentDidMount: function() {
          var _this = this;

          $.ajax({
            url: '/api/' + _this.state.resourceType + '/findRandom/' + _this.state.count,
            method: 'GET',
            dataType: 'json'
          }).success(function(data) {
            _this.setState({ resources: data, count: _this.state.count, resourceType: _this.state.resourceType });
          }).fail(function(xhr, status, err) {
            console.log('Fail!', xhr);
          });
        },
        render: function() {
          var links;

          if (this.state.resourceType === 'location') {
            links = this.state.resources.map(function (location) {
              return (
                React.createElement('li', {key: location.id}, React.createElement(LocationLink, { location: location }))
              );
            });
          } else if (this.state.resourceType === 'sublocation') {
            links = this.state.resources.map(function (sublocation) {
              return (
                React.createElement('li', {key: sublocation.id}, React.createElement(SublocationLink, { sublocation: sublocation }))
              );
            });
          } else if (this.state.resourceType === 'climb') {
            links = this.state.resources.map(function (climb) {
              return (
                React.createElement('li', { key: climb.id }, React.createElement(ClimbLink, { climb: climb }))
              );
            });
          } else {
            console.log('Unrecognized resource type!');
          }

          return (
            React.createElement("div", null, 
              React.createElement("h3", null, "Random " + this.state.resourceType + "s"), 
              React.createElement("ul", null, 
                links
              )
            )
          );
        }
      });

      React.render(
        React.createElement(RandomList, null),
        elem
      );
    }
  };
}]);
