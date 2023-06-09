import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React,{useState} from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

//type Props = NativeStackScreenProps<RootStackParamList, "Login">;

import axios from "axios";

import { useDispatch } from "react-redux";
import { updateLoginToken } from "../src/features/loginToken/loginTokenSlice";

const registerUserUrl = "http://139.59.69.142:5000/api/token";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = ({ navigation }) => {
 
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [token, setToken] = useState("");

  const dispatch = useDispatch();

  const handleSignIn = async () => {
    try {
      const response = await axios({
        method: "post",
        url: registerUserUrl,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          email: email,
          password: password,
        },
      });

      console.log(response.data);
      console.log(String(response.data.token))
      //setToken(response.data.token);
      dispatch(updateLoginToken({token:response.data.token}))

      AsyncStorage.setItem("token",response.data.token)
      
    } catch (err) {
      console.log(err);
    }

  };

//console.log(token)

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
          {/* <Text
            style={{
              //fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              maxWidth: "60%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed!
          </Text> */}
        </View>
        <View
          style={{
            marginTop: Spacing * 2,
            marginBottom: Spacing * 3,
          }}
        >
          <AppTextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <AppTextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />
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
          onPress={() => {
            navigation.replace("Register");
          }}
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
