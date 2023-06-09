import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { updateDropDownForm } from "../src/features/dropDownForm/dropDownFormSlice";

export default DropDownCombined = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState([]);
  const subjectData = [
    { key: "1", value: "Abstract" },
    { key: "2", value: "Landscape" },
    { key: "3", value: "Portrait" },
    { key: "4", value: "People" },
    { key: "5", value: "Animal" },
    { key: "6", value: "Nature" },
    { key: "7", value: "Life" },
    { key: "8", value: "Seascape" },
    { key: "9", value: "Architecture" },
    { key: "10", value: "Culture" },
    { key: "11", value: "Classical" },
    { key: "12", value: "Family" },
    { key: "13", value: "Health & Beauty" },
  ];

  const [selectedStyle, setSelectedStyle] = useState([]);
  const styleData = [
    { key: "1", value: "Abstract" },
    { key: "2", value: "Fine Art" },
    { key: "3", value: "Modern Abstract" },
    { key: "4", value: "Expressionism" },
    { key: "6", value: "Impressionism" },
    { key: "7", value: "Realism" },
    { key: "8", value: "Conceptual" },
    { key: "9", value: "Minimalism" },
    { key: "10", value: "Portraiture" },
    { key: "11", value: "Illustration" },
    { key: "12", value: "Other" },
  ];

  const [selectedMedium, setSelectedMedium] = useState("");
  const mediumData = [
    { key: "1", value: "Acrylic" },
    { key: "2", value: "Oil" },
    { key: "3", value: "Watercolor" },
    { key: "4", value: "Ink" },
    { key: "5", value: "Spray Paint" },
    { key: "6", value: "Digital" },
    { key: "7", value: "Graphite" },
    { key: "8", value: "Watercolor" },
    { key: "9", value: "Enamel" },
    { key: "10", value: "Paint" },
    { key: "11", value: "Pencil" },
    { key: "13", value: "Ballpoin Pen" },
    { key: "14", value: "Black and White" },
  ];

  const [selectedMaterial, setSelectedMaterial] = useState("");
  const materialData = [
    { key: "1", value: "Canvas" },
    { key: "2", value: "Paper" },
    { key: "3", value: "Wood" },
    { key: "4", value: "Cardboard" },
    { key: "5", value: "Plastic" },
    { key: "6", value: "Soft (Yarn, Cotton, Fabric)" },
    { key: "7", value: "Aluminium" },
    { key: "8", value: "Glass" },
    { key: "9", value: "Carbon Fibre" },
    { key: "10", value: "Canvas Board" },
    { key: "11", value: "Mixed Media" },
    { key: "12", value: "Other" },
  ];

  const [selectedQuality, setSelectedQuality] = useState("");
  const qualityData = [
    { key: "1", value: "Museum quality" },
    { key: "2", value: "Masterpiece" },
    { key: "3", value: "Fine" },
    { key: "4", value: "Elite" },
    { key: "4", value: "Iconic" },
  ];

  const [selectedOriginal, setSelectedOriginal] = useState("");
  const originalData = [
    { key: "1", value: "One of a Kind" },
    { key: "2", value: "Limited Edition" },
    { key: "3", value: "One and Only" },
    { key: "4", value: "Rare" },
    { key: "4", value: "Common" },
  ];

  const [selectedSize, setSelectedSize] = useState("");
  const sizeData = [
    { key: "1", value: "Small" },
    { key: "2", value: "Medium" },
    { key: "3", value: "Large" },
    { key: "4", value: "Oversized" },
  ];

  const [selectedOrientation, setSelectedOrientation] = useState("");
  const orientationData = [
    { key: "1", value: "Horizontal" },
    { key: "2", value: "Vertical" },
    { key: "3", value: "Square" },
  ];

  const [selectedColors, setSelectedColors] = useState([]);
  const colorData = [
    { key: "1", value: "Red" },
    { key: "2", value: "Blue" },
    { key: "3", value: "Green" },
    { key: "4", value: "Black" },
    { key: "5", value: "Orange" },
    { key: "6", value: "White" },
    { key: "7", value: "Grey" },
    { key: "8", value: "Violet" },
    { key: "9", value: "Yellow" },
    { key: "10", value: "Brown" },
    { key: "11", value: "Golden" },
    { key: "12", value: "Silver" },
    { key: "13", value: "Aquamarine" },
    { key: "14", value: "Dark Slate Blue" },
  ];

  dispatch = useDispatch();

  return (
    <ScrollView style={styles.container} overScrollMode="never">
      <View style={styles.container_box}>
        <Text>Subject</Text>
        <MultipleSelectList
          setSelected={setSelectedSubject}
          data={subjectData}
          save="value"
          label=""
          closeicon={<Ionicons name="checkmark" size={30} />}
        />
      </View>

      <View style={styles.container_box}>
        <Text>Style</Text>
        <MultipleSelectList
          setSelected={setSelectedStyle}
          data={styleData}
          save="value"
          label=""
          closeicon={<Ionicons name="checkmark" size={30} />}
        />
      </View>

      <View style={styles.container_box}>
        <Text>Medium</Text>
        <SelectList
          setSelected={setSelectedMedium}
          data={mediumData}
          save="value"
        />
      </View>

      <View style={styles.container_box}>
        <Text>Material</Text>
        <SelectList
          setSelected={setSelectedMaterial}
          data={materialData}
          save="value"
        />
      </View>

      <View style={styles.container_box}>
        <Text>Quality</Text>
        <SelectList
          setSelected={setSelectedQuality}
          data={qualityData}
          save="value"
          search={false}
        />
      </View>

      <View style={styles.container_box}>
        <Text>Original</Text>
        <SelectList
          setSelected={setSelectedOriginal}
          data={originalData}
          save="value"
          search={false}
        />
      </View>

      <View style={styles.container_box}>
        <Text>Size</Text>
        <SelectList
          setSelected={setSelectedSize}
          data={sizeData}
          save="value"
          search={false}
        />
      </View>

      <View style={styles.container_box}>
        <Text>Colors</Text>
        <MultipleSelectList
          setSelected={setSelectedColors}
          data={colorData}
          save="value"
          label="Colors"
          closeicon={<Ionicons name="checkmark" size={30} />}
        />
      </View>

      <View style={styles.container_box}>
        <Text>Orientation</Text>
        <SelectList
          setSelected={setSelectedOrientation}
          data={orientationData}
          save="value"
          search={false}
        />
      </View>

      <TouchableOpacity
        style={styles.container_button}
        onPress={() =>
          Alert.alert(
            "You have selected : ",
            `Subject: ${selectedSubject}\n\nStyle: ${selectedStyle}\n\nMedium: ${selectedMedium}\n\nMaterial: ${selectedMaterial}\n\nQuality: ${selectedQuality}\n\nOriginal: ${selectedOriginal}\n\nSize: ${selectedSize}\n\nOrientation: ${selectedOrientation}\n\nColor: ${selectedColors}`,
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => {
                  console.log("OK Pressed");
                  dispatch(
                    updateDropDownForm({
                      subject: selectedSubject,
                      style: selectedStyle,
                      medium: selectedMedium,
                      material: selectedMaterial,
                      quality: selectedQuality,
                      original: selectedOriginal,
                      size: selectedSize,
                      colors: selectedColors,
                      orientation: selectedOrientation,
                    })
                  );

                  navigation.navigate("Finished");
                  console.log(selectedSubject);
                },
              },
            ]
          )
        }
      >
        <Text
          style={{ textAlign: "center", fontSize: 20, paddingVertical: "2%" }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#d9dbda",
  },
  container_button: {
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    marginHorizontal: "15%",
    marginTop: "5%",
    marginBottom: "10%",
    textAlign: "center",
    backgroundColor: "#F5F5F5",
  },
  container_box: {
    padding: 5,
    flexDirection: "row",
    backgroundColor: "white",
    //"#F5F5F5"
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 20,
    flexWrap: "wrap",
  },
});
