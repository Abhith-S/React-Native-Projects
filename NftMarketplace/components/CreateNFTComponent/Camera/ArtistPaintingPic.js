//react imports
import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

//external packages
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from "expo-face-detector";
import axios from "axios";

//components imports
import Button from "./Button";
import LoadingComponent from "../../LoadingComponent"

//redux
import { updatePaintingArtistPic } from "../../../src/features/pictures/picturesSlice";
import { updatePaintingArtistImage } from "../../../src/features/imagesUri/imagesUriSlice";
import { useDispatch } from "react-redux";

//api to send image to server
const imageURL = "http://139.59.69.142:5000/api/attachments";

export default function ArtistPaintingPic({navigation}) {

  const [imageUri, setImageUri] = useState(null);

  //set front or back cam
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
 

  const [faceData, setFaceData] = useState([]);

  //server respomse after sending image 
  const serverResponseArtistPic = useRef();
  const cameraRef = useRef(null);

  //check camera has min resolution
  const [minRes, setMinRes] = useState(false);

  ///redux
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      
      
      try{
        await checkMinResolution();
        //await checkMinResolution();
      }
      catch(err){
        console.log(err)
      }
    })();
  }, []);


  //check camera resolution
  const checkMinResolution = async () => {
    const supportedAspectRatios =
      await cameraRef.current.getSupportedRatiosAsync();
    //console.log(supportedAspectRatios);

    const ratio = "16:9";

    const supportedPictureSizes =
      await cameraRef.current.getAvailablePictureSizesAsync(ratio);
    //console.log(supportedPictureSizes);

    supportedPictureSizes.includes("3840x2160") &&
    supportedAspectRatios.includes("16:9")
      ? setMinRes(true)
      : setMinRes(false);

  };

  //console.log(`Has Min resolution - ${minRes}`);

  ///


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
    if (cameraRef ) {
      //&& faceData.length > 0
      try {
        const data = await cameraRef.current.takePictureAsync({
          skipProcessing: true,
        });
        //console.log(data);
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

      const formData = new FormData();
      formData.append("attachment", {
        uri: imageUri,
        name: "artistPainitngImage.jpg",
        fileName: "artistPainitngImage",
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

        serverResponseArtistPic.current = JSON.stringify(response.data[0]);

        console.log("server response inside try - " + serverResponseArtistPic.current);
         dispatch( updatePaintingArtistPic(serverResponseArtistPic.current ));
         dispatch( updatePaintingArtistImage(imageUri))

      } catch (error) {
        console.log(error);
      }

      
      setImageUri(null);
      //alert("Picture saved! 🎉");

      //console.log("image saved successfully");

      navigation.replace("FullPaintingPic");
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
              onPress={savePicture}
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
