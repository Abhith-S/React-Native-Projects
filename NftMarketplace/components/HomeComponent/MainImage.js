import { Text, View, StyleSheet, Image } from "react-native";

export default MainImage = ()=>{
    return (
        <View style={styles.container}>
        <Image source={require("../../assets/images/45.png")} style={styles.container_image}/>
      </View>
    );
}

const styles = StyleSheet.create({
    container_image:{
      height: "100%",
      width: "95%",
      borderRadius: 23,
      resizeMode:'cover'
    },
    container:{
      marginVertical: 20,
      marginHorizontal: 14,
      height: 400,
      width: 330,
      alignItems: "center"
    },
  });