import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
import { MyColor } from '../utils/constants';

export default class StoreNav extends Component {
    render() {
        return (
            <View style={styles.bar}>
                <View style={[styles.barItem, styles.barSeparator]}>
                    <Text style={styles. barTop}>Supermarket Super</Text>
                    <Text style={styles.barBottom}> 112 rue super, Paris - <Text style={styles.textOrange}> 7km </Text></Text>
                </View>
                <View style={[styles.barItem]}>
                    <Text style={styles.barTop}>Menu</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    bar: {
        // flex: 1,
        // position: 'absolute',
        height: '10%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 20,
        // paddingRight: 20,
        // left: 30,
        // right: 30,
        // bottom: -15
    },
    textOrange: {
        color: MyColor.ORANGE,
    },
    barTop:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
    },
    barBottom: {
        paddingLeft: 20,
    },
    barSeparator: {
        borderBottomWidth: 1,
        width: '100%',
    }
}