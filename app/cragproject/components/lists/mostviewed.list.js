CragProject.directive('mostViewedList', ['$rootScope', function($rootScope) {
  return {
    scope: {
      count: '=count',
      resourcetype: '=resourcetype'
    },
    restrict: 'E',
    replace: true,
    link: function(scope, elem, attr) {
      elem = elem[0];
      console.log('Elem:', elem.id);
      console.log('Scope count:', scope.count);
      console.log('Scope resource type:', scope.resourcetype);

      var MostViewedList = React.createClass({ displayName: 'MostViewedList',
        getInitialState: function() {
          return { resources: [], resourceType: scope.resourcetype, count: scope.count };
        },
        componentDidMount: function() {
          var _this = this;

          $.ajax({
            url: '/api/' + _this.state.resourceType + '/findMostViewed/' + _this.state.count,
            method: 'GET',
            dataType: 'json'
          }).success(function(data) {
            _this.setState({ resources: data, resourceType: _this.state.resourceType, count: _this.state.count });
          }).fail(function(xhr, status, err) {
            console.log('Fail!', xhr);
          });
        },
        render: function() {
          var links;

          if (this.state.resourceType === 'location') {

            links = this.state.resources.map(function (location) {
              return (
                React.createElement('li', {key: location.id}, location.views, ' views - ', React.createElement(LocationLink, { location: location }))
              );
            });

          } else if (this.state.resourceType === 'sublocation') {

            links = this.state.resources.map(function (sublocation) {
              return (
                React.createElement('li', {key: sublocation.id}, sublocation.views, ' views - ', React.createElement(SublocationLink, { sublocation: sublocation }))
              );
            });

          } else if (this.state.resourceType === 'climb') {

            links = this.state.resources.map(function (climb) {
              return (
                React.createElement('li', { key: climb.id }, climb.views, ' views - ', React.createElement(ClimbLink, { climb: climb }))
              );
            });

          } else {

            console.log('Unrecognized resource type!');

          }

          return (
            React.createElement('div', null, 
              React.createElement('h3', null, 'Most Viewed ' + this.state.resourceType + 's'), 
              React.createElement('ul', null, 
                links
              )
            )
          );
        }
      });

      React.render(
        React.createElement(MostViewedList, null),
        document.getElementById(elem.id)
      );
    }
  };
}]);