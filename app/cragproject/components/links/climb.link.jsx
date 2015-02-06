var ClimbLink = React.createClass({

  render: function() {
    return (
      <span><a href={"/#/climb/" + this.props.climb.slug} title={this.props.climb.name + " - " + this.props.climb.grade + " at " + this.props.climb.location.name + " on RockClimbCanada.com"}>{this.props.climb.name} - {this.props.climb.grade}</a> at <a href={"/#/location/" + this.props.climb.location.slug} title={this.props.climb.location.name + " on RockClimbCanada.com"}>{this.props.climb.location.name}</a></span>
    );
  }

});

CragProject.value('ClimbLink', ClimbLink);