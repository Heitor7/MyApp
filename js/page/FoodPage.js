'use strict';

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    Text,
    ListView,
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import DataRemote from '../store/DataRemote';
import DataCell from '../common/DataCell';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';

class FoodPage extends React.Component {

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

    render() {
        return (
            <View style={styles.container}>
                <ScrollableTabView renderTabBar={() => <ScrollableTabBar/>}>
                    <PopularTab tabLabel="Java">JAVA</PopularTab>
                    <PopularTab tabLabel="iOS">IOS</PopularTab>
                    <PopularTab tabLabel="Android">android</PopularTab>
                    <PopularTab tabLabel="JavaScript">js</PopularTab>
                </ScrollableTabView>
            </View>
        );
    }
}

class PopularTab extends React.Component {
    constructor() {
        super();
        this.dataRemote = new DataRemote();
        this.state = {
            result: '',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let url = URL + this.props.tabLabel + QUERY_STR;
        this.dataRemote.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(result.items)
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    renderRow(data) {
        return <DataCell data={data}/>
    }

    render() {
        return (
            <View>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(data) => this.renderRow(data)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        width: 26,
        height: 26,
    },
    tips: {
        fontSize: 29,
    }
});

export default FoodPage;