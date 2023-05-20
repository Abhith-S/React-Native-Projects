import React, { useState } from "react";
import { View, Text ,StyleSheet} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default OriginalForm = () => {
  const [selectedOriginal, setSelectedOriginal] = useState("");
  const data = [
    { key: "1", value: "One of a Kind" },
    { key: "2", value: "Limited Edition" },
    { key: "3", value: "One and Only" },
    { key: "4", value: "Rare" },
    { key: "4", value: "Common" },
  ];
  return (
    <View>
      <View>
        <Text>Original</Text>
        <SelectList
          setSelected={setSelectedOriginal}
          data={data}
          save="value"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})