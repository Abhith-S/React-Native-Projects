//react packages
import React, { useEffect, useState } from 'react';
import {View, ScrollView, StyleSheet,Button,TouchableOpacity} from 'react-native';

//external packages
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {Ionicons} from 'react-native-vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

//components imports
import { Colors, FontSize, Spacing } from "../../constants/ConstantsExports";

//redux
import { useDispatch,useSelector } from "react-redux";
import { updateLoginToken } from '../../src/features/loginToken/loginTokenSlice';

//api to get user data
const useAuthUrl = "http://139.59.69.142:5000/api/me";

export function Profile(){

  //state variables for user data
  const [userName,setUserName] = useState("")
  const [userEmail,setUserEmail] = useState('')
  

//get the token from redux
  const token = useSelector((state) => state.loginToken.token);
  console.log("token from redux is " + token);

  //use token to get user details
  useEffect(()=>{
    const headers = {
      Authorization: `Bearer ${token}`
    };
  
    const getUserData = async()=>{
      try{
        const response = await axios.get(useAuthUrl, { headers })
        console.log(response.data)
        setUserName(response.data.name)
        setUserEmail(response.data.email)
      }
      catch(err){
        console.log(err)
      }
    }

    getUserData()
  },[])


  const dispatch = useDispatch();

  //remove token from redux store
  const handleLogout = ()=>{
    dispatch(updateLoginToken({token:""}))
    AsyncStorage.removeItem("token");
  }

  return (
    <ScrollView style={styles.container} overScrollMode='never' showsVerticalScrollIndicator={false}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image 
            source={require("../../assets/images/artists/70.png")}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{userName}</Title>
            <Caption style={styles.caption}>@{userName.toLowerCase()}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <MaterialCommunityIcons name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{userEmail}</Text>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>₹140.50</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>0</Title>
            <Caption>Orders</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="heart-outline" color={Colors.blue} size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="credit-card" color={Colors.blue} size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple >
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="share-outline" color={Colors.blue} size={25}/>
            <Text style={styles.menuItemText}>Tell Your Friends</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <MaterialCommunityIcons name="account-check-outline" color={Colors.blue} size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Ionicons name="settings-outline" color={Colors.blue} size={25}/>
            {/* earlier used red color - "#FF6347" */}
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
      </View>
      {/* <Button onPress={handleLogout} title="Logout" color={Colors.blue} /> */}
      <TouchableOpacity
        
          style={{
            padding: Spacing ,
            backgroundColor: Colors.primary,
            //marginVertical: Spacing * 3,
            //borderRadius: Spacing,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: Spacing,
          }}
          onPress={handleLogout}
        >
          <Text
            style={{
              //fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              textAlign: "center",
              fontSize: FontSize.medium,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
