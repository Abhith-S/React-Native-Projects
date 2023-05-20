import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import CategoriesCard from "./Body/CategoriesCard";
import SearchBar from "./Buttons/Search";
import Filter from "./Buttons/Filter";
import Refresh from "./Buttons/Refresh";
import Sort from "./Buttons/Sort";
import ExploreBody from "./Body/ExploreBody";

const Explore = () => {
  return (
    <View style={styles.container}>
     <View style={styles.container_header}>
      <SearchBar/>
      <Filter/>
      <Refresh/>
      <Sort/>
     </View>
     <View style={styles.container_body}>
        <ExploreBody/>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container_header: {
    flexDirection: "row",
  },
});

export default Explore;
