import React, { Component } from 'react';
import { View, Text, Button, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';
import Meteor, { createContainer } from 'react-native-meteor';


const SCREEN_WIDTH = Dimensions.get('window').width;

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
    handleAddItem() {
        console.log('Product: Handle Add product');
        const data = {
            name: "product",
            price: "50 euros"
        }
        Meteor.call('createNewProduct', data, (err, res) => {
            // Do whatever you want with the response
            console.log('createNewCompany', err, res);
        });
    }

    render() {
        return ( 
            <View style={styles.container}>
                <View style={styles.instructions}>
                   {this.props.products.map((item) => {
                       return <Text>{item.name}</Text>
                   })}
                </View>

                {/* Removed for brevity */}
                <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
                    <Text>Add Item</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    }
}


export default createContainer(() => {
    Meteor.subscribe('productsData');
    console.log(Meteor.collection('products').find());
    return {
        products: Meteor.collection('products').find(),
    };
}, ProductSreen);
// export default ProductSreen;