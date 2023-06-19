//react packages
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

//external packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

//components imports
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
} from "./components/ComponentsExport";
import Dashboard from "./components/Dashboard";
import store from "./src/app/store";
import { updateLoginToken } from "./src/features/loginToken/loginTokenSlice";

const Stack = createNativeStackNavigator();

const AuthenticationScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
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
    </Stack.Navigator>
  );
};

const AuthenticatedScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
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

function Root() {

  const [isTryingLogin, setIsTryingLogin] = useState(true);
  const dispatch = useDispatch();


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

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
