import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
//import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./Button";

import * as FaceDetector from "expo-face-detector";

import axios from "axios";

const URL = "http://10.10.32.79:5000/api/attachments";

const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export default function ArtistPic({ navigation }) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const [faceData, setFaceData] = React.useState([]);

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
    if (cameraRef && faceData.length > 0) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Artist's face is not visible, please try again");
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        //const asset = await MediaLibrary.createAssetAsync(image);
        // const response = await axios.post(URL, image, {
        //   headers: {
        //     "content-type": "multipart/form-data",
        //   },
        // });
        // console.log(response);

        // const formData = new FormData();
        // formData.append("file",{
        //   image:image
        // })

        // const response = await fetch(URL,{
        //   method: 'post',
        //   body: formData,
        //   headers: {
        //     'Content-Type': 'multipart/form-data; ',
        //   }},);
        //   console.log(response);

        alert("Picture saved! 🎉");
        setImage(null);
        console.log("saved successfully");
        //setCurrentScreen("painting");
      } catch (error) {
        console.log(error);
      }
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
          autoFocus={true}
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
            <Button
              title="Save"
              onPress={() => {
                savePicture();
                navigation.navigate("PaintingPic");
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
