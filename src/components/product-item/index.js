import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item} onPress={() => onSelected(item)}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.price}>$ {item.price}</Text>
                    <Text style={styles.detail}>weight: {item.weight}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ProductItem;