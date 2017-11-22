import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <ImageBackground style={styles.headerBackground} source={require('../../assets/images/storePage/affiche.jpg')}>
                <View style={styles.header}>
                    <Text style={styles.name}>
                        SUPERMRKT
                    </Text>
                    <Text style={styles.category}>
                        Un SUPERMRKT super Eco
                    </Text>
                </View>
            </ImageBackground>
        )
    }
}

const styles = {
    headerBackground: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    profilepicWrap: {
        width: 180,
        height: 180,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 16
    },
    profilepic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4,
    },
    name: {
        marginTop: 20,
        fontSize: 14,
        color: '#0394c0',
        fontStyle: 'italic' 
    }
}