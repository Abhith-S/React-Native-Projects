import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./Button";

import * as FaceDetector from "expo-face-detector";

export default function ProfilePic({setCurrentScreen}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);

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
        const asset = await MediaLibrary.createAssetAsync(image);
        alert("Picture saved! 🎉");
        setImage(null);
        setCurrentScreen("artist")
        console.log("saved successfully");
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
          type={CameraType.front}
          ref={cameraRef}
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

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 30,
            }}
          ></View>
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
          <Button title="Take a selfie" onPress={takePicture} icon="camera" />
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
    fontSize: 19,
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
});
