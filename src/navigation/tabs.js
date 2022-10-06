import React from "react";
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OrdersNavigator from "./orders";
import { colors } from "../constants/themes";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false
            }}
        >
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    title: 'Shop',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'home' : "home-outline"}
                            size={22}
                            color={colors.primary}
                        />
                    ),
                }}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={ShopNavigator}
                options={{
                    title: 'Orders',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'file-tray-full' : "file-tray-full-outline"}
                            size={22}
                            color={colors.primary}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="CartTab"
                component={ShopNavigator}
                options={{
                    title: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={focused ? 'cart' : 'cart-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs