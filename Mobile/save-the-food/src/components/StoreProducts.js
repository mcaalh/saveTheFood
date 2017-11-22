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

export default class StoreProduct extends Component {
    render() {
        return (
            <View style={styles.bottom}>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}></View>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}></View>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}></View>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}></View>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}></View>
                </View>
                <View style={styles.bottomItem}>
                    <View style={styles.bottomItemInner}></View>
                </View>
            </View>
        )
    }
}

const styles = {
    bottom: {
        height: '45%',
        backgroundColor: "#f4f4f4",
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    bottomItem: {
        width: '50%',
        height: '50%',
        padding: 5
    },
    bottomItemInner: {
        flex: 1,
        backgroundColor: "black"
    }
}