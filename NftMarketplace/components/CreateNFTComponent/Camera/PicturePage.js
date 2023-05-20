import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ArtistPic from "./ArtistPic";
import ProfilePic from "./ProfilePic";
import PaintingPic from "./PaintingPic";
import { useState } from "react";


export default function PicturesPage() {
  const [currentScreen, setCurrentScreen] = useState("artist");
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#61dafb" style={styles.container_statusbar} />

      {currentScreen === "artist" ? (
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
