//react imports
import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

//external packages
import { Camera, CameraType } from "expo-camera";
import axios from "axios";

//components imports
import Button from "./Button";

//redux
import { updateLeftPaintingPic } from "../../../src/features/pictures/picturesSlice";
import { useDispatch } from "react-redux";
import { updateLeftPaintingImage } from "../../../src/features/imagesUri/imagesUriSlice";

//api to send image to server
const imageURL = "http://139.59.69.142:5000/api/attachments";

export default function LeftPaintingPic({navigation}) {
  const [imageUri, setImageUri] = useState(null);

  //set front or back cam
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);   

  const serverResponseLeftPic = useRef();
  const cameraRef = useRef(null);

  //redux
  const dispatch = useDispatch();

  //get camera permissions
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync({
          skipProcessing: true,
        });
        
        setImageUri(data.uri);
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (imageUri) {

      const formData = new FormData();
      formData.append("attachment", {
        uri: imageUri,
        name: "leftImage.jpg",
        fileName: "leftImage",
        type: "image/jpg",
      });

      try {
        const response = await axios({
          method: "post",
          url: imageURL,
          headers: {
            "Content-Type": "multipart/form-data",
          },
          data: formData,
        });

        serverResponseLeftPic.current = JSON.stringify(response.data[0]);

        console.log("server response inside try LEFT- " + serverResponseLeftPic.current);
         dispatch( updateLeftPaintingPic(serverResponseLeftPic.current ));
         dispatch( updateLeftPaintingImage(imageUri))

      } catch (error) {
        console.log(error);
      }
      setImageUri(null);
      //alert("Picture saved! 🎉");

      //console.log("image saved successfully");
      navigation.replace("RightPaintingPic");
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
        >
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                marginTop: 40
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
                Take a photo of the left half of the painting
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
            <Button title="Save" onPress={savePicture} icon="check" />
          </View>
        ) : (
          <View>
            <Button title="Capture" onPress={takePicture} icon="camera" />
          </View>
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
  // text: {
  //   fontWeight: "bold",
  //   fontSize: 16,
  //   color: "#E9730F",
  //   marginLeft: 10,
  // },

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
    position: "relative",
    //top: 200,
   
  },
  cameraText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    
  },
});
