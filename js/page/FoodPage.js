'use strict';

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TextInput,
} from 'react-native';
import DataRepository from '../remote/DataRepository';

const URL = 'https://api.github.com/search/repositories?q='
const QUERY_STR = '&sort=stars';

class FoodPage extends React.Component {

    constructor() {
        super();
        this.dataRespository = new DataRepository();
        this.state = {
            result: ''
        }
    }

    static navigationOptions = {
        headerTitle: 'Food',
        tabBarLabel: 'Food',
        tabBarIcon: () => (
            <Image
                source={require('../../res/images/food.png')}
                style={styles.icon}
            />
        ),
        headerTitleStyle: {
            alignSelf: 'center'
        }
    };

    onLoad() {
        let url = this.getUrl(this.text);
        this.dataRespository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                })
            });
    }

    getUrl(key) {
        return URL + key + QUERY_STR;
    }

    render() {
        return (
            <View>
                <Text style={styles.tips} onPress={() => this.onLoad()}>获取数据</Text>
                <TextInput style={{height: 20, borderWidth: 1}} onChangeText={text => this.text = text}/>
                <Text style={{height: 500}}>{this.state.result}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
    tips: {
        fontSize: 29,
    }
});

export default FoodPage;