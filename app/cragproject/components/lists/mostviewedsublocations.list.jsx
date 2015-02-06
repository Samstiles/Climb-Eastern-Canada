var MostViewedSublocationsList = React.createClass({

  getInitialState: function() {
    var _this = this;
    return { sublocations: [] };
  },

  componentDidMount: function() {
    var _this = this;

    $.ajax({
      url: '/api/sublocation/findMostViewed',
      method: 'GET',
      dataType: 'json'
    }).success(function(data) {
      _this.setState({ sublocations: data });
    }).fail(function(xhr, status, err) {
      console.log('Fail!', xhr);
    });
  },

  render: function() {
    var _this = this;

    var sublocationLinks = _this.state.sublocations.map(function (sublocation) {
      return (
        <li key={sublocation.id}>{sublocation.views} views - <SublocationLink sublocation={sublocation} /></li>
      );
    });

    return (
      <div>
        <h3>Most Viewed Sublocations</h3>
        <ul>
          {sublocationLinks}
        </ul>
      </div>
    );
  }

});

CragProject.value('MostViewedSublocationsList', MostViewedSublocationsList);