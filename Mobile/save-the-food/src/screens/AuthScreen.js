import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';

import Login from '../components/Login'
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

class AuthScreen extends Component {
    // static navigationOptions = {
    //     tabBarLabel: 'Auth',
    //     tabBarVisible: false,
    // }
    // componentDidMount(){
    //     this.props.facebookLogin();
    //     AsyncStorage.removeItem('fb_token');
    //     this.onAuthComplete(this.props);
    // }

    // componentWillReceiveProps(nextProps) {
    //     this.onAuthComplete (nextProps);
    // }

    // onAuthComplete(props) {
    //     if (props.token) {
    //         this.props.navigation.navigate('product');
    //     }
    // }

    render() {
        return (
            <View>
                <Login/>
            </View>
        );
    }
}


// function mapStateToProps({auth}) {
//     return { token: auth.token };
// }

export default AuthScreen;