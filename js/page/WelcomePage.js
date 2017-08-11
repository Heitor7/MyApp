'use strict';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    TouchableHighlight,
    Text,
} from 'react-native';
import GuideUtil from '../util/GuideUtil';
import {NavigationActions} from 'react-navigation'

class WelcomePage extends React.Component {

    constructor() {
        super();
    };

    render() {
        const {navigate} = this.props.navigation;
        const onButtonPress = () => {
            navigate('Home');
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home'})
                ]
            })
            this.props.navigation.dispatch(resetAction)
        };
        return (
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}>
                <View>
                    <Image source={require('../../res/images/guide.png')} style={styles.backgroundImage}/>
                </View>
                <View>
                    <Image source={require('../../res/images/guide.png')} style={styles.backgroundImage}/>
                </View>
                <View>
                    <Image source={require('../../res/images/guide.png')} style={styles.backgroundImage}>
                        <TouchableHighlight style={styles.button} underlayColor={'white'} onPress={onButtonPress}>
                            <Text style={styles.btnText}>
                                Start MyApp
                            </Text>
                        </TouchableHighlight>
                    </Image>
                </View>
            </ScrollView>
        );
    }
};

var styles = StyleSheet.create({
    contentContainer: {
        width: GuideUtil.size.width * 3,
        height: GuideUtil.size.height,
    },
    backgroundImage: {
        width: GuideUtil.size.width,
        height: GuideUtil.size.height,
    },
    button: {
        position: 'absolute',
        height: 50,
        bottom: 200,
        alignSelf: 'center',
    },
    btnText: {
        fontSize: 18
    },
});

export default WelcomePage;