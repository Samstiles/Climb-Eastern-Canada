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
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Traditional' }),
        color: 'rgba(247, 70, 74, 1)',
        highlight: 'rgba(247, 70, 74, 0.75)',
        label: 'Traditional'
      },
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Sport' }),
        color: 'rgba(70, 191, 189, 1)',
        highlight: '#rgba(70, 191, 189, 0.75)',
        label: 'Sport'
      },
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Aid' }),
        color: 'rgba(253, 180, 92, 1)',
        highlight: 'rgba(253, 180, 92, 0.75)',
        label: 'Aid'
      },
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Mixed' }),
        color: 'rgba(220, 220, 220, 1)',
        highlight: 'rgba(220, 220, 220, 0.75)',
        label: 'Mixed'
      },
      {
        value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Boulder' })
          color: 'rgba(151, 187, 205, 1)',
          highlight: 'rgba(151, 187, 205, 0.75)',
          label: 'Boulder'
      }
    ];
  },

  render: function() {
    return <PieChart data={this.state.counts} options={this.state.options} />
  }

});

CragProject.value('ClimbingStylePieChart', ClimbingStylePieChart);