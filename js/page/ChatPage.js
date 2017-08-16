'use strict';

import React from 'react';
import {
    Text,
    View,
    Image,
} from 'react-native';

class ChatPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Chat with Lucy',
        headerRight: <View>
            <Image style={{marginRight: 20}} source={require('../../res/images/collect.png')}/>
        </View>,
        headerTitleStyle: {
            alignSelf:'center'
        }
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

export default ChatPage;