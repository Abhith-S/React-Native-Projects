import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default QualityForm = () => {
  const [selectedQuality, setSelectedQuality] = useState("");
  const data = [
    { key: "1", value: "Museum quality" },
    { key: "2", value: "Masterpiece" },
    { key: "3", value: "Fine" },
    { key: "4", value: "Elite" },
    { key: "4", value: "Iconic" },
  ];
  return (
    <View>
      <View>
        <Text>Quality</Text>
        <SelectList
          setSelected={setSelectedQuality}
          data={data}
          save="value"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})