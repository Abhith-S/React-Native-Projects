import { Button, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { updateLoginToken } from "../src/features/loginToken/loginTokenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const useAuthUrl = "http://139.59.69.142:5000/api/me";

export default Home = ({navigation}) => {

    const dispatch = useDispatch();

  const token = useSelector((state) => state.loginToken.token);
  console.log("token from home page is " + token);

  const handleLogout = ()=>{
    dispatch(updateLoginToken({token:""}))
    AsyncStorage.removeItem("token");
    navigation.replace("WelcomeScreen")
  }

  const headers = {
    Authorization: `Bearer ${token}`
  };

  const getUserData = async()=>{
    try{
      const response = await axios.get(useAuthUrl, { headers })
      console.log(response.data)
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: "80%" }}
    >
      <View>
        <Text>Home Screen </Text>
        <Button onPress={handleLogout} title="Logout" color="#841584" />
        <View style={{marginVertical:20}}></View>
        <Button onPress={getUserData} title="Get data"/>
      </View>
    </View>
  );
};
