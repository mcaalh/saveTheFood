import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

import Slides from '../components/Slides';
// import WelcomeSlide from '../components/WelcomeSlideParallax.js';



const SLIDE_DATA = [
    { text: 'Welcome to SaveFood' , color: MyColor.GREEN},
    { text: 'Set your location to find local store' , color: MyColor.GREEN},
    { text: 'GO!', color: MyColor.GREEN }

]

class WelcomeScreen extends Component {
    // static navigationOptions = {
    //     tabBarLabel: 'Auth',
    //     tabBarVisible: false,
    // }

    onSlidesComplete = () => {
        this.props.navigation.navigate("auth");
    }

    render() {
        return (

            // {<WelcomeSlide/>}

            <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete}/>

        );
    }
}

export default WelcomeScreen;