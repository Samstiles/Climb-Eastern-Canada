// CragProject.directive('climbingStylePieChart', ['$rootScope', function($rootScope) {
//   return {
//     scope: {
//       climbs: '=climbs'
//     },
//     restrict: 'E',
//     replace: true,
//     link: function(scope, elem, attr) {
//       elem = elem[0];

//       console.log('Climbs:', scope.climbs);

//       var ClimbingStylePieChart = React.createClass({displayName: "ClimbingStylePieChart",
//         getInitialState: function() {
//           return {
//             climbs: scope.climbs,
//             counts: [],
//             options: {
//               legendTemplate : '<ul><% for (var i = 0; i < segments.length; i++) { %><li><span style=\"background-color: <%= segments[i].fillColor %>; height: 12px; width: 12px; display: inline-block; margin-right: 4px;\"></span><% if (segments[i].label) { %><%= segments[i].label %>: <%= segments[i].value %><% } %></li><% } %></ul>'
//             }
//           };
//         },
//         componentDidMount: function() {
//           this.state.counts = [
//             {
//               value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Traditional'; }).true,
//               color: 'rgba(247, 70, 74, 1)',
//               highlight: 'yellow',
//               label: 'Traditional'
//             },
//             {
//               value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Sport'; }).true,
//               color: 'rgba(70, 191, 189, 1)',
//               highlight: 'yellow',
//               label: 'Sport'
//             },
//             {
//               value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Aid'; }).true,
//               color: 'rgba(253, 180, 92, 1)',
//               highlight: 'yellow',
//               label: 'Aid'
//             },
//             {
//               value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Mixed'; }).true,
//               color: 'rgba(220, 220, 220, 1)',
//               highlight: 'yellow',
//               label: 'Mixed'
//             },
//             {
//               value: _.countBy(this.state.climbs, function(climb) { return climb.style === 'Boulder'; }).true,
//               color: 'rgba(151, 187, 205, 1)',
//               highlight: 'yellow',
//               label: 'Boulder'
//             }
//           ];
//           var ctx = this.refs.canvas.getDOMNode().getContext('2d');
//           var chart = new Chart(ctx).Pie(this.state.counts, this.state.options);
//           var legend = this.refs.legend.getDOMNode().innerHTML = chart.generateLegend();
//         },
//         render: function() {
//           return (
//             React.createElement("div", null,
//               React.createElement("canvas", { ref: "canvas", height: "200", width: "200" }),
//               React.createElement("div", { ref: "legend" })
//             )
//           );
//         }
//       });

//       React.render(
//         React.createElement(ClimbingStylePieChart, null),
//         elem
//       );
//     }
//   };
// }]);