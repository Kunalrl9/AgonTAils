import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './SignUp';
import Login from './Login';
import Home_discover from '../AwesomeProject/src/screen/Home_discover';
// import my_list from '../AwesomeProject/src/screen/my_list';
// import Browes from '../AwesomeProject/src/screen/Browes';
// import account from '../AwesomeProject/src/screen/account';
// import Manga_Makare from '../AwesomeProject/src/screen/Manga_makare';
import SearchBUtton from '../AwesomeProject/SearchButton';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import myTabs from './navigation/myTabs';
import Home_discover from '../src/screen/Home_discover';
import my_list from '../src/screen/my_list';
import Browes from '../src/screen/Browes';
import Account from '../src/screen/account';
import Manga_Makare from '../src/screen/Manga_makare';
import 'react-native-gesture-handler';

const myTabs = createBottomTabNavigator();

const TabNavigator =() =>{
  return(
  <NavigationContainer>
    <myTabs />
  </NavigationContainer>
  );
}

const Stack = createStackNavigator(); 

export default function App() {
  return (



 <NavigationContainer>
  <Stack.Navigator initialRouteName="Home_discover">
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home_discover" component={Home_discover} />
        <Stack.Screen name="Search" component={SearchBUtton} />
      </Stack.Navigator>
 </NavigationContainer>


  );
}
