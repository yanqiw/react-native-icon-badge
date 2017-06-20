# react-native-icon-badge

[![npm](https://img.shields.io/npm/v/react-native-icon-badge.svg?style=flat-square)](https://www.npmjs.com/package/react-native-icon-badge)

Icon badge is used to create icon badge on some element, such as avatar, icon, image.... The badge is used to give some alert to user of specific element.

For example:
![demo](demo.png)


## How to use
Install package:
```bash
npm install --save react-native-icon-badge
```

Import to your app:
```javascript
...
import IconBadge from 'react-native-icon-badge';
...
```

Use the component:
```javascript
<View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'center',}}>
  <IconBadge
    MainElement={
      <View style={{backgroundColor:'#489EFE',
        width:50,
        height:50,
        margin:6
      }}/>
    }
    BadgeElement={
      <Text style={{color:'#FFFFFF'}}>{this.state.BadgeCount}</Text>
    }
    IconBadgeStyle={
      {width:30,
      height:30,
      backgroundColor: '#FF00EE'}
    }
    Hidden={this.state.BadgeCount==0}
    />
</View>
```

## API

API table

API name       | Usage
---------------|----------------------------------------
MainElement    | The background element.
BadgeElement   | The badge element, nomally it is a Text.
IconBadgeStyle | Customrized badge style.(Optional)
Hidden         | Hides badge.(Optional)


## Defaute badge style
```css
IconBadge: {
  position:'absolute',
  top:1,
  right:1,
  width:20,
  height:20,
  borderRadius:15,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FF0000'
}
```
