import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

class HeartScreen extends Component {
    // static navigationOptions = {
    //     tabBarLabel: ' ',
    //     showLabel: false,
    //     tabBarIcon: () => (
    //         <Icon
    //             name='ios-heart-outline'
    //             color={MyColor.ORANGE}
    //             size={50}
    //             // backgroundColor = None
    //         />
    //     ),
    // }
    render() {
        return (
            <View>
                <Text>HeartScreen</Text>
                <Text>HeartScreen</Text>
                <Text>HeartScreen</Text>
                <Text>HeartScreen</Text>
            </View>
        );
    }
}

export default HeartScreen;