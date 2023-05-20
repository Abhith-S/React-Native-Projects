import React, { useState } from "react";
import { View,Text , StyleSheet} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default MaterialForm = () => {
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const data = [
    { key: "1", value: "Canvas"},
    { key: "2", value: "Paper" },
    { key: "3", value: "Wood" },
    { key: "4", value: "Cardboard"},
    { key: "5", value: "Plastic" },
    { key: "6", value: "Soft (Yarn, Cotton, Fabric)" },
    { key: "7", value: "Aluminium" },
    { key: "8", value: "Glass" },
    { key: "9", value: "Carbon Fibre"},
    { key: "10", value: "Canvas Board" },
    { key: "11", value: "Mixed Media" },
    { key: "12", value: "Other" },
  ];
  return (
    <View>
        <View >
            <Text>Material</Text>
      <SelectList
        setSelected={setSelectedMaterial}
        data={data}
        save="value"
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  
})
