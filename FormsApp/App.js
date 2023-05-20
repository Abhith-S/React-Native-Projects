import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import { TextForm } from "./screens/TextForm";
import DropDownForm from "./screens/DropDownForm";
import { useState } from "react";

export default function App() {
  const [textFormComplete, setTextFormComplete] = useState(false);
  return (
    <View style={styles.container} overScrollMode="never">
      <Text style={styles.container_text}>Fill the details below : </Text>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        {textFormComplete == false ? (
          <TextForm setTextFormComplete={setTextFormComplete} />
        ) : (
          <DropDownForm />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  container_text: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
