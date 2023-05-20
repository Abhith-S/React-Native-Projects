import React, { useState } from "react";
import { View, Text ,ScrollView,StyleSheet} from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";

export default SubjectForm = () => {
  const [selectedSubject, setSelectedSubject] = useState([]);
  const data = [
    { key: "1", value: "Abstract" },
    { key: "2", value: "Landscape" },
    { key: "3", value: "Portrait" },
    { key: "4", value: "People" },
    { key: "5", value: "Animal" },
    { key: "6", value: "Nature" },
    { key: "7", value: "Life" },
    { key: "8", value: "Seascape" },
    { key: "9", value: "Architecture" },
    { key: "10", value: "Culture" },
    { key: "11", value: "Classical" },
    { key: "12", value: "Family" },
  ];
  return (
   
      <ScrollView>
        <Text>Subject</Text>
        <MultipleSelectList
          setSelected={setSelectedSubject}
          data={data}
          save="value"
          label="Styles"
        />
      </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  
})
