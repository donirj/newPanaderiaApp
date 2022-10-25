import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react"

import { Auth } from "../screens/index"

const Stack = createNativeStackNavigator()

const AuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Auth"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Auth"
                component={Auth}
            />
        </Stack.Navigator>
    )
}

export default AuthNavigator;
