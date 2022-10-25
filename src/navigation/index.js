import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import TabsNavigator from "./tabs"
import AuthNavigator from "./auth";

const AppNavigator = () => {
    
    const userId = useSelector(state => state.auth.userId)
    return (
        <NavigationContainer>
        {/* si el user id existe, muestra el tabsNavigator, si no, muestra el authNavigator */}
            { userId ? <TabsNavigator /> : <AuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppNavigator