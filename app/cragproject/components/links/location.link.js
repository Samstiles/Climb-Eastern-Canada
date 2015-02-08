var LocationLink = React.createClass({displayName: "LocationLink",

  render: function() {
    return (
      React.createElement("span", null, React.createElement("a", {href: '/#/location/' + this.props.location.slug, title: this.props.location.name + ' on RockClimbCanada.com'}, this.props.location.name))
    );
  }

});

CragProject.value('LocationLink', LocationLink);