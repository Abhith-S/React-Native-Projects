// Formik x React Native example
import React, { useState } from "react";
import {
  Button,
  TextInput,
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useDispatch } from "react-redux";
import { updateTextForm } from "../../../src/features/textForm/textFormSlice";

import AppTextInput from "../../AppTextInput";
import { Colors, FontSize, Spacing } from "../../../constants/ConstantsExports";

const TextForm = (props) => {
  const [paintingName, setPaintingName] = useState();
  const [paintingDescription, setPaintingDescription] = useState();
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = () => {

    if(paintingName && paintingDescription && price){
      dispatch(updateTextForm({ paintingName, paintingDescription, price }));

      props.navigation.replace("DropDownForm");
    }else{
      Alert.alert("Alert", "Fields cannot be empty", [
          
        { text: "OK"},
      ])
    }
    
  };

  return (
    
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.large,
              color: Colors.primary,
              //fontFamily: Font["poppins-bold"],
              marginTop: Spacing,
            }}
          >
            Fill the details below :
          </Text>
        </View>
        <View
          style={{
            marginTop: Spacing * 2,
            marginBottom: Spacing * 3,
          }}
        >
          <AppTextInput
            onChangeText={(newText) => setPaintingName(newText)}
            placeholder="Painting Name"
          />
          <AppTextInput
            onChangeText={(newText) => setPaintingDescription(newText)}
            placeholder="Painting Description"
          />

          <AppTextInput
            onChangeText={(newText) => setPrice(newText)}
            placeholder="Price"
            inputMode="numeric"
          />
        </View>

        

        <TouchableOpacity
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={handleSubmit}
        >
          <Text
            style={{
              //fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};



export default TextForm;
//export {ValuesContext};
