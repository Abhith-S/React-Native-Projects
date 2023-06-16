import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
//import Constants from "expo-constants";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import Button from "./Button";
import * as FaceDetector from "expo-face-detector";
import { useDispatch } from "react-redux";

import axios from "axios";
import { updatePaintingArtistPic } from "../../../src/features/pictures/picturesSlice";

const imageURL = "http://139.59.69.142:5000/api/attachments";

const finalURL = "http://139.59.69.142:5000/api/products";

//ssh root@139.59.69.142
//http://10.10.32.79:5000/api/attachments
//http://139.59.69.142:5000/api/attachments
//http://10.10.32.79:5000/api/products

export default function ArtistPaintingPic(props) {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  const [faceData, setFaceData] = useState([]);

  const [imageData, setImageData] = useState();

  //const [serverResponse, setServerResponse] = useState("fjhs");

  const serverResponse = useRef();

  ///redux
  const dispatch = useDispatch();

  ///

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
      //const asset = await MediaLibrary.createAssetAsync(image);

      const formData = new FormData();
      formData.append("attachment", {
        uri: imageUri,
        name: "myimage.jpg",
        fileName: "image",
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

        serverResponse.current = JSON.stringify(response.data[0]);

        console.log("server response inside try - " + serverResponse.current);
         dispatch( updatePaintingArtistPic(serverResponse.current ));

      } catch (error) {
        console.log(error);
      }

      // console.log(response.data[0].id);
      // console.log(response.data[0].thumbnail);
      // console.log(response.data[0]);

      //.........WORKINF PRODUCT ADD......begin.....

      //     productObject = {
      //       "price": 23,
      //       "name": "mypic",
      //       "description": "the best pic",
      //       "digital_file": "http://10.10.32.79:5000/public/images/arrival-1684924688536.jpg",
      //       "gallery": "http://10.10.32.79:5000/public/images/arrival-1684924688536.jpg",
      //       "categories": {
      //           "name": "traditional"
      //       },
      //       "tags": [
      //           {
      //               "name": "abstract"
      //           },
      //           {
      //               "name": "other"
      //           }
      //       ],
      //       "subject": [
      //           {
      //               "name": "history"
      //           },
      //           {
      //               "name": "other"
      //           }
      //       ],
      //       "medium": "ink",
      //       "material": "canvas",
      //       "size": "small",
      //       "orientation": "portrait",
      //       "shop_id": "76eccbc2-d807-429b-bd11-b2487244dc1c"
      //   };

      //   const newResponse = await axios.post(finalURL, productObject, {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   });

      // console.log(JSON.stringify(newResponse));

      //.........WORKINF PRODUCT ADD......end.....

      
      setImageUri(null);
      //alert("Picture saved! 🎉");

      //console.log("image saved successfully");


      props.navigation.navigate("FullPaintingPic");
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
