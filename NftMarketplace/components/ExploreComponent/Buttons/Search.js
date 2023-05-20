import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBar = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchBar__unclicked}>
        {/* search Icon */}
        <Feather
          name="search"
          size={18}
          color="grey"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not
        {clicked && (
          <Entypo name="cross" size={30} color="black"  onPress={() => {
              setSearchPhrase("");
              setClicked(false);
              Keyboard.dismiss();
              
          }}/>
        )} */}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {/* {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button>
        </View>
      )} */}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "30%",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
   
  },
});
