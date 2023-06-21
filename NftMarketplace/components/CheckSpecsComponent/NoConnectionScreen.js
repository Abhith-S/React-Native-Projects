///AFTER CAMERA TEST SCREEN

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, Image } from 'react-native';

const NoConnectionScreen = (props) => {
  return (
    <View style={styles.container}>
    
    <Text style={{fontSize:40,fontWeight:"bold"}}>No Internet Connection</Text>
   
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NoConnectionScreen