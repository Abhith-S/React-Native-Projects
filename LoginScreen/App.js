import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./src/app/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useState } from "react";
import { updateLoginToken } from "./src/features/loginToken/loginTokenSlice";

const Stack = createNativeStackNavigator();

const AuthenticationScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
        }}
        style={styles.container}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerTitle: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerTitle: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const token = useSelector((state) => state.loginToken.token);

  return (
    <NavigationContainer>
      {token ? <AuthenticatedScreens /> : <AuthenticationScreens />}
    </NavigationContainer>
  );
};

//////

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const dispatch = useDispatch();

  //const token = useSelector((state)=>state.loginToken.token)

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");

      if (storedToken) {
        dispatch(updateLoginToken({ token: storedToken }));
      }

      setIsTryingLogin(false);
    }

    fetchToken();
  }, []);

  if (!isTryingLogin) {
    SplashScreen.hideAsync();

    return <Navigation />;
  }
}

/////

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
});
