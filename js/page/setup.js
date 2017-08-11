'use strict';

import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';
import WelcomePage from "./WelcomePage";


const MyApp = StackNavigator({
    Welcome: {screen: WelcomePage},
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
}, {
    initialRouteName: 'Welcome',
});

class Root extends React.Component {
    render() {
        return <MyApp/>
    }
}

export default Root;