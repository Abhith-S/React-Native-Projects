import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { TextForm } from "./screens/TextForm";
import DropDownForm from "./screens/DropDownForm";
import { useState } from "react";

import store from "./src/app/store"
import { Provider } from 'react-redux'
import Finished from "./screens/Finished";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DropDownCombined from "./components/DropDownCombined";
const Stack = createNativeStackNavigator();

export default function App() {
  //const [textFormComplete, setTextFormComplete] = useState(false);
  return (

    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator
        // screenOptions={{
        //   headerTitle: "",
        //   headerTransparent: true,
        //   headerBackVisible: false,
        // }}
      >
        {/* <Stack.Screen name="TextForm" component={TextForm} /> */}

                <Stack.Screen name="DropDownCombined" component={DropDownCombined} />
    
       
        <Stack.Screen name="Finished" component={Finished}/>
       
          {/* <DropDownForm /> */}
      
          </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  container_text: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
