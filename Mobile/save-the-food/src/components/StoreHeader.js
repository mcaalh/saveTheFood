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

export default class StoreHeader extends Component {
    render() {
        return (
            
                <Image style={styles.top} source={require('../../assets/images/storePage/store0.jpg')}>
                </Image>
            
        )
    }
}

const styles = {
    top: {
        height: '40%',
        width: null,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyColor.GREEN,
    },
    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: MyColor.ORANGE,
        backgroundColor: '#0eee0e',
    },
}