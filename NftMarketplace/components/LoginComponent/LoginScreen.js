//react imports
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React,{useState} from "react";
import { useDispatch } from "react-redux";

//external packages 
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

//component imports
import {Colors,Spacing,FontSize} from "../../constants/ConstantsExports"
import TextInputComponent from "../TextInputComponent";
import { updateLoginToken } from "../../src/features/loginToken/loginTokenSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userLoginUrl = "http://139.59.69.142:5000/api/token";

const LoginScreen = ({navigation}) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = async () => {

    if(email == "" || password == "" ){
      alert("Enter a valid email and password.")
    }else{
    try {
      const response = await axios({
        method: "post",
        url: userLoginUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      });

      console.log(response.data);
      dispatch(updateLoginToken({token:response.data.token}))

      AsyncStorage.setItem("token",response.data.token)
      
    } catch (err) {
      console.log(err);
      err && alert("Enter a valid email and password.")
    }
  }

  };


  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 2,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
            //fontFamily: Font["poppins-bold"],
              marginTop: Spacing * 3,
            }}
          >
            Login
          </Text>
        </View>
        <View
          style={{
            marginTop: Spacing*2,
            marginBottom: Spacing*3,
          }}
        >
          <TextInputComponent placeholder="Email" onChangeText={(text) => setEmail(text)}/>
          <TextInputComponent placeholder="Password" onChangeText={(text) => setPassword(text)}/>
        </View>

        <View>
          <Text
            style={{
              //fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.small,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forgot your password ?
          </Text>
        </View>

        <TouchableOpacity
        
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 3,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={handleSignIn}
        >
          <Text
            style={{
              //fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {navigation.replace("Register")}}
          style={{
            padding: Spacing,
          }}
        >
          <Text
            style={{
              //fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <Text
            style={{
              //fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.small,
            }}
          >
            Or continue with
          </Text>

          <View
            style={{
              marginTop: Spacing,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-google"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-apple"
                color={Colors.text}
                size={Spacing * 2}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: Spacing,
                backgroundColor: Colors.gray,
                borderRadius: Spacing / 2,
                marginHorizontal: Spacing,
              }}
            >
              <Ionicons
                name="logo-facebook"
                color={Colors.text}
                size={Spacing * 2}
                //backgroundColor="#3358de"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
