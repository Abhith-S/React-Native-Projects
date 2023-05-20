import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Trending</Text>
      <View style={styles.container_trending}>
        <View style={styles.imageContainer}>
          <Text style={{ fontSize: 17 }}>1.</Text>
          <Image
            source={require("../../assets/images/41.jpg")}
            style={styles.imageContainer_image}
          />

          <View style={styles.imageContainer_text}>
            <Text style={{ fontSize: 17 }}>Rainbow Dragon</Text>
            <Text>$2032</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Text style={{ fontSize: 17 }}>2.</Text>
          <Image
            source={require("../../assets/images/44.jpg")}
            style={styles.imageContainer_image}
          />
          <View style={styles.imageContainer_text}>
            <Text style={{ fontSize: 17 }}>Icarus Getting Close</Text>
            <Text>$6534</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Text style={{ fontSize: 17 }}>3.</Text>
          <Image
            source={require("../../assets/images/16.png")}
            style={styles.imageContainer_image}
          />
          <View style={styles.imageContainer_text}>
            <Text style={{ fontSize: 17 }}>The Cyborg Maiden</Text>
            <Text>$1342</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Text style={{ fontSize: 17 }}>4.</Text>
          <Image
            source={require("../../assets/images/11.png")}
            style={styles.imageContainer_image}
          />
          <View style={styles.imageContainer_text}>
            <Text style={{ fontSize: 17 }}>Matrix State Of Mind</Text>
            <Text>$4782</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Text style={{ fontSize: 17 }}>5.</Text>
          <Image
            source={require("../../assets/images/51.png")}
            style={styles.imageContainer_image}
          />
          <View style={styles.imageContainer_text}>
            <Text style={{ fontSize: 17 }}>Unbroken Inside</Text>
            <Text>$1212</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Text style={{ fontSize: 17 }}>6.</Text>
          <Image
            source={require("../../assets/images/49.png")}
            style={styles.imageContainer_image}
          />
          <View style={styles.imageContainer_text}>
            <Text style={{ fontSize: 17 }}>Halloween Nights</Text>
            <Text>$3260</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer_image: {
    width: "30%",
    height: 70,
    resizeMode: "cover",
    borderRadius: 22,
    marginHorizontal: "4%",
    marginVertical: "3%",
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "4%",
  },
  imageContainer_text: {
    marginLeft: "4%",
    alignItems: "center",
    width: "50%",
  },
  mainHeading: {
    fontSize: 26,
    fontWeight: "bold",
    marginHorizontal: "4%",
    marginVertical: "3%",
  },
  container: {
    marginVertical: "4%",
  },
});

export default Trending;
