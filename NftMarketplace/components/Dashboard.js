//react imports
import {View,StyleSheet}  from "react-native"

//external packages
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import EntypoIcons from "react-native-vector-icons/Entypo";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
MaterialCommunityIcons;

//components imports
import { Home, Explore, Cart, Profile, CreateNFT,Header } from "./ComponentsExport";

const Tab = createBottomTabNavigator();

export default Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header/>
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => <EntypoIcons name="home" size={23} />,
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: () => <MaterialIcons name="explore" size={23} />,
          }}
        /> */}
        <Tab.Screen
          name="CreateNFT"
          component={CreateNFT}
          options={{
            tabBarLabel: "Create NFT",
            tabBarIcon: () => <EntypoIcons name="plus" size={40} />,
          }}
        />
       
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: "Cart",
            tabBarIcon: () => <MaterialIcons name="shopping-cart" size={23} />,
          }}
        />
         <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="account" size={23} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
