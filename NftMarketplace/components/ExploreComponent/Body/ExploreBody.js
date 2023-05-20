import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";

const ExploreBody = () => {
  const images = [
    
    require("../../../assets/images/13.png"),
    require("../../../assets/images/15.png"),
    require("../../../assets/images/14.png"),
    require("../../../assets/images/49.png"),
    require("../../../assets/images/17.png"),
    require("../../../assets/images/24.png"),
    require("../../../assets/images/41.jpg"),
    require("../../../assets/images/41.png"),
    require("../../../assets/images/26.1.png"),
    require("../../../assets/images/22.png"),
    require("../../../assets/images/51.png"),
    require("../../../assets/images/18.png"),
    require("../../../assets/images/45.png"),
    require("../../../assets/images/1.png"),
    require("../../../assets/images/47.jpeg"),
    require("../../../assets/images/48.png"),
    
    require("../../../assets/images/46.png"),
    
  ];

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.imageContainer}>
              <Image source={item} key={index} style={styles.listImage} />
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "43%",
  },
  listImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 20,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "6%",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default ExploreBody;
