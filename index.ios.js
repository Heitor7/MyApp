/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

/**
 import React, {
  Component
} from 'react';
 import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
 import TabNavigator from 'react-native-tab-navigator';

 export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={{color:'red'}}
            title="Home"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/home.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/home.png')} />}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.home}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'food'}
            selectedTitleStyle={{color:'red'}}
            title="Food"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/food.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/food.png')} />}
            onPress={() => this.setState({ selectedTab: 'food' })}>
            <View style={styles.food}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'map'}
            selectedTitleStyle={{color:'red'}}
            title="Map"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/map.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/map.png')} />}
            onPress={() => this.setState({ selectedTab: 'map' })}>
            <View style={styles.map}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'world'}
            selectedTitleStyle={{color:'red'}}
            title="World"
            renderIcon={() => <Image style={styles.icon} source={require('./res/images/world.png')} />}
            renderSelectedIcon={() => <Image style={styles.icon} source={require('./res/images/world.png')} />}
            onPress={() => this.setState({ selectedTab: 'world' })}>
            <View style={styles.world}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  home: {
    flex: 1,
    backgroundColor: 'blue'
  },
  map: {
    flex: 1,
    backgroundColor: 'green'
  },
  food: {
    flex: 1,
    backgroundColor: 'orange'
  },
  world: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  icon: {
    width: 26,
    height: 26
  }
})

 AppRegistry.registerComponent('MyApp', () => MyApp); */

import React from 'react';
import {
    AppRegistry,
} from 'react-native';
import setup from './js/page/setup'

AppRegistry.registerComponent('MyApp', () => setup);