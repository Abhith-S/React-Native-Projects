import { View, ScrollView, Button ,StyleSheet} from "react-native";
import MediumForm from "../components/MediumForm";
import MaterialForm from "../components/MaterialForm";
import SizeForm from "../components/SizeForm";
import OrientationForm from "../components/OrientationForm";
import OriginalForm from "../components/OriginalForm";
import QualityForm from "../components/QualityForm";
import StyleForm from "../components/StyleForm";
import SubjectForm from "../components/SubjectForm";
import ColorsForm from "../components/ColorsForm";
import DropDownCombined from "../components/DropDownCombined";

export default DropDownForm = () => {
  return (
    <View>
      {/* <SubjectForm />
      <StyleForm />
      <MediumForm />
      <MaterialForm />
      <QualityForm />
      <OriginalForm/>
      <SizeForm />
      <OrientationForm />
      <ColorsForm /> */}
      <DropDownCombined/>
    </View>
  );
};

const styles = StyleSheet.create({
  
})
