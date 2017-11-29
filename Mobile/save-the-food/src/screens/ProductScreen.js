import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Button, 
    Image, 
    TouchableOpacity,
    FlatList,
    Dimensions,
    TouchableWithoutFeedback,
    Animated 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductItem from '../components/ProductItem'

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

    state = {
        animatePress: new Animated.Value(1)
    }

    handleAddItem() {
        console.log('Product: Handle Add product');
        const data = {
            name: "product",
            price: "50 euros",
            picture: "http://www.fredsinc.com/wp-content/uploads/2016/10/Page-Header-Grocery-20161019.png"
        }
        Meteor.call('createNewProduct', data, (err, res) => {
            // Do whatever you want with the response
            console.log('createNewCompany', err, res);
        });
    }

    render() {
        return ( 
            <View style={styles.container}>
                <FlatList
                    data = {this.props.products}
                    renderItem={({item}) => {
                        return <ProductItem data={item}/>
                    }}
                    keyExtractor = {
                        (index) => {
                            return index
                        }
                    }
                >

                {/*
                        {this.props.products.map((item, index) => {
                            return <ProductItem data={item} key={index}/>
                    })}
                */}
                {/* Removed for brevity */}
                {/*<TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
                    <Text>Add Item</Text>
                </TouchableOpacity>*/}
                </FlatList>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: SCREEN_WIDTH,
        backgroundColor: '#F5FCFF'
    },
}


export default createContainer(() => {
    Meteor.subscribe('productsData');
    console.log(Meteor.collection('products').find());
    return {
        products: Meteor.collection('products').find(),
    };
}, ProductSreen);
// export default ProductSreen;