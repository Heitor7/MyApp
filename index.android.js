/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

/**
import React, {Component} from 'react';
import {
    AppRegistry,
    SectionList,
    StyleSheet,
    Text,
    View
} from 'react-native';

class MyApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

AppRegistry.registerComponent('MyApp', () => MyApp);*/

import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        return (
            <View>
                <Text>Chat with Lucy</Text>
            </View>
        );
    }
}

const MyApp = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
});

AppRegistry.registerComponent('MyApp', () => MyApp);
