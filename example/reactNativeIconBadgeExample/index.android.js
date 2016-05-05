/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import IconBadge from 'react-native-icon-badge';

class reactNativeIconBadgeExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Incon Baged example!
        </Text>
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
              <Text style={{color:'#FFFFFF'}}>1</Text>
            }
            />
        </View>
        <Text style={styles.welcome}>
          Define your icon badge style
        </Text>
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
              <Text style={{color:'#FFFFFF'}}>1</Text>
            }

            IconBadgeStyle={
              {width:30,
              height:30,
              backgroundColor: '#FF00EE'}
            }
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactNativeIconBadgeExample', () => reactNativeIconBadgeExample);
