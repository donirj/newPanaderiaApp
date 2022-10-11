import React from "react"
import { View, Text } from "react-native"
import { styles } from "./styles"
import { products } from "../../constants/data"
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
            <Text>id {product.id}</Text>
            <Text> {product.title}</Text>
            <Text> {product.description}</Text>
            <Text>$ {product.price}</Text>
            <Text>weight {product.weight}</Text>
            <Button 
                title="Add to cart"
                onPress={addCartItem}
            />
        </View>
    )
}

export default Product