//react imports
import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

//external packages
import { Camera, CameraType } from "expo-camera";
import axios from "axios";

//components imports
import Button from "./Button";

//redux
import { updateFullPaintingPic } from "../../../src/features/pictures/picturesSlice";
import { useDispatch } from "react-redux";
import { updateFullPaintingImage } from "../../../src/features/imagesUri/imagesUriSlice";

//api to send image to server
const imageURL = "http://139.59.69.142:5000/api/attachments";

export default function FullPaintingPic({navigation}) {

  const [imageUri, setImageUri] = useState(null);

  //set front or back cam
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);   

  //server respomse after sending image 
  const serverResponseFullPic = useRef();
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
        name: "fullImage.jpg",
        fileName: "fullImage",
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

        serverResponseFullPic.current = JSON.stringify(response.data[0]);

        console.log("server response inside try FULL - " + serverResponseFullPic.current);
         dispatch( updateFullPaintingPic(serverResponseFullPic.current ));
         dispatch( updateFullPaintingImage(imageUri))

        
      } catch (error) {
        console.log(error);
      }
      setImageUri(null);
      //alert("Picture saved! 🎉");

      //console.log("image saved successfully");
      navigation.replace("LeftPaintingPic");
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
          <View >
            <View style={styles.cameraTextContainer}>
              
              <Text style={styles.cameraText}>
                Take a photo of the entire painting
              </Text>
            
          </View>
          <View style={{position:"relative",bottom:25}}>
            <Button title="Capture" onPress={takePicture} icon="camera" /></View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    
    //top: 20,
     bottom:80
   
  },
  cameraText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
   

    
  },
});
