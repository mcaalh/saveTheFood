import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { MyColor } from '../utils/constants';

class ReviewScreen extends Component {
    // static navigationOptions = {
    //     title: 'Review Store',
    //     // activeTintColor: MyColor.ORANGE,
    //     header: () => {
    //         return <Button title="Settings" onPress={() => { }} />
    //         // {
    //         //     // right: (<Button title="Settings" onPress={()=>{}}/>)
    //         // };
    //     }
    // }
    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;