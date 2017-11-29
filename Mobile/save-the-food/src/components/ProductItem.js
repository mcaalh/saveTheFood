import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity,
    Dimensions,
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { MyColor } from '../utils/constants';

class ProductItem extends Component {

    state = {
        animatePress: new Animated.Value(1)
    }

    animateIn() {
        Animated.timing(this.state.animatePress, {
            toValue: 0.8,
            duration: 400
        }).start()
    }
    animateOut() {
        Animated.timing(this.state.animatePress, {
            toValue: 1,
            duration: 400
        }).start()
    }

    render() {
        return (
            <TouchableWithoutFeedback
                onPressIn={() => this.animateIn()}
                onPressOut={() => this.animateOut()}
            >
                <Animated.View style={{
                    margin: 5,
                    transform: [
                        {
                            scale: this.state.animatePress
                        }
                    ]
                }}>
                    <Image style={styles.imgContent} source={{ uri: this.props.data.picture }}>
                    </Image>
                    <Text>{this.props.data.price}</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    imgContainer: {
        margin: 5,
        width: 200,
        height: 100,
        backgroundColor: MyColor.ORANGE,
        paddingBottom: 2,

    },
    imgContent: {
        flex: 1,
        height: 100
    }
}

// export default createContainer(() => {
//     Meteor.subscribe('productsData');
//     console.log(Meteor.collection('products').find());
//     return {
//         products: Meteor.collection('products').find(),
//     };
// }, ProductSreen);
export default ProductItem;