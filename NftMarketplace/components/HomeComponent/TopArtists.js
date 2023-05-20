import { Text, View, StyleSheet, Image, FlatList } from "react-native";

export default TopArtists = () => {
  const images = [
    { image: require("../../assets/images/artists/61.png"), name: "Raphael" },
    {
      image: require("../../assets/images/artists/64.png"),
      name: "Mary Cassatt",
    },
    {
      image: require("../../assets/images/artists/63.png"),
      name: "Georgia O'Keeffe",
    },
    {
      image: require("../../assets/images/artists/70.png"),
      name: "Pablo Picasso",
    },
    {
      image: require("../../assets/images/artists/65.png"),
      name: "Agnes Martin ",
    },
    {
      image: require("../../assets/images/artists/62.png"),
      name: "Cindy Sherman",
    },
    {
      image: require("../../assets/images/artists/66.png"),
      name: "Jackson Pollock",
    },
    {
      image: require("../../assets/images/artists/69.png"),
      name: "Salvador Dalí",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.container_mainHeading}>Top Artists</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode={"never"}
        data={images}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.imageContainer} key={index}>
              <Image source={item.image} style={styles.listImage} />
              <Text style={styles.imageContainer_text}>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listImage: {
    width: 142,
    height: 142,
    resizeMode: "contain",
    margin: 10,
    borderRadius: 100,
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
  imageContainer: {
    alignItems: "center",
  },
  imageContainer_text: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
