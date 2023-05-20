///PRIMARY SCREEN

import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef,useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Alert,
} from "react-native";
import { CheckConnected } from "./components/CheckConnected";
import NoConnectionScreen from "./components/NoConnectionScreen";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/FontAwesome5";


export default function App() {
  const [connectStatus, setConnectStatus] = useState(false);

  CheckConnected().then((res) => {
    setConnectStatus(res);
  });

  ///camera
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [minRes, setMinRes] = useState(false);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      // Alert.alert("Alert", "Allow to check camera specs", [
      //   {
      //     text: "Cancel",
      //     onPress: () => console.log("Cancel Pressed"),
      //     style: "cancel",
      //   },
      //   { text: "Allow", onPress: () => checkMinResolution() },
      // ]);

      try{
        await checkMinResolution();
        await checkMinResolution();
      }
      catch(err){
        console.log(err)
      }
     
    })();
  }, []);

  const checkMinResolution = async () => {
    const supportedAspectRatios =
      await cameraRef.current.getSupportedRatiosAsync();
    console.log(supportedAspectRatios);

    const ratio = "16:9";

    const supportedPictureSizes =
      await cameraRef.current.getAvailablePictureSizesAsync(ratio);
    console.log(supportedPictureSizes);

    supportedPictureSizes.includes("3840x2160") &&
    supportedAspectRatios.includes("16:9")
      ? setMinRes(true)
      : setMinRes(false);
  };

  console.log(`Has Min resolution - ${minRes}`);

  ///

  return connectStatus && !minRes ? (
    <View>
      <Camera ref={cameraRef} />
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonContainer_text}>
          Internet Connection  <Icon name="check-circle" size={30} color="green" />
        </Text>
        <Text style={styles.buttonContainer_text}>Camera  <Icon name="times" size={30} color="red" /></Text>
      </View>
    </View>
  ) : (
    <NoConnectionScreen onCheck={CheckConnected} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
  },
  buttonContainer: {
    alignItems: "center",
    height: 250,
    justifyContent: "center",
    
  },
  buttonContainer_text:{
    textAlign: "center",
    margin: 20,
    
  }
});
