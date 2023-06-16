// Formik x React Native example
import React, { useState, createContext } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateTextForm } from "../../../src/features/textForm/textFormSlice";

const TextForm = (props) => {
  const [paintingName, setPaintingName] = useState();
  const [paintingDescription, setPaintingDescription] = useState();
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(updateTextForm({ paintingName, paintingDescription, price }));

    props.navigation.navigate("DropDownForm");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.container_text}>Fill the details below : </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.container_input}
          onChangeText={(newText) => setPaintingName(newText)}
          placeholder="Painting name"
        />
        <TextInput
          style={styles.container_input}
          onChangeText={(newText) => setPaintingDescription(newText)}
          placeholder="Painting Description"
          
        />

        <TextInput
          style={styles.container_input}
          onChangeText={(newText) => setPrice(newText)}
          placeholder="Price"
          inputMode="numeric"
        />

        <View style={styles.container_button}>
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginBottom: "6%",
  },
  inputContainer: {
    marginHorizontal: 20,
  },
  container_input: {
    marginVertical: 16,
    fontSize: 15,
    padding: 10,
    flexDirection: "row",

    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container_button: {
    marginTop: "8%",
    marginBottom: "16%",
    alignItems: "center",
    justifyContent: "center",
  },
  container_text: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TextForm;
//export {ValuesContext};
