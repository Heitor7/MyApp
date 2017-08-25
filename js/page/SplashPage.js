import React from 'react';
import {
    Animated,
} from 'react-native';
import {NavigationActions} from 'react-navigation'
import DataCache from '../store/DataCache';
import GuideUtil from '../util/GuideUtil';

export default class SplashPage extends React.Component {

    constructor() {
        super();
        this.dataCache = new DataCache();
        this.routeName = '';
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            Animated.timing(
                this.state.bounceValue, {toValue: 1.2, duration: 1000}
            ).start();
            this.dataCache.getCacheData('isFirst').then((result) => {
                if (result === null || result === '') {
                    this.routeName = 'Welcome';
                    this.dataCache.setCacheData('isFirst', 'true');
                } else {
                    this.routeName = 'Home';
                }
                const resetAction = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: this.routeName})
                    ]
                });
                this.props.navigation.dispatch(resetAction)
            }).catch((error) => {
                console.error(error);
            });
        }, 1000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <Animated.Image
                style={{
                    width: GuideUtil.size.width,
                    height: GuideUtil.size.height,
                    transform: [{scale: this.state.bounceValue}]
                }}
                source={require('../../res/images/start.png')}
            />
        );
    }
}