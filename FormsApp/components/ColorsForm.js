import React, { useState } from "react";
import { View, Text , StyleSheet} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

export default ColorsForm = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const data = [
    { key: "1", value: "Red" },
    { key: "2", value: "Blue" },
    { key: "3", value: "Green" },
    { key: "4", value: "Black" },
    { key: "5", value: "Orange" },
    { key: "6", value: "White" },
    { key: "7", value: "Grey" },
    { key: "8", value: "Violet" },
    { key: "9", value: "Yellow" },
    { key: "10", value: "Brown" },
    { key: "11", value: "Golden" },
    { key: "12", value: "Silver" },
  ];
  return (
    <View>
      <View>
        <Text>Colors</Text>
        <MultipleSelectList
          setSelected={setSelectedColors}
          data={data}
          save="value"
          label="Styles"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})