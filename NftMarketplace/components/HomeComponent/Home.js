import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import Spotlights from "./Spotlights";
import MainImage from "./MainImage";
import Trending from "./Trending";
import TopArtists from "./TopArtists";
const Home = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      overScrollMode={"never"}
    >
      <MainImage />
      <Spotlights/>

      <Trending/>


        <TopArtists/>


    
      {/* <View style={styles.container_topWorks}>
        <Text>Top Works</Text>
      </View>
      <View style={styles.container_topSales}>
        <Text>Top Sales Today</Text>
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container:{
  }
});
export default Home;
