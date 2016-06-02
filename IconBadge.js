var React = require('react');
var sytle = require('./style');
import {
  View,
} from 'react-native';

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
