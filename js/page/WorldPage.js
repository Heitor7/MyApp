'use strict';

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

class WorldPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'World',
        tabBarLabel: 'World',
        tabBarIcon: () => (
            <Image
                source={require('../../res/images/world.png')}
                style={styles.icon}
            />
        ),
        headerTitleStyle: {
            alignSelf:'center'
        }
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