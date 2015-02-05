var ClimbLink = React.createClass({

  render: function() {
    return (
      <a href="/#/climb/{this.props.climbSlug}" title="{this.props.name} - {this.props.grade} at {this.props.location} on RockClimbCanada.com">{this.props.name} - {this.props.grade}</a> at <a href="/#/location/{this.props.locationSlug}" title="{this.props.location} on RockClimbCanada.com">{this.props.location}</a> 
    );
  }

});