import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { updateLoginToken } from "../src/features/loginToken/loginTokenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Home = () => {

    const dispatch = useDispatch();

  const token = useSelector((state) => state.loginToken.token);
  console.log("token from home page is " + token);

  const handleLogout = ()=>{
    dispatch(updateLoginToken({token:""}))
    AsyncStorage.removeItem("token");
  }
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "80%" }}
    >
      <View>
        <Text>Home Screen </Text>
        <Button onPress={handleLogout} title="Logout" color="#841584" />
      </View>
    </View>
  );
};
