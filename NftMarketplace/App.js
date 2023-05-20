import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

import { Header } from "./components/ComponentsExport";
import Dashboard from "./components/Dashboard";
import WelcomeScreen from "./components/LoginComponent/WelcomeScreen";
import LoginScreen from "./components/LoginComponent/LoginScreen";
import RegisterScreen from "./components/LoginComponent/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const screenHeight = Dimensions.get("screen").height;

const setHeight = (height) => (screenHeight / 100) * height;

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false ,contentStyle:{backgroundColor: "white",} }}
          style={styles.container}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerTitle:"" ,headerTransparent:true}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerTitle:"" ,headerTransparent:true}}/>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerTitle:"" ,headerTransparent:true}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
