var RandomRoutesList = React.createClass({

  render: function() {
    return (
      <div id="random_routes_list">
        <h4>Random Routes</h4>
        <ul>
          <li><ClimbLink name="Ra" grade="5.12a" location="Sunnyside" climb-slug="ra-h8@1cv4" location-slug="sunnyside-g3d$vc7" /></li>
          <li><ClimbLink name="Leviathan" grade="5.11b" location="Cochrane Lane" climb-slug="leviathan-8a3@jr5" location-slug="cochrane-lane-j62lk$5" /></li>
        </ul>
      </div>
    );
  }

});