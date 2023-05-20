import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button,Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const Sort = ()=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity
        style={styles.container_button}
        onPress={() => console.log("pressed")}>
            <Ionicons
          name="filter"
          size={25}
          color="black"
          style={{  }}
        />
      </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginLeft: "5%",
      },
      
})

export default Sort;