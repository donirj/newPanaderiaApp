import React from "react"
import { View, Text, Button } from "react-native"
import { styles } from "./styles"
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions";

const Product = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.selected);

    const addCartItem = () => {
        dispatch(addToCart(product));
    }
    
    const { id, title, description, price, weight } = product || {};
    return (
        <View style={styles.container}>
            <Text>id: {id}</Text>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>${price}</Text>
            <Text>weight: {weight}</Text>
            <Button 
                title="Add to cart"
                onPress={addCartItem}
            />
        </View>
    )
};

export default Product;