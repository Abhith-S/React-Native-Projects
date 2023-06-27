//react
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";

//component imports
import { Colors, FontSize, Spacing } from "../../constants/ConstantsExports";

//redux
import { useSelector } from "react-redux";

const Home = () => {
  const response = useSelector((state) => state.serverData.serverResponse);
  //console.log(response);

  //create a random number
  let randomNumber = Math.floor(Math.random() * response.count);
  //console.log(randomNumber)

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
      overScrollMode={"never"}
    >
      <View style={styles.container_mainImageContainer}>
        <Image
          source={{ uri: response.data[randomNumber].image.original }}
          style={styles.mainImageContainer_image}
        />

        <Text style={{ fontSize: FontSize.large, marginVertical: Spacing }}>
          {response.data[randomNumber].name}
        </Text>
      </View>

      <Text style={styles.container_mainHeading}>Spotlights</Text>

      {/* source={ uri: response.data[0].image.original }, */}

      <FlatList
        style={{ margin: Spacing }}
        horizontal
        showsHorizontalScrollIndicator={false}
        overScrollMode={"never"}
        data={response.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Image
                source={{ uri: item.image.original }}
                key={item.id}
                style={styles.listImage}
              />
              <Text style={{ fontSize: 17, textAlign: "center" }}>
                {item.name}
              </Text>
            </View>
          );
        }}
      />

      <Text style={styles.container_mainHeading}>Trending</Text>
      <View style={styles.container_trending}>
        {response.data.map((item, index) => {
          return (
            <View style={styles.trending_imageContainer} key={item.id}>
              <Text style={{ fontSize: 17 }}>{index + 1}</Text>
              <Image
                source={{ uri: item.image.original }}
                style={styles.trending_imageContainer_image}
              />

              <View style={styles.trending_imageContainer_text}>
                <Text style={{ fontSize: 17 }}>{item.name}</Text>
                <Text>$ {item.price}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainImageContainer_image: {
    height: "100%",
    width: "100%",
    borderRadius: 23,
    resizeMode: "contain",
  },
  container_mainImageContainer: {
    marginVertical: Spacing,
    marginHorizontal: Spacing,
    height: 400,
    alignItems: "center",
  },
  listImage: {
    width: 200,
    height: 230,
    resizeMode: "contain",
    margin: Spacing,

    borderRadius: 20,
  },
  container_mainHeading: {
    fontSize: 26,
    fontWeight: "bold",
    marginHorizontal: Spacing,
    marginTop: Spacing * 6,
  },
  trending_imageContainer_image: {
    width: "30%",
    height: 70,
    resizeMode: "cover",
    borderRadius: 22,
    marginHorizontal: Spacing,
    marginVertical: Spacing,
  },
  trending_imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: Spacing * 2,
  },
  trending_imageContainer_text: {
    marginLeft: Spacing * 2,
    alignItems: "center",
    width: "50%",
  },
});
export default Home;
