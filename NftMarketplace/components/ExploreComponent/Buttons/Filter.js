import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Filter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.container_button}
        onPress={() => console.log("pressed")}
      >
        <FontAwesome name="sliders" size={20} color="black" style={{}} />
        <Text style={styles.input}>Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "30%",
    
  },
  container_button: {
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: 120
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Filter;
