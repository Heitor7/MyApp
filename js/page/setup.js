'use strict';

import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomePage from './HomePage';
import ChatPage from './ChatPage';
import WelcomePage from "./WelcomePage";

class Root extends React.Component {
    render() {
        return <MyApp/>
    }
}

const MyApp = StackNavigator({
    Welcome: {screen: WelcomePage},
    Home: {screen: HomePage},
    Chat: {screen: ChatPage},
}, {
    initialRouteName: 'Welcome',
});

export default Root;