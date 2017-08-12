'use strict';

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

class WorldPage extends React.Component {

    static navigationOptions = {
        title: 'World',
        tabBarLabel: 'World',
        tabBarIcon: () => (
            <Image
                source={require('../../res/images/world.png')}
                style={styles.icon}
            />
        ),
    };

    render() {
        return (
            <View style={styles.world}></View>
        );
    }
}

const styles = StyleSheet.create({
    world: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    icon: {
        width: 26,
        height: 26,
    },
});

export default WorldPage;