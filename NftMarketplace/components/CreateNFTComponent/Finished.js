//react imports
import React from "react";
import { Button, View, Image, StyleSheet,Text, ScrollView } from "react-native";

//redux
import { useSelector } from "react-redux";

//external packages
import axios from "axios";

//api to send entire product to server
const productUrl = "http://139.59.69.142:5000/api/products";

const Finished = () => {

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

  
  var imageGallery = [];

  imageGallery.push(
    paintingArtistPic,
    fullPaintingPic,
    leftPaintingPic,
    rightPaintingPic
  );

  
  //send data to server
  const handleSubmit = async () => {

    productObject = {
      price: Number(price),
      name: paintingName,
      description: paintingDescription,
      digital_file: fullPaintingPic,
      gallery: imageGallery,
      categories: {
        name: "traditional",
      },
      tags: [{ name: style[0][0] }, { name: style[0][1] }],
      subject: [{ name: subject[0][0] }, { name: subject[0][1] }],
      medium: medium,
      material: material,
      size: size,
      orientation: orientation,
      shop_id: "76eccbc2-d807-429b-bd11-b2487244dc1c",
    };

    //console.log(productObject);

    const response = await axios.post(productUrl, productObject, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} overScrollMode="never">
      <View style={styles.container_header}>
        <Text style={styles.header_text}>Summary</Text>
      </View>
      <View style={styles.container_textForm}>
        <Text>Painting Name : {paintingName}</Text>
        <Text>Painting Description : {paintingDescription}</Text>
        <Text>Subject : {subject[0][0]} {subject[0][1]}</Text>
        <Text>Style : {style[0][0]} {style[0][1]}</Text>
        <Text>Medium : {medium}</Text>
        <Text>Material : {material}</Text>
        <Text>Size : {size}</Text>
        <Text>Orientation : {orientation}</Text>

      </View>
      <View style={styles.container_dropDownForm}></View>
      <View style={styles.container_images}>
        <Image source={{ uri: paintingArtistImage }} style={styles.image} />
        <Image source={{ uri: fullPaintingImage }} style={styles.image} />
        <Image source={{ uri: leftPaintingImage }} style={styles.image} />
        <Image source={{ uri: rightPaintingImage }} style={styles.image} />
      </View>

      <View style={styles.container_button}>
        <Button onPress={handleSubmit} title="Create Product" color="#841584" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    
  },
  container_header: {
    margin: 20,
    marginTop: 10,
  },
  header_text: {
    fontSize: 20,
  },
  container_textForm: {
    
  },
  container_dropDownForm: {},
  container_images: {},
  image: {
    height: 280,
    width: 200,
    margin:20,
  },
  container_button: {
    marginBottom:30
  },
});
export default Finished;
