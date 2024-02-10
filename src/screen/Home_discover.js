import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import PropTypes from 'deprecated-react-native-prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';




const Tab = createBottomTabNavigator();



const Home_discover = () => {
  const carouselData = [
    { id: '1', image: require('../screen/assets/fire.jpg') },
    { id: '2', image: require('../screen/assets/images.jpg') },
    { id: '3', image: require('../screen/assets/sword-art-online-sao.png') },
    // { id: '4', image: require('../AwesomeProject/assets/Boruto.jpeg') },
  ];
  

  const menuData = [
    { id: 'Kagurabachi', image: require('../screen/assets/KK.jpeg') },
    { id: 'SAKAMOTO DAYS', image: require('../screen/assets/DAYS.jpeg') },
    { id: 'My Hero Academia', image: require('../screen/assets/MHA.jpeg') },
    { id: 'Blue Exorcist', image: require('../screen/assets/TT.jpeg') },
    { id: 'One Piece', image: require('../screen/assets/OP.jpeg') },
    { id: 'Jujutsu Kaisen', image: require('../screen/assets/JJK.jpeg') },
    { id: 'Demon Slayer:..', image: require('../screen/assets/DS.jpeg') },
    { id: 'Sachi’s Records...', image: require('../screen/assets/8.jpeg') },
  ];

  const menuData2 = [
    { id: 'Akane-banashi', image: require('../screen/assets/week/311638.jpg') },
    { id: 'Blue Box', image: require('../screen/assets/week/311824.jpg') },
    { id: 'Me & Roboco', image: require('../screen/assets/week/313120.jpg') },
    { id: 'Nue s Exorcist', image: require('../screen/assets/week/313420.jpg') },
    { id: 'WITCH WATCH', image: require('../screen/assets/week/314236.jpg') },
    { id: 'Kill Blue', image: require('../screen/assets/week/315466.jpg') },
  ];
  const navigation = useNavigation();
  const oky=()=>{
    navigation.navigate('Search');
  }

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={item.image} style={styles.carouselImage} 
      />
    </View>
  );

  const renderMenuItems = () =>
    menuData.map(item => (
      <TouchableOpacity key={item.id} style={styles.menuItem}>
        <Image source={item.image} style={styles.menuItemImage} />
        <Text style={styles.menuItemText}> {item.id}</Text>
      </TouchableOpacity>
    ));

  const renderSecondMenuItems = () =>
    menuData2.map(item => (
    <TouchableOpacity key={item.id} style={styles.menuItem2}>
      <Image source={item.image} style={styles.menuItemImage2} />
      <Text style={styles.menuItemText2}>Menu {item.id}</Text>
    </TouchableOpacity>
  ));

  return (
    <View style={styles.container}>
      {/* <View style={styles.container1}> */}

      
      <Text style={styles.headerText}>AGON TALES</Text>
      <Feather onPress={oky} name="search" size={24} color="black"
        style={styles.searchBtn} />

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.purpleButton]}>
          <Text style={styles.buttonText1}>For U</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Latest</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}

      {/* Carousel
      <Carousel
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={300}
        sliderHeight={100}
        itemWidth={300}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
      /> */}

      {/* Horizontal Scroll Menu */}
      <Text style={styles.title}>TOP HOT</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer}>
        {renderMenuItems()}
      </ScrollView>

       {/* Second Horizontal Scroll Menu */}
    <Text style={styles.title2}>WEEKLY SHONEN JUMP</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuContainer2}>
      {renderSecondMenuItems()}
    </ScrollView>
  </View>


  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
  },
  // container1:{
  //   padding:20,
  //   paddingTop:40,
  //   backgroundColor:'purple'
  // },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    alignItems: '',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '50%',
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -180,
    marginTop: -30,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'purple',
  },
  buttonText1: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 20,
  },

  // purpleButton: {
  //   color: 'red',
  // },
  carouselItem: {
    // backgroundColor: 'black',
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode:"contain",
    // marginRight: -190,
    // marginLeft: -10,
  },
  carouselImage: {
    width: 345,
    height: 193,
    resizeMode:"contain",
    // margin: 40,
  },
  title:{
    top: -210,
    marginLeft: -300,
    fontSize: 20,
    marginBottom: -60,
    color: 'purple',
  },
  title2:{
    top: -170,
    marginLeft: -170,
    fontSize: 20,
    marginBottom: -160,
    color: 'purple',
  },

  menuContainer: {
    marginTop: -200,
    marginLeft: 0,
    bottom: -50,
  },
  menuContainer2:{
    marginTop: -220,
    marginLeft: 0,
    // marginBottom: 10,
    bottom:-120,
  },
  menuItem: {
    marginRight: 5,
    // borderRadius: 8,
    overflow: 'visible',
    margin: 5,
  },
  menuItemImage: {
    width: 100,
    height: 150,
  },
  menuItem2: {
    marginRight: 5,
    // borderRadius: 8,
    overflow: 'visible',
    margin: 5,
  },
  menuItemImage2: {
    width: 100,
    height: 150,
    bottom: -90,
  },
   menuItemText: {
    textAlign: 'left',
    fontSize: 10,
    fontWeight: 'bold',
  },

  menuItemText2: {
    textAlign: 'left',
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom:-80,
    marginTop:90,
  },

  searchBtn: {
    marginLeft:350,
    paddingLeft: 10,
    marginTop: -20,
  },
});

export default Home_discover; 