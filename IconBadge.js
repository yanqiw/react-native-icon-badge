var React = require('react-native');
var sytle = require('./style');
var {
  View,
} = React;

class IconBadge extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        {
          //mian element
          this.props.MainElement
        }
        <View style={[sytle.IconBadge, (this.props.IconBadgeStyle ? this.props.IconBadgeStyle : {})]}>
          {
            // badge element
            this.props.BadgeElement
          }
        </View>
      </View>
    )
  }
}

module.exports = IconBadge;
