import React from "react";
import { View, FlatList, TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";
import { cart } from "../../constants/data";
import CartItem from "../../components/cart-item";
import { useSelector, useDispatch } from "react-redux";
import { confirmOrder, removeFromCart } from "../../store/actions";

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)

    
    const onDelete = (id) => {
        //recibe el id para borrar
        dispatch(removeFromCart(id))
        console.warn(id);
    }

    const onConfirm = () => {
        dispatch(confirmOrder(items, total))
    }

    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />

    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
           <FlatList 
                data={items}
                renderItem={renderItem}
                style={styles.containerList}
                keyExtractor={item => item.id.toString()}
            />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={items.length === 0 ? styles.disabledButtonConfirm : styles.buttonConfirm}
                    onPress={(onConfirm)}
                    disabled={items.length === 0}
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