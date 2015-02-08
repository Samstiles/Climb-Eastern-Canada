var SublocationLink = React.createClass({displayName: "SublocationLink",

  render: function() {
    return (
      React.createElement("span", null, React.createElement("a", {href: '/#/sublocation/' + this.props.sublocation.slug, title: this.props.sublocation.name + ' (' + this.props.sublocation.location.name + ') on RockClimbCanada.com'}, this.props.sublocation.name), " (", React.createElement("a", {href: '/#/location/' + this.props.sublocation.location.slug, title: this.props.sublocation.location.name + ' on RockClimbCanada.com'}, this.props.sublocation.location.name), ")")
    );
  }

});

CragProject.value('SublocationLink', SublocationLink);