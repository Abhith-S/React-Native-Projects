//react imports
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

//redux
import { useSelector } from "react-redux";

//compomemts imports
import { Colors, FontSize, Spacing } from "../../constants/ConstantsExports";

//external packages
import axios from "axios";
import LoadingComponent from "../LoadingComponent";

//api to send entire product to server
const productUrl = "http://139.59.69.142:5000/api/products";

const Finished = ({ navigation }) => {
  //for loading
  const [isLoading, setIsLoading] = useState(false);

  //data from textform - redux
  const paintingName = useSelector((state) => state.textForm.paintingName);
  const paintingDescription = useSelector(
    (state) => state.textForm.paintingDescription
  );
  const price = useSelector((state) => state.textForm.price);

  //data from dropDown form - redux
  const subject = useSelector((state) => state.dropDownForm.subject);
  const style = useSelector((state) => state.dropDownForm.style);
  const medium = useSelector((state) => state.dropDownForm.medium);
  const material = useSelector((state) => state.dropDownForm.material);
  const size = useSelector((state) => state.dropDownForm.size);
  const orientation = useSelector((state) => state.dropDownForm.orientation);

  //styles and subject data
  var stylesArray = [];

  style.map((value) => {
    //console.log(value);
    stylesArray.push({ name: value });
  });

  var subjectsArray = [];

  subject.map((value) => {
    //console.log(value);
    subjectsArray.push({ name: value });
  });

  console.log(stylesArray);
  console.log(subjectsArray);

  //server response of image upload - redux
  const paintingArtistPic = useSelector(
    (state) => state.pictures.paintingArtistPic
  );

  const fullPaintingPic = useSelector(
    (state) => state.pictures.fullPaintingPic
  );

  const leftPaintingPic = useSelector(
    (state) => state.pictures.leftPaintingPic
  );

  const rightPaintingPic = useSelector(
    (state) => state.pictures.rightPaintingPic
  );

  //uri of captured images - redux
  const paintingArtistImage = useSelector(
    (state) => state.imagesUri.paintingArtistImage
  );

  const fullPaintingImage = useSelector(
    (state) => state.imagesUri.fullPaintingImage
  );
  const leftPaintingImage = useSelector(
    (state) => state.imagesUri.leftPaintingImage
  );

  const rightPaintingImage = useSelector(
    (state) => state.imagesUri.rightPaintingImage
  );

  //all images data
  var imageGallery = [];

  imageGallery.push(
    paintingArtistPic,
    fullPaintingPic,
    leftPaintingPic,
    rightPaintingPic
  );

  //send data to server
  const handleSubmit = async () => {
    setIsLoading(true);
    productObject = {
      price: Number(price),
      name: paintingName,
      description: paintingDescription,
      digital_file: fullPaintingPic,
      gallery: imageGallery,
      categories: {
        name: "traditional",
      },
      tags: stylesArray,
      subject: subjectsArray,
      medium: medium,
      material: material,
      size: size,
      orientation: orientation,
      shop_id: "76eccbc2-d807-429b-bd11-b2487244dc1c",
    };

    //console.log(productObject);

    try {
      const response = await axios.post(productUrl, productObject, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoading(false);
      alert("Product created! 🎉");
      console.log(response.data);
      navigation.replace("TextForm");
    } catch (err) {
      setIsLoading(false);
      alert("Product creation failed");
      console.log(err);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
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
            fontSize: FontSize.xLarge,
            color: Colors.primary,
            //fontFamily: Font["poppins-bold"],
            //marginTop: Spacing,
          }}
        >
          Summary
        </Text>
      </View>
      <View
        style={{
          marginTop: Spacing * 2,
          marginBottom: Spacing * 3,
          fontSize: FontSize.large,
        }}
      >
        <Text style={styles.container_text}>
          Painting Name : {paintingName}
        </Text>
        <Text style={styles.container_text}>
          Painting Description : {paintingDescription}
        </Text>
        <Text style={styles.container_text}>
          Subjects :
          {subject.map((value, index) => {
            return <Text key={index}> {value} </Text>;
          })}
        </Text>
        <Text style={styles.container_text}>
          Styles :{" "}
          {style.map((value, index) => {
            return <Text key={index}> {value} </Text>;
          })}
        </Text>
        <Text style={styles.container_text}>Medium : {medium}</Text>
        <Text style={styles.container_text}>Material : {material}</Text>
        <Text style={styles.container_text}>Size : {size}</Text>
        <Text style={styles.container_text}>Orientation : {orientation}</Text>
      </View>

      <View style={styles.container_images}>
        <Image source={{ uri: paintingArtistImage }} style={styles.image} />
        <Image source={{ uri: fullPaintingImage }} style={styles.image} />
        <Image source={{ uri: leftPaintingImage }} style={styles.image} />
        <Image source={{ uri: rightPaintingImage }} style={styles.image} />
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
          Create Product
        </Text>
      </TouchableOpacity>
      {isLoading && (
        <LoadingComponent
          isLoading={isLoading}
          color={Colors.primary}
          style={{ bottom: 300 }}
        />
      )}
    </ScrollView>
  );
};
//margin:Spacing
const styles = StyleSheet.create({
  image: {
    height: 280,
    width: 280,
    margin: Spacing,
  },
  container_images: {
    alignSelf: "center",
  },
  container_text: {
    fontSize: FontSize.medium,
  },
});
export default Finished;
