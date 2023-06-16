import React, { useState, useEffect, useRef ,useContext} from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./Button";
//
import { updateRightPaintingPic } from "../../../src/features/pictures/picturesSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
//



export default function RightPaintingPic({navigation}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  //
  const imageURL = "http://139.59.69.142:5000/api/attachments";
  const [imageUri, setImageUri] = useState(null);

  const serverResponseRight = useRef();
  const dispatch = useDispatch();
//

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

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync({
          skipProcessing: true,
        });
        //console.log(data);
        
        setImage(data.uri);
        setImageUri(data.uri);

        // console.log(values)
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (imageUri) {
      //const asset = await MediaLibrary.createAssetAsync(image);

      const formData = new FormData();
      formData.append("attachment", {
        uri: imageUri,
        name: "rightImage.jpg",
        fileName: "rightImage",
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
        //console.log(response.data[0]); ///array of object

        //setServerResponse(JSON.stringify(response.data[0]));

        serverResponseRight.current = JSON.stringify(response.data[0]);

        console.log("server response inside try RIGHT- " + serverResponseRight.current);
        dispatch( updateRightPaintingPic(serverResponseRight.current));

        

      } catch (error) {
        console.log(error);
      }
      setImageUri(null);
      //alert("Picture saved! 🎉");

      //console.log("image saved successfully");
      navigation.navigate("Finished");
    }
  };

  return (
    <View style={styles.container}>
      {!image ? (
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
                Take a photo of the right half of the painting
                </Text>
              
            </View>
          </View>
        </Camera>
      ) : (
        <Image source={{ uri: image }} style={styles.camera} />
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
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
