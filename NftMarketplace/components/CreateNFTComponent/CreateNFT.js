import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DropDownForm from "./Form/DropDownForm";
import TextForm from "./Form/TextForm";
import ArtistPaintingPic from "./Camera/ArtistPaintingPic";
import FullPaintingPic from "./Camera/FullPaintingPic";
import RightPaintingPic from "./Camera/RightPaintingPic";
import LeftPaintingPic from "./Camera/LeftPaintingPic";
import Finished from "./Finished"
import store from "../../src/app/store"
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

export default function CreateNFT() {
  return (
    <Provider store={store}>
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
          headerBackVisible: false,
        }}
      >
        <Stack.Screen name="TextForm" component={TextForm} />
        <Stack.Screen name="DropDownForm" component={DropDownForm} />
        {/* <Stack.Screen name="ArtistPaintingPic" component={ArtistPaintingPic} /> */}
        
        <Stack.Screen name="FullPaintingPic" component={FullPaintingPic} />
        <Stack.Screen name="LeftPaintingPic" component={LeftPaintingPic}/>
        <Stack.Screen name="RightPaintingPic" component={RightPaintingPic}/>
        <Stack.Screen name="Finished" component={Finished}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    flex: 1,
  },
  textFormContainer: {
    marginTop: 3,
    flex: 1,
  },
  dropFormContainer: {
    marginTop: 3,
    flex: 1,
    backgroundColor: "#d9dbda",
  },
  container_text: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
