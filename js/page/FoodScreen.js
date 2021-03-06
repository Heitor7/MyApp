'use strict';

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

class FoodScreen extends React.Component {

    static navigationOptions = {
        title: 'Food',
        tabBarLabel: 'Food',
        tabBarIcon: () => (
            <Image
                source={require('../../res/images/food.png')}
                style={styles.icon}
            />
        ),
    };

    render() {
        return (
            <View style={styles.food}></View>
        );
    }
}

const styles = StyleSheet.create({
    food: {
        flex: 1,
        backgroundColor: 'orange',
    },
    icon: {
        width: 26,
        height: 26,
    },
});

export default FoodScreen;