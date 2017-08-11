'use strict';

import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color: 'red'}}
                        title="Home"
                        renderIcon={() => <Image style={styles.icon} source={require('../../res/images/home.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require('../../res/images/home.png')}/>}
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <View style={styles.home}>
                            <Text>Hello, Chat App!</Text>
                            <Button
                                onPress={() => navigate('Chat')}
                                title="Chat with Lucy"
                            />
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'food'}
                        selectedTitleStyle={{color: 'red'}}
                        title="Food"
                        renderIcon={() => <Image style={styles.icon} source={require('../../res/images/food.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require('../../res/images/food.png')}/>}
                        onPress={() => this.setState({selectedTab: 'food'})}>
                        <View style={styles.food}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'map'}
                        selectedTitleStyle={{color: 'red'}}
                        title="Map"
                        renderIcon={() => <Image style={styles.icon} source={require('../../res/images/map.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require('../../res/images/map.png')}/>}
                        onPress={() => this.setState({selectedTab: 'map'})}>
                        <View style={styles.map}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'world'}
                        selectedTitleStyle={{color: 'red'}}
                        title="World"
                        renderIcon={() => <Image style={styles.icon} source={require('../../res/images/world.png')}/>}
                        renderSelectedIcon={() => <Image style={styles.icon}
                                                         source={require('../../res/images/world.png')}/>}
                        onPress={() => this.setState({selectedTab: 'world'})}>
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
        backgroundColor: '#F5FCFF',
    },
    home: {
        flex: 1,
    },
    map: {
        flex: 1,
        backgroundColor: 'green',
    },
    food: {
        flex: 1,
        backgroundColor: 'orange',
    },
    world: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    icon: {
        width: 26,
        height: 26,
    }
})

export default HomeScreen;