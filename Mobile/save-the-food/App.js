import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Meteor from 'react-native-meteor';

import store from './store';
import  Navigation from './src/config/routes';

const SERVER_URL = 'ws://localhost:3030/websocket';

export default class App extends Component {

  componentWillMount() {
    Meteor.connect(SERVER_URL);
  }
  
  render() {
    return (
      
          <Navigation />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
