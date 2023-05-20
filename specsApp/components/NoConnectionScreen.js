///AFTER CAMERA TEST SCREEN

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Button, Image } from 'react-native';

const NoConnectionScreen = (props) => {
  return (
    <View style={styles.container}>
    {/* <Image
      source={require('../assets/no_connections.png')}
      style={{width:'30%',height:'30%'}}
      resizeMode="contain"
    />
    <Text>No internet connection</Text> */}
    <Text style={{fontSize:40,fontWeight:"bold"}}>You Did It</Text>
    {/* <Button title="Reload page" onPress={props.onCheck}/> */}
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