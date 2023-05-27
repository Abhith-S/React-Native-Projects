import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import DropDownForm from "./Form/DropDownForm";
import { useState } from "react";
import PicturePage from "./Camera/PicturePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TextForm from "./Form/TextForm";
import ArtistPic from "./Camera/ArtistPic";
import PaintingPic from "./Camera/PaintingPic";

const Stack = createNativeStackNavigator();

export default function CreateNFT() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "",
          headerTransparent: true,
          headerBackVisible: false,
        }}
      >
        {/* <Stack.Screen name="TextForm" component={TextForm} />
        <Stack.Screen name="DropDownForm" component={DropDownForm} /> */}
        <Stack.Screen name="ArtistPic" component={ArtistPic} />
        <Stack.Screen name="PaintingPic" component={PaintingPic} />
      </Stack.Navigator>
    </NavigationContainer>
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
