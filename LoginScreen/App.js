import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});
