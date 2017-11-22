import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import { MyColor } from '../utils/constants';

import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import ProductScreen from '../screens/ProductScreen';
import StoreScreen from '../screens/StoreScreen';
import MapScreen from '../screens/MapScreen';
import TodoScreen from '../screens/TodoScreen';
import HeartScreen from '../screens/HeartScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReviewScreen from '../screens/ReviewScreen';

const Navigation = TabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen }, 
    main: {
        screen: TabNavigator({
            product: { screen: ProductScreen },
            store: { screen: StoreScreen },
            heart: { screen: HeartScreen },
            map: { screen: MapScreen },
            todo: { screen: TodoScreen }
        }, {
            tabBarPosition: 'bottom',
            tabBarOptions: {
                labelStyle: { fontSize: 12 }
            }
        })
    }  
}, {
    navigationOptions: {
        tabBarVisible: true 
    },
    lazyLoad: true
});

export default Navigation;