import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

class ProductSreen extends Component {
    // static navigationOptions = {
    //     // tabBarLabel: 'Product',
        
    //     tabBarIcon: ({ tintColor }) => (
    //         <Icon
    //             name= 'ios-nutrition'
    //             color = { tintColor }
    //             size  = {40}
    //             />
    //     ),
    // }
    render() {
        return (
            <View>
                <Text>ProductSreen</Text>
                <Text>ProductSreen</Text>
                <Text>ProductSreen</Text>
                <Text>ProductSreen</Text>
            </View>
        );
    }
}

export default ProductSreen;