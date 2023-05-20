import React, { useState } from "react";
import { View,Text ,StyleSheet} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default OrientationForm = () => {
  const [selectedOrientation, setSelectedOrientation] = useState("");
  const data = [
    { key: "1", value: "Horizontal"},
    { key: "2", value: "Vertical" },
    { key: "3", value: "Square" },
  ];
  return (
    <View>
        <View >
            <Text>Orientation</Text>
      <SelectList
        setSelected={setSelectedOrientation}
        data={data}
        save="value"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})