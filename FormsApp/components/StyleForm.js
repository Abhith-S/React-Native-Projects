import React, { useState } from "react";
import { View, Text ,StyleSheet} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

export default SizeForm = () => {
  const [selectedStyle, setSelectedStyle] = useState([]);
  const data = [
    { key: "1", value: "Abstract" },
    { key: "2", value: "Fine Art" },
    { key: "3", value: "Modern Abstract" },
    { key: "4", value: "Expressionism" },
    { key: "5", value: "Figurative Expressionism" },
    { key: "6", value: "Impressionism" },
    { key: "7", value: "Realism" },
    { key: "8", value: "Conceptual" },
    { key: "9", value: "Minimalism" },
    { key: "10", value: "Portraiture" },
    { key: "11", value: "Illustration" },
    { key: "12", value: "Other" },
  ];
  return (
    <View>
      <View>
        <Text>Style</Text>
        <MultipleSelectList
          setSelected={setSelectedStyle}
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