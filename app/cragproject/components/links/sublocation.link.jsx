var SublocationLink = React.createClass({

  render: function() {
    return (
      <span><a href={'/#/sublocation/' + this.props.sublocation.slug} title={this.props.sublocation.name + ' (' + this.props.sublocation.location.name + ') on RockClimbCanada.com'}>{this.props.sublocation.name}</a> (<a href={'/#/location/' + this.props.sublocation.location.slug} title={this.props.sublocation.location.name + ' on RockSublocationCanada.com'}>{this.props.sublocation.location.name}</a>)</span>
    );
  }

});

CragProject.value('SublocationLink', SublocationLink);