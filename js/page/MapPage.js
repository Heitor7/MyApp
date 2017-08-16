'use strict';

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
} from 'react-native';

class MapPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Map',
        tabBarLabel: 'Map',
        tabBarIcon: () => (
            <Image
                source={require('../../res/images/map.png')}
                style={styles.icon}
            />
        ),
        headerTitleStyle: {
            alignSelf:'center'
        }
    };

    render() {
        return (
            <View style={styles.map}></View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        backgroundColor: 'green',
    },
    icon: {
        width: 26,
        height: 26,
    },
});

export default MapPage;