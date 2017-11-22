import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import StoreHeader from '../components/StoreHeader';
import StoreNav from '../components/StoreNav';
import StoreProducts from '../components/StoreProducts';

import {MyColor} from '../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class StoreScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StoreHeader/>
                <StoreNav />
                <StoreProducts />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#f4f4f4"
    },
}
