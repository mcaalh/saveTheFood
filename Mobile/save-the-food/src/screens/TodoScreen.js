import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

class TodoScreen extends Component {
    static navigationOptions = {
        // tabBarLabel: 'Product',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='ios-paper'
                color={ tintColor }
                size={40}
            />
        ),
    }
    render() {
        return (
            <View>
                <Text>TodoScreen</Text>
                <Text>TodoScreen</Text>
                <Text>TodoScreen</Text>
                <Text>TodoScreen</Text>
            </View>
        );
    }
}

export default TodoScreen;