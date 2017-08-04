'use strict';

import React from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
        headerRight: <View>
            <Image source={require('../../res/images/collect.png')} />
        </View>,
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

export default ChatScreen;