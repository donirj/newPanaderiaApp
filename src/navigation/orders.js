import React from "react";
import { isAndroid } from "../utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens"
import { colors } from "../constants/themes"

const Stack = createNativeStackNavigator()

const OrdersNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Cart"
        screenOptions={{
            headerStyle: {
                backgroundColor: isAndroid ? colors.primary : colors.secondary,
            },
            headerTintColor: colors.text,
            headerTitleStyle: {
                fontFamily: "Lato-Bold",
            },
        }}
        >
            <Stack.Screen
            name="Cart"
            component={Cart}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator