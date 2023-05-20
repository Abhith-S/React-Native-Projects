import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "./Button";

export default function PaintingPic({setCurrentScreen}) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  //capturing different pics
  const [hasFullPic, setHasFullPic] = useState(false);
  const [previousScreen, setPreviousScreen] = useState("");

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
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert("Picture saved! 🎉");
        setImage(null);
        setHasFullPic(true);
        previousScreen === ""
          ? setPreviousScreen("full")
          : previousScreen === "full"
          ? setPreviousScreen("left")
          : previousScreen === "left"
          ? setPreviousScreen("right")
          ///can add top and bottom if painting is vertical and left right if painting is horizontal
          : previousScreen === "right"
          ? setPreviousScreen("center")
          : previousScreen === "center"
          ? setPreviousScreen("full")
          : setPreviousScreen("completed");
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
          type={type}
          ref={cameraRef}
          flashMode={flash}
          autoFocus={true}
        >
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
              {previousScreen === "" ? (
                <Text style={styles.cameraText}>
                  Take a photo of the entire painting
                </Text>
              ) : previousScreen === "full" ? (
                <Text style={styles.cameraText}>
                  Take a photo of the left half of the painting
                </Text>
              ) : previousScreen === "left" ? (
                <Text style={styles.cameraText}>
                  Take a photo of the right half of the painting
                </Text>
              ) : previousScreen === "right" ? (
                <Text style={styles.cameraText}>
                  Take a photo of the center part of the painting
                </Text>
              ) : (
                <Text style={styles.cameraText}>Finished</Text>
              )}
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#000",
    padding: 8,
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
    alignItems: "center",
    height: "89%",
    width: "99%",
    justifyContent: "flex-end",
  },
  cameraText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
