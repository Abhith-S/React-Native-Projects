import React, { useState } from "react";
import { Text, View , ScrollView} from "react-native";
import SelectBox from "react-native-multi-selectbox";
import { xorBy } from "lodash";

// Options data must contain 'item' & 'id' keys

const subjectData = [
  { id: "1", item: "pop culture" },
  { id: "2", item: "history" },
  { id: "3", item: "LGBTQ" },
  { id: "4", item: "life" },
  { id: "5", item: "nature" },
  { id: "6", item: "other" },
];

const styleData = [
  { id: "1", item: "abstract" },
  { id: "2", item: "impressionism" },
  { id: "3", item: "nouveau" },
  { id: "4", item: "realism" },
  { id: "5", item: "fine art" },
  { id: "6", item: "other" },
];

const mediumData = [
  { id: "1", item: "acrylic" },
  { id: "2", item: "oil" },
  { id: "3", item: "watercolor" },
  { id: "4", item: "ink" },
  { id: "5", item: "pencil" },
  { id: "6", item: "other" },
];

const materialData = [
  { id: "1", item: "canvas" },
  { id: "2", item: "paper" },
  { id: "3", item: "wood" },
  { id: "4", item: "soft" },
  { id: "5", item: "glass" },
  { id: "6", item: "other" },
];

const sizeData = [
  { id: "1", item: "small" },
  { id: "2", item: "medium" },
  { id: "3", item: "large" },
  { id: "4", item: "oversized" },
];

const orientationData = [
  { id: "1", item: "landscape" },
  { id: "2", item: "portrait" },
  { id: "3", item: "square" },
];

function dropDown() {
  const [selectedSubject, setSelectedSubject] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [selectedMedium, setSelectedMedium] = useState({});
  const [selectedMaterial, setSelectedMaterial] = useState({});
  const [selectedSize, setSelectedSize] = useState({});
  const [selectedOrientation, setSelectedOrientation] = useState({});

  // const [selectedTeam, setSelectedTeam] = useState({})
  // const [selectedTeams, setSelectedTeams] = useState([])

  return (
    <ScrollView style={{ margin: 30 }} nestedScrollEnabled = {true}>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Text style={{ fontSize: 30, paddingBottom: 20 }}>Demos</Text>
      </View>

      <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
      <SelectBox
        label="Select multiple"
        options={subjectData}
        selectedValues={selectedSubject}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        listOptionProps={{ nestedScrollEnabled: true }}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
      <SelectBox
        label="Select multiple"
        options={styleData}
        selectedValues={selectedStyle}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
        listOptionProps={{ nestedScrollEnabled: true }}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
      <SelectBox
        label="Select single"
        options={mediumData}
        value={selectedMedium}
        onChange={onChange()}
        hideInputFilter={false}
        listOptionProps={{ nestedScrollEnabled: true }}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
      <SelectBox
        label="Select single"
        options={materialData}
        value={selectedMaterial}
        onChange={onChange()}
        hideInputFilter={false}
        listOptionProps={{ nestedScrollEnabled: true }}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
      <SelectBox
        label="Select single"
        options={sizeData}
        value={selectedSize}
        onChange={onChange()}
        hideInputFilter={false}
        listOptionProps={{ nestedScrollEnabled: true }}
      />
      <View style={{ height: 40 }} />
      <Text style={{ fontSize: 20, paddingBottom: 10 }}>Select Demo</Text>
      <SelectBox
        label="Select single"
        options={orientationData}
        value={selectedOrientation}
        onChange={onChange()}
        hideInputFilter={false}
        listOptionProps={{ nestedScrollEnabled: true }}
      />
    </ScrollView>
  );

  function onMultiChange() {
    return (item) => setSelectedSubject(xorBy(setSelectedSubject, [item], "id"));
  }

  function onChange() {
    return (val) => setSelectedMedium(val);
  }
}

export default dropDown;
