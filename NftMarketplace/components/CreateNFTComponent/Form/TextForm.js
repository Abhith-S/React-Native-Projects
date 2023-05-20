// Formik x React Native example
import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import { Formik } from "formik";
import axios from "axios";

const URL = "http://10.10.32.79:5000/api/products";

export default TextForm = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.container_text}>Fill the details below : </Text>
      <Formik
        initialValues={{ paintingName: "" }}
        onSubmit={async(values) =>{
          console.log(values)
          try{const response = await axios.post(URL,values);
          console.log(response)}
          catch(err){
            console.log(err);
          }
        } }
      >
        {({ handleChange, handleSubmit, values }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.container_input}
              onChangeText={handleChange("paintingName")}
              value={values.paintingName}
              placeholder="Paining Name"
            />
            <TextInput
              style={styles.container_input}
              onChangeText={handleChange("paintingDescription")}
              value={values.paintingDescription}
              placeholder="Painting Description"
              multiline={true}
            />
            {/* <TextInput
            style={styles.container_input}
            onChangeText={handleChange("artistName")}
            value={values.artistName}
            placeholder="Artist Name"
          />
          <TextInput
            style={styles.container_input}
            onChangeText={handleChange("artistDetails")}
            value={values.artistDetails}
            placeholder="Tell us more about the Artist......"
            multiline={true}
          />
          <TextInput
            style={styles.container_input}
            onChangeText={handleChange("creationDate")}
            value={values.creationDate}
            placeholder="Creation Date "
          /> */}

            <TextInput
              style={styles.container_input}
              onChangeText={handleChange("price")}
              value={values.price}
              placeholder="Price"
              inputMode="numeric"
              keyboardType="number-pad"
            />

            {/* <TextInput
            style={styles.container_input}
            onChangeText={handleChange("links")}
            value={values.links}
            placeholder="Social Media Link"
            inputMode="url"
            textContentType="URL"
          /> */}
            <View style={styles.container_button}>
              <Button
                onPress={()=>{
                  handleSubmit()
                  props.navigation.navigate("DropDownForm");
                }
                } 
                title="Submit"
              />
            </View>
          </View>
        )}
      </Formik>
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
