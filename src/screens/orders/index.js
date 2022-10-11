import React from "react";
import { View , FlatList} from "react-native";
import { OrderItem } from "../../components";
import { orders } from "../../constants/data";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { deleteOrder, getOrders } from "../../store/actions";
import { useFocusEffect } from "@react-navigation/native";

const Orders = ({navigation}) => {

    const onCancel = (id) => {
        console.warn(id);
    }
    const renderItem = ({item}) => <OrderItem item={item} onCancel={onCancel} />
    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
};

export default Orders;