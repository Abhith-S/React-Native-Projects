import React, { useState } from "react";
import { View,Text,StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default SizeForm = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const data = [
    { key: "1", value: "Small"},
    { key: "2", value: "Medium" },
    { key: "3", value: "Large" },
    { key: "4", value: "Oversized"},
  ];
  return (
    <View>
        <View >
            <Text>Size</Text>
      <SelectList
        setSelected={setSelectedSize}
        data={data}
        save="value"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})