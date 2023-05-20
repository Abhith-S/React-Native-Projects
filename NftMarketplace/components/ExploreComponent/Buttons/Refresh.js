import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button,Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";


const Refresh = ()=>{
    return(
        <View style={styles.container}>
            <TouchableOpacity
        style={styles.container_button}
        onPress={() => console.log("pressed")}>
            <FontAwesome
          name="refresh"
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
        marginLeft: "9%",
      },
      
})

export default Refresh;