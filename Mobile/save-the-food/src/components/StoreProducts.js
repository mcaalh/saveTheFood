import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import { MyColor } from '../utils/constants';

export default class StoreProduct extends Component {
    render() {
        return (
            <ScrollView> 
                <View style={styles.photoGrid}>
                    <View style={styles.photowrap}>
                        <Image style={styles.photo} source={require('../../assets/images/storePage/affiche.jpg')}/>
                    </View>
                    <View style={styles.photowrap}>
                        <Image style={styles.photo} source={require('../../assets/images/storePage/store.jpg')} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    photoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    photoWrap: {
        margin: 2,
        height: 120,
        width: (Dimensions.get('window').width / 2) - 4
    },
    photo: {
        flex: 1,
        // width: null,
        alignSelf: 'stretch'
    }
}