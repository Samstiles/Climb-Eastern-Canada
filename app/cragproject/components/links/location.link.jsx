var LocationLink = React.createClass({

  render: function() {
    return (
      <span><a href={'/#/location/' + this.props.location.slug} title={this.props.location.name + ' on RockClimbCanada.com'}>{this.props.location.name}</a></span>
    );
  }

});

CragProject.value('LocationLink', LocationLink);