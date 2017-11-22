import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';

var styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})

var swiper = React.createClass({
    render: function () {
        return (
            <Swiper style={styles.wrapper} showsButtons={true}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>
        )
    }
})

AppRegistry.registerComponent('myproject', () => swiper);




import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

import Slides from '../components/Slides';
import WelcomeSlide from '../components/WelcomeSlideParallax.js'

const SLIDE_DATA = [
    { text: 'Welcome to SaveFood', color: MyColor.GREEN },
    { text: 'Set your location to find local store', color: MyColor.GREEN },
    { text: 'GO!', color: MyColor.GREEN }

]

class WelcomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Auth',
        tabBarVisible: false,
    }

    onSlidesComplete = () => {
        this.props.navigation.navigate("auth");
    }

    render() {
        return (
            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}

export default WelcomeScreen;