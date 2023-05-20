import {View, Text, StyleSheet} from "react-native"
export default CategoriesCard = ({item}) =>{
  return <View style={styles.container}>
  <Text>{item}</Text>
  </View>
}

const styles = StyleSheet.create({
  container:{
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: "#a2a8d3",
    padding: 10
  }
})