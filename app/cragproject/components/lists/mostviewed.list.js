var MostViewedList = React.createClass({ displayName: 'MostViewedList',

  getInitialState: function() {
    return { resources: [], resourceType: this.props.resourceType, count: this.props.count };
  },

  componentDidMount: function() {
    var _this = this;

    $.ajax({
      url: '/api/' + _this.state.resourceType + '/findMostViewed/' + _this.state.count,
      method: 'GET',
      dataType: 'json'
    }).success(function(data) {
      _this.setState({ resources: data, resourceType: this.props.resourceType, count: this.props.count });
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
          React.createElement('li', {key: climb.id}, climb.views, ' views - ', React.createElement(ClimbLink, { climb: climb }))
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

CragProject.value('MostViewedList', MostViewedList);