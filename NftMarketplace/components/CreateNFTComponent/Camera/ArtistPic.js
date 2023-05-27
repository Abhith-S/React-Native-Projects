import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
//import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./Button";
import PaintingPic from "./PaintingPic";

import * as FaceDetector from "expo-face-detector";

import axios from "axios";

const URL = "http://139.59.69.142:5000/api/attachments";

const newURL = "http://139.59.69.142:5000/api/products";

//ssh root@139.59.69.142
//http://10.10.32.79:5000/api/attachments
//http://139.59.69.142:5000/api/attachments
//http://10.10.32.79:5000/api/products

var galleryArray = [];
var mainImage = {};
var productObject = {};

export default function ArtistPic(props) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const [faceData, setFaceData] = React.useState([]);

  const [imageData, setImageData] = useState();

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function getFaceDataView() {
    if (faceData.length === 0) {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}>Face not visible</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.faces}>
          <Text style={styles.faceDesc}></Text>
        </View>
      );
    }
  }

  const handleFacesDetected = ({ faces }) => {
    setFaceData(faces);
    //console.log(faces);
  };

  const takePicture = async () => {
    if (cameraRef) {
      //&& faceData.length > 0
      try {
        const data = await cameraRef.current.takePictureAsync({
          skipProcessing: true,
        });
        //console.log(data);
        setImageData(data);
        setImageUri(data.uri);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Artist's face is not visible, please try again");
    }
  };

  const savePicture = async () => {
    if (imageUri) {
      //try {
        // const asset = await MediaLibrary.createAssetAsync(image);

        // const formData = new FormData();
        // formData.append("attachment", {
        //   uri: imageUri,
        //   name: "myimage.jpg",
        //   fileName: "image",
        //   type: "image/jpg",
        // });

        // const response = await axios({
        //   method: "post",
        //   url: URL,
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        //   data: formData,
        // });

        // console.log(response.data[0].id);
        // console.log(response.data[0].thumbnail);
        // console.log(response.data[0]);

        // galleryArray.push(response.data);
        //console.log(galleryArray);
        // mainImage = response.data[0];
        //console.log(mainImage)

        productObject = {
          "price": 111,
          "name": "rterrgd",
          "description": "dfgdgdgeer",
          "digital_file": {
            "attachment_id": "683",
            "original": "http://10.10.32.79:5000/public/images/arrival-1684924688536.jpg",
            "thumbnail": "http://10.10.32.79:5000/public/images/arrival-1684924688536.jpg"
          },
          "categories": {
            "name": "hyperledger"
          },
          "tags": [
            {
              "name": "abstract"
            },
            {
              "name": "nouveau"
            }
          ],
          "shop_id": "1681e7c0-deda-4612-b0f9-6d7c3611f8fb"
        };

     

        //console.log(JSON.stringify(productObject))

        const newResponse = await fetch(newURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productObject), 
        });

        //  const newResponse = await axios({
        //     method: "post",
        //     url: newURL,
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     data: productObject
        //   });
          

        //const newResponse = await axios.post(newURL,productObject);

        console.log(newResponse)


        // const newResponse = await axios.post(newURL, productObject, {
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //   });

        //console.log(JSON.stringify(newResponse));

        setImageUri(null);
        //alert("Picture saved! 🎉");

        //return <PaintingPic galleryArray={galleryArray}/>

        //console.log("image saved successfully");
        //setCurrentScreen("painting");
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  return (
    <View style={styles.container}>
      {!imageUri ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
          //autoFocus={true}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 100,
            tracking: true,
          }}
        >
          {getFaceDataView()}
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
              }}
            >
              <Button
                title=""
                icon="retweet"
                onPress={() => {
                  setType(
                    type === CameraType.back
                      ? CameraType.front
                      : CameraType.back
                  );
                }}
              />
              <Button
                onPress={() =>
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  )
                }
                icon="flash"
                color={
                  flash === Camera.Constants.FlashMode.off ? "black" : "#fff"
                }
              />
            </View>
            <View style={styles.cameraTextContainer}>
              <Text style={styles.cameraText}>
                Take a photo of the Artist alongside the painting
              </Text>
            </View>
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: imageUri }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {imageUri ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImageUri(null)}
              icon="retweet"
            />
            <Button
              title="Save"
              onPress={() => {
                savePicture();
                //props.navigation.navigate("PaintingPic");
              }}
              icon="check"
            />
          </View>
        ) : (
          <Button title="Capture" onPress={takePicture} icon="camera" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  controls: {
    flex: 0.5,
  },
  button: {
    height: 40,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },

  topControls: {
    flex: 1,
  },
  camera: {
    flex: 3,
  },
  faces: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    margin: 16,
  },
  faceDesc: {
    fontSize: 20,
    color: "white",
  },
  cameraTextContainer: {
    height: "80%",
    justifyContent: "flex-end",
  },
  cameraText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
});
