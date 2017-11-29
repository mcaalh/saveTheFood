import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

class HeartScreen extends Component {
    static navigationOptions = {
        tabBarLabel: ' ',
        showLabel: false,
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='ios-heart'
                color={ tintColor }
                size={70}
                borderWidth={2}
                borderColor="black"
                borderRadius={5}
                margin={5}
                backgroundColor = {MyColor.ORANGE}
            />
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>HeartScreen</Text>
                <Text>HeartScreen</Text>
                <Text>HeartScreen</Text>
                <Text>HeartScreen</Text>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // width: SCREEN_WIDTH,
        backgroundColor: '#F5FCFF'
    },
}

export default HeartScreen;