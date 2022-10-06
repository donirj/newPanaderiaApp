import React from "react"
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import AppNavigator from "./src/navigation";

export default function App() {
  const [loaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf')
  })

  if(!loaded) {
    return <ActivityIndicator/>
  }

  return (
    <AppNavigator/>
  );
}

