//react imports
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

//external packages
import {
  SelectList,MultipleSelectList
} from "react-native-dropdown-select-list";
import { Ionicons } from "@expo/vector-icons";
//redux
import { useDispatch } from "react-redux";
import { updateDropDownForm } from "../../../src/features/dropDownForm/dropDownFormSlice";

//component import
import MultiPicker from "./MutiPickerComponent";
import { Colors, Spacing, FontSize } from "../../../constants/ConstantsExports";

//data
const subjectData = [
  { key: "1", value: "pop culture" },
  { key: "2", value: "history" },
  { key: "3", value: "LGBTQ" },
  { key: "4", value: "life" },
  { key: "5", value: "nature" },
  { key: "6", value: "other" },
];

const styleData = [
  { key: "1", value: "abstract" },
  { key: "2", value: "impressionism" },
  { key: "3", value: "nouveau" },
  { key: "4", value: "realism" },
  { key: "5", value: "fine art" },
  { key: "6", value: "other" },
];

const mediumData = [
  { key: "1", value: "acrylic" },
  { key: "2", value: "oil" },
  { key: "3", value: "watercolor" },
  { key: "4", value: "ink" },
  { key: "5", value: "pencil" },
  { key: "6", value: "other" },
];

const materialData = [
  { key: "1", value: "canvas" },
  { key: "2", value: "paper" },
  { key: "3", value: "wood" },
  { key: "4", value: "soft" },
  { key: "5", value: "glass" },
  { key: "6", value: "other" },
];

const sizeData = [
  { key: "1", value: "small" },
  { key: "2", value: "medium" },
  { key: "3", value: "large" },
  { key: "4", value: "oversized" },
];

const orientationData = [
  { key: "1", value: "landscape" },
  { key: "2", value: "portrait" },
  { key: "3", value: "square" },
];

export default DropDownForm = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedMedium, setSelectedMedium] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedOrientation, setSelectedOrientation] = useState("");

  //redux
  const dispatch = useDispatch();

  //form submit 
  const handleSubmit = ()=>{

  
    if(selectedSubject && selectedStyle && selectedMedium && selectedMaterial && selectedSize && selectedOrientation){
      Alert.alert(
        "You have selected : ",
        `Subject: ${selectedSubject}\n\nStyle: ${selectedStyle}\n\nMedium: ${selectedMedium}\n\nMaterial: ${selectedMaterial}\n\nSize: ${selectedSize}\n\nOrientation: ${selectedOrientation}`,
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              dispatch(
                updateDropDownForm({
                  subject: selectedSubject,
                  style: selectedStyle,
                  medium: selectedMedium,
                  material: selectedMaterial,
                  size: selectedSize,
                  orientation: selectedOrientation,
                })
              );
  
              navigation.replace("ArtistPaintingPic");
            },
          },
        ]
      );
    }else{
      Alert.alert("Alert", "Fields cannot be empty", [
          
        { text: "OK"},
      ])
    }

    
  }

  return (
    <ScrollView
      style={{
        padding: Spacing * 2,
      }}
      overScrollMode="never"
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
            //marginTop: Spacing,
          }}
        >
          Fill the details below :
        </Text>
      </View>

      <View style={styles.container_box}>
        <Text style={styles.container_box_text}>Subject</Text>
        <MultipleSelectList
          setSelected={setSelectedSubject}
          data={subjectData}
          save="value"
          label=""
          closeicon={<Ionicons name="checkmark" size={30} />}
          dropdownStyles={{backgroundColor:Colors.gray,}}
          //dropdownTextStyles={{color:Colors.backgroundDark}}
        />
        {/* <MultiPicker
          items={subjectData}
          placeholder="Select Subjects"
          //icon={require('./new.jpg')}
          selectedItems={selectedSubject} //
          onChangeItems={setSelectedSubject}
        /> */}
      </View>

      <View style={styles.container_box}>
        <Text style={styles.container_box_text}>Style</Text>
        <MultipleSelectList
          setSelected={setSelectedStyle}
          data={styleData}
          save="value"
          label=""
          closeicon={<Ionicons name="checkmark" size={30} />}
        />

        {/* <MultiPicker
          items={styleData} // arra => [{id: '1', name: 'Apple'}, ...]
          placeholder="Select Styles"
          //icon={require('../../../Assets/Images/horse-db.png')}
          selectedItems={selectedStyle} //
          onChangeItems={setSelectedStyle}
        /> */}
      </View>

      <View style={styles.container_box}>
        <Text style={styles.container_box_text}>Medium</Text>
        <SelectList
          setSelected={setSelectedMedium}
          data={mediumData}
          save="value"
          placeholder="Select Medium"
        />
      </View>

      <View style={styles.container_box}>
        <Text style={styles.container_box_text}>Material</Text>
        <SelectList
          setSelected={setSelectedMaterial}
          data={materialData}
          save="value"
          placeholder="Select Material"
        />
      </View>

      {/* <View style={styles.container_box}>
        <Text>Quality</Text>
        <SelectList
          setSelected={setSelectedQuality}
          data={qualityData}
          save="value"
          search={false}
        />
      </View> */}

      {/* <View style={styles.container_box}>
        <Text>Original</Text>
        <SelectList
          setSelected={setSelectedOriginal}
          data={originalData}
          save="value"
          search={false}
        />
      </View> */}

      <View style={styles.container_box}>
        <Text style={styles.container_box_text}>Size</Text>
        <SelectList
          setSelected={setSelectedSize}
          data={sizeData}
          save="value"
          search={false}
          placeholder="Select Size"
        />
      </View>

      {/* <View style={styles.container_box}>
        <Text>Colors</Text>
        <MultipleSelectList
          setSelected={setSelectedColors}
          data={colorData}
          save="value"
          label=""
          closeicon={<Ionicons name="checkmark" size={30} />}
        />
      </View> */}

      <View style={styles.container_box}>
        <Text style={styles.container_box_text}>Orientation</Text>
        <SelectList
          setSelected={setSelectedOrientation}
          data={orientationData}
          save="value"
          search={false}
          placeholder="Select Orientation"
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container_box: {
    marginTop: Spacing * 1,
    marginBottom: Spacing * 1,
  },
  container_box_text: {
    fontSize: FontSize.large,
    color: Colors.lightPrimary,
    //fontFamily: Font["poppins-bold"],
    marginTop: Spacing,
    marginBottom: Spacing
  },
});
