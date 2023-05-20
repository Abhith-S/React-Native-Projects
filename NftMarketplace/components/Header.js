import { StyleSheet, Text, View } from "react-native";

import EntypoIcons from "react-native-vector-icons/Entypo";

export default Header = () => {
  return (
    <View style={styles.container_header}>
      {/* <EntypoIcons name="shop" size={50} /> */}
      <Text style={styles.container_mainHeading}>NFT Marketplace</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container_header: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
    alignItems: "center",
  },
  container_mainHeading: {
    fontSize: 26,
    fontWeight: "bold",
    marginHorizontal: "4%",
    marginVertical: "3%",
  },
});
