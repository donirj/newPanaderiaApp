import React from "react";
import { View, FlatList, TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";
import { cart } from "../../constants/data";
import CartItem from "../../components/cart-item";

const Cart = ({navigation}) => {
    const total = 1400;
    
    const onDelete = (id) => {
        console.warn(id);
    }

    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />

    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
           <FlatList 
                data={cart}
                renderItem={renderItem}
                style={styles.containerList}
                keyExtractor={item => item.id.toString()}
            />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttonConfirm}
                    onPress={() => null}
                >
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total: </Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Cart;