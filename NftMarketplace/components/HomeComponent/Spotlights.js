import { Text, View, StyleSheet, Image, FlatList } from "react-native";

export default Spotlights = () => {
  
  const images = [
    require("../../assets/images/1.png"),
    require("../../assets/images/39.png"),
    require("../../assets/images/17.png"),
    require("../../assets/images/24.png"),
    require("../../assets/images/41.jpg"),
    require("../../assets/images/41.png"),
    require("../../assets/images/51.png"),
    require("../../assets/images/45.png"),
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.container_mainHeading}>Spotlights</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode={"never"}
        data={images}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return <Image source={item} key={index} style={styles.listImage} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listImage: {
    width: 200,
    height: 230,
    resizeMode: "contain",
    margin: 10,

    borderRadius: 20,
  },
  container_mainHeading: {
    fontSize: 26,
    fontWeight: "bold",
    marginHorizontal: "4%",
    marginVertical: "3%",
  },
  container: {
    marginVertical: "4%",
  },
});
