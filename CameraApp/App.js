import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ArtistPic from "./components/ArtistPic";
import ProfilePic from "./components/ProfilePic";
import PaintingPic from "./components/PaintingPic";
import { useState } from "react";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("profile");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb" style={styles.container_statusbar} />

      {currentScreen === "profile" ? (
        <ProfilePic setCurrentScreen={setCurrentScreen} />
      ) : currentScreen === "artist" ? (
        <ArtistPic setCurrentScreen={setCurrentScreen} />
      ) : currentScreen === "painting" ? (
        <PaintingPic setCurrentScreen={setCurrentScreen} />
      ) : null}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 7,
  },
});
