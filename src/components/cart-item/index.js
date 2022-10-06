import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { styles } from './styles'
import { colors } from "../../constants/themes"
import { Ionicicons } from "@expo/vector-icons"

const CarItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(item)}>
                <Ionics name="trash"/>
            </TouchableOpacity>
        </View>
    )
}

export default CarItem