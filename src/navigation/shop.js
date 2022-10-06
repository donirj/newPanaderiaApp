import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Categories, Products, Product } from "../screens"
import { isAndroid } from "../utils";
import {colors } from '../constants/themes'

const Stack = createStackNavigator();

const ShopNavigator = ({ route }) => {
    return (
        <Stack.Navigator initialRouteName="Categories"
        screenOptions={{
            headerStyle: {
                backgroundColor: isAndroid ? colors.primary : colors.secondary,
            },
            backgroundColor: colors.text,
            headerTitleStyle: {
                fontFamily: 'Lato-Bold'
            },
        }}
        >
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    title: 'Categorias'
                }}    
                />
            <Stack.Screen 
                name="Product" 
                component={Product}
                options={({route}) => ({
                    title: route.params.name
                })} 
                />
            <Stack.Screen 
                name="Products" 
                component={Products}
                    options={({ route }) => ({
                        title: route.params.name
                    })}
                />
        </Stack.Navigator>
    )
}

export default ShopNavigator