import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

import StoreHeader from '../components/StoreHeader';
import StoreNav from '../components/StoreNav';
import StoreProducts from '../components/StoreProducts';

import Icon from 'react-native-vector-icons/MaterialIcons';
// import Icon as MIcon from "react-native-vectore-icons/MaterialIcons";

import {MyColor} from '../utils/constants';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class StoreScreen extends Component {
    static navigationOptions = {
        tabBarLabel: ' ',
        showLabel: false,
        tabBarIcon: ({tintColor}) => (
            <Icon
                name='store'
                color={tintColor}
                size={50}
            // backgroundColor = None
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <StoreHeader />
                <StoreNav />
                <StoreProducts />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    
}
