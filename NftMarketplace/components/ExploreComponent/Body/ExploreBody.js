import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";

//redux
import { useSelector } from "react-redux";

const ExploreBody = () => {

  const response = useSelector((state) => state.serverData.serverResponse);
 // console.log(response);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        data={response.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
          
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image.original }} key={item.id} style={styles.listImage} />
              <Text>{item.name}</Text>
              <Text>$ {item.price}</Text>
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
