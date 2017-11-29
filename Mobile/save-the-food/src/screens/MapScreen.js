import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

class MapScreen extends Component {
    static navigationOptions = {
        // tabBarLabel: 'Product',
        tabBarIcon: ({ tintColor}) => (
            <Icon
                name='ios-map'
                color={tintColor}
                size={40}
            />
        ),
    }
    render() {
        return (
            <View>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
            </View>
        );
    }
}

export default MapScreen;