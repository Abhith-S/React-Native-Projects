import React from "react";
import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";

const Finished = () => {
  const paintingName = useSelector((state) => state.textForm.paintingName);
  const paintingDescription = useSelector(
    (state) => state.textForm.paintingDescription
  );
  const price = useSelector((state) => state.textForm.price);

  const subject = useSelector((state) => state.dropDownForm.subject);
  const style = useSelector((state) => state.dropDownForm.style);
  const medium = useSelector((state) => state.dropDownForm.medium);
  const material = useSelector((state) => state.dropDownForm.material);

  const size = useSelector((state) => state.dropDownForm.size);

  const orientation = useSelector((state) => state.dropDownForm.orientation);

  //console.log(subject[0])
  //console.log(style[0])
  //   console.log(medium)
  //   console.log(material)

  //   console.log(size)

  //   console.log(orientation)

  //const paintingArtistPic = useSelector((state)=>state.pictures.paintingArtistPic)

  const fullPaintingPic = useSelector(
    (state) => state.pictures.fullPaintingPic
  );

  const leftPaintingPic = useSelector(
    (state) => state.pictures.leftPaintingPic
  );

  const rightPaintingPic = useSelector(
    (state) => state.pictures.rightPaintingPic
  );

  //console.log("redux response right is "+rightPaintingPic)
  //console.log("redux response full is "+fullPaintingPic)
  //console.log("redux response left is "+leftPaintingPic)

  var imageGallery = [];

  imageGallery.push(fullPaintingPic, leftPaintingPic, rightPaintingPic);

  //console.log(imageGallery)
  //paintingArtistPic

  const finalURL = "http://139.59.69.142:5000/api/products";

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

  console.log(productObject);

  const handleSubmit = async () => {
    //.........WORKINF PRODUCT ADD......begin.....

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

    const newResponse = await axios.post(finalURL, productObject, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(JSON.stringify(newResponse));

    //.........WORKINF PRODUCT ADD......end.....
  };

  return (
    <View>
      <Text style={{ marginBottom: 50 }}>Finished Page</Text>

      <Button onPress={handleSubmit} title="Upload Files" color="#841584" />
    </View>
  );
};

export default Finished;
