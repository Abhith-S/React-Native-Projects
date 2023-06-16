// Formik x React Native example
import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../src/features/textForm/textFormSlice";

export const TextForm = (props) => {

  const [paintingName,setPaintingName] = useState("")
  const [paintingDescription,setPaintingDescription] = useState("")
  const [price,setPrice] = useState(0)

  const dispatch = useDispatch()
  
  const handleSubmit = ()=>{
    //console.log(paintingName,paintingDescription,price)
    dispatch(getData({paintingName,paintingDescription,price}))

    props.navigation.navigate("Finished");
  }

  //const formValue = useSelector((state)=> state.textForm.value)
  

  return (
    <View style={styles.container}>
    
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.container_input}
            onChangeText={(newText)=>setPaintingName(newText)} 
            placeholder="painting name"
          />
          <TextInput
            style={styles.container_input}
            onChangeText={(newText)=>setPaintingDescription(newText)} 
            placeholder="Painting Description"
            multiline={true}
          />
          

          <TextInput
            style={styles.container_input}
            onChangeText={(newText)=>setPrice(newText)} 
            placeholder="Price"
            inputMode="numeric"
          />

          
          <View style={styles.container_button}>
            <Button
              onPress={handleSubmit} 
              title="Submit"
            />
          </View>
        </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#F5F5F5",
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
  container_button:{
    marginTop: "8%",
    marginBottom: "16%",
    alignItems: "center",
    justifyContent:'center',
  }
});
