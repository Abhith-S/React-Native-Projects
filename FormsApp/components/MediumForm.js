import React, { useState } from "react";
import { View,Text , StyleSheet} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default MediumForm = () => {
  const [selectedMedium, setSelectedMedium] = useState("");
  const data = [
    { key: "1", value: "Acrylic"},
    { key: "2", value: "Oil" },
    { key: "3", value: "Watercolor" },
    { key: "4", value: "Ink"},
    { key: "5", value: "Spray Paint" },
    { key: "6", value: "Digital" },
    { key: "7", value: "Graphite" },
    { key: "8", value: "Watercolor" },
    { key: "9", value: "Enamel"},
    { key: "10", value: "Paint" },
    { key: "11", value: "Pencil" },
    { key: "12", value: "Other" },
  ];
  return (
    <View>
        <View >
            <Text>Medium</Text>
      <SelectList
        setSelected={setSelectedMedium}
        data={data}
        save="value"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})