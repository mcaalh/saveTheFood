import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage,
    ImageBackground
} from 'react-native';
import { MyColor } from '../utils/constants';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    componentDidMount = () => {
        this._loadInitialState().done();
    }
    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null) {
            this.props.navigation.navigate('map');
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.wrapper}>

                <View style={styles.container}>
                
                    <Text style={styles.header}>- LOGIN -</Text>
                    <TextInput 
                        style={styles.textInput} placeholder='username'
                        onChangeText={ (username) => this.setState({username}) }
                        underlineColorAndroid='transparent'
                    />
                    <TextInput
                        style={styles.textInput} placeholder='password'
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={ () => navigate('map')}
                        // onPress={this.login}
                        >
                        <Text>Log in</Text>
                    </TouchableOpacity>
                    
                </View>
            </KeyboardAvoidingView>
        );
    }
    login = () => {

        alert(this.state.username);
        

        // fetch('http://127.0.0.1:8080/users', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         username: this.state.username,
        //         password: this.state.password,
        //     })
        // })
        // .then((response) => response.json())
        // .then (res => {
        //     if (res.success === true) {
        //         AsyncStorage.setItem('user', res.user);
        //         this.props.navigation.navigate('map');
        //     } else {
        //         alert(res.message);
        //     }
        // })
        // .done();
    }
}

const styles = {
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: MyColor.ORANGE,
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: MyColor.ORANGE,
        fontWeight: 'bold',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        color: 'black',
        backgroundColor: 'white',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: MyColor.GREEN,
        padding: 20,
        alignItems: 'center',
    },
}