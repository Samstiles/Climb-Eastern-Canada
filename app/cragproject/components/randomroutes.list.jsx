var RandomRoutesList = React.createClass({

  getInitialState: function() {
    return { climbs: [
      { id: 5,
        name: "Ra",
        grade: "5.12a",
        slug: "ra-g9sf8fq4nsvr9xdbj",
        location: { name: "Sunnyside",
                    slug: "sunnyside-agfh8250ghsasfg93a524a"} },
      { id: 4,
        name: "Leviathan",
        grade: "5.11b",
        slug: "leviathan-g9sf8fq4nsvr9xdbj",
        location: { name: "Cochrane Lane",
                    slug: "cochrane-lane-agfh8250ghsasfg93a524a"} }
    ]};
  },

  render: function() {
    var climbLinks = this.state.climbs.map(function (climb) {
      return (
        <li key={climb.id}><ClimbLink climb={climb} /></li>
      );
    });
    return (
      <div id="random_routes_list">
        <h3>Random Routes</h3>
        <ul>
          {climbLinks}
        </ul>
      </div>
    );
  }

});

CragProject.value('RandomRoutesList', RandomRoutesList);