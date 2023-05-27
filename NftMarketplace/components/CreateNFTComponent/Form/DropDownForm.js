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
import ArtistPic from "../Camera/ArtistPic";

export default DropDownForm = ({navigation}) => {
  const [selectedSubject, setSelectedSubject] = useState([]);
  const subjectData = [
    { key: "1", value: "Pop Culture" },
    { key: "2", value: "Travel" },
    { key: "3", value: "Geometric" },
    { key: "4", value: "People" },
    { key: "5", value: "Animal" },
    { key: "6", value: "Nature" },
    { key: "7", value: "Life" },
    { key: "8", value: "Seascape" },
    { key: "9", value: "Architecture" },
    { key: "10", value: "Culture" },
    { key: "11", value: "Classical" },
    { key: "12", value: "Family" },
    {key:"13",value:"Health & Beauty"},
  ];

  const [selectedStyle, setSelectedStyle] = useState([]);
  const styleData = [
    { key: "1", value: "abstract" },
    { key: "2", value: "impressionism" },
    { key: "3", value: "nouveau" },
    { key: "4", value: "realism" },
    { key: "6", value: "Fine Art" },
    { key: "7", value: "Expressionism" },
    { key: "8", value: "Conceptual" },
    { key: "9", value: "Minimalism" },
    { key: "10", value: "Portraiture" },
    { key: "11", value: "Illustration" },
    { key: "12", value: "Surrealism" },
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
    { key: "9", value: "Enamel" },
    { key: "10", value: "Paint" },
    { key: "11", value: "Pencil" },
    { key: "13", value: "Ballpoin Pen" },
  
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
    { key: "1", value: "landscape" },
    { key: "2", value: "portrait" },
    { key: "3", value: "square" },
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
    {key:"14",value:"Dark Slate Blue"}
  ];

  //data to server

  //categories: orientation
  //tags : style

  // var categories = {}
  // var tags = []


  
  return (
    <ScrollView style={styles.container} overScrollMode="never">
            <Text style={styles.container_text}>Fill the details below : </Text>

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
          label=""
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
        onPress={() =>{
          //console.log(selectedStyle[1])
          //tags.push(selectedStyle[0],selectedStyle[1])
          //console.log(tags)
         
          //console.log(selectedOrientation)
          //categories = {name:selectedOrientation}
          //console.log(categories)
          Alert.alert(
            "You have selected : ",
            `Subject: ${selectedSubject}\n\nStyle: ${selectedStyle}\n\nMedium: ${selectedMedium}\n\nMaterial: ${selectedMaterial}\n\nQuality: ${selectedQuality}\n\nOriginal: ${selectedOriginal}\n\nSize: ${selectedSize}\n\nOrientation: ${selectedOrientation}\n\nColor: ${selectedColors}`,
            [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => navigation.navigate("ArtistPic")
                },
              ]
          )
          //{<ArtistPic categories={categories} tags={tags}/>}
            }
          
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
    marginBottom: "10%",
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
  container_box:{
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
  container_text: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
