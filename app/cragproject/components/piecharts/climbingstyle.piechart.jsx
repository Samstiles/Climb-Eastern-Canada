var ClimbingStylePieChart = React.createClass({

  getInitialState: function() {
    return {
      climbs: [
        { style: 'Traditional' },
        { style: 'Mixed' },
        { style: 'Sport' },
        { style: 'Aid' },
        { style: 'Mixed' },
        { style: 'Sport' },
        { style: 'Sport' },
        { style: 'Traditional' },
        { style: 'Boulder' },
        { style: 'Boulder' },
        { style: 'Aid' },
        { style: 'Traditional' }
      ],
      counts: [],
      options: {} 
    };
  },

  componentDidMount: function() {
    this.state.counts = [
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Traditional' }).true,
        color: 'rgba(247, 70, 74, 1)',
        highlight: 'rgba(247, 70, 74, 0.75)',
        label: 'Traditional'
      },
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Sport' }).true,
        color: 'rgba(70, 191, 189, 1)',
        highlight: '#rgba(70, 191, 189, 0.75)',
        label: 'Sport'
      },
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Aid' }).true,
        color: 'rgba(253, 180, 92, 1)',
        highlight: 'rgba(253, 180, 92, 0.75)',
        label: 'Aid'
      },
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Mixed' }).true,
        color: 'rgba(220, 220, 220, 1)',
        highlight: 'rgba(220, 220, 220, 0.75)',
        label: 'Mixed'
      },
      {
          value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Boulder' }).true,
          color: 'rgba(151, 187, 205, 1)',
          highlight: 'rgba(151, 187, 205, 0.75)',
          label: 'Boulder'
      }
    ];
    var ctx = this.refs.chartCanvas.getDOMNode();
    var chart = new Chart(ctx).Pie(this.state.counts, this.state.options);
  },

  render: function() {
    return (
      <div>
        <canvas ref="chartCanvas" height="200" width="200" />
      </div>
    );
  }

});

CragProject.value('ClimbingStylePieChart', ClimbingStylePieChart);