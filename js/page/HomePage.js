'use strict';

import React from 'react';
import {
    Text,
    View,
    Button,
    Image,
    StyleSheet,
} from 'react-native';
import {TabNavigator} from 'react-navigation';
import FoodPage from './FoodPage';
import MapPage from './MapPage';
import WorldPage from './WorldPage';

class HomePage extends React.Component {

    static navigationOptions = {
        title: 'Home',
        tabBarLabel: 'Home',
        tabBarIcon: () => (
            <Image
                source={require('../../res/images/home.png')}
                style={styles.icon}
            />
        ),
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.home}>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    icon: {
        width: 26,
        height: 26,
    }
});

const HomeTab = TabNavigator({
    Home: {
        screen: HomePage,
    },
    Food: {
        screen: FoodPage,
    },
    Map: {
        screen: MapPage,
    },
    World: {
        screen: WorldPage,
    },
}, {
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
});

export default HomeTab;