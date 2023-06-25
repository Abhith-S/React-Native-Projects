import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React,{useState} from "react";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Colors from "../../constants/Colors";
//import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
// import { NativeStackScreenProps } from "@react-navigation/native-stack";
// import { RootStackParamList } from "../types";
import AppTextInput from "../AppTextInput";

import axios from "axios";

const registerUserUrl = "http://139.59.69.142:5000/api/register";

import { useDispatch } from "react-redux";
import { updateLoginToken } from "../../src/features/loginToken/loginTokenSlice";

import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterScreen = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = async () => {
    if ((userName != "", email != "" && password != "")) {
      try {
        const response = await axios({
          method: "post",
          url: registerUserUrl,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            name: userName,
            email: email,
            password: password,
          },
        });

        console.log(response.data);

        dispatch(updateLoginToken({ token: response.data.token }));

        AsyncStorage.setItem("token", response.data.token);

        
      } catch (err) {
        console.log(err);
        alert("Failed. Try again");
      }
    } else if (userName == "") {
      alert("Name required");
    } else if (email == "") {
      alert("Email required");
    } else if (password == "") {
      alert("Password required");
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
            Create account
          </Text>
        </View>
        <View
          style={{
            marginTop: Spacing,
          }}
        >
          <AppTextInput
            placeholder="Name"
            onChangeText={(text) => setUserName(text)}
          />
          <AppTextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <AppTextInput
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity
          onPress={handleSignUp}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            marginVertical: Spacing * 2,
            borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
        >
          <Text
            style={{
              //fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.large,
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Login");
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
            Already have an account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Spacing * 2,
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
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
