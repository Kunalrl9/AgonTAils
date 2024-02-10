import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home_discover from '../src/screen/Home_discover';
import my_list from '../src/screen/my_list';
import Browes from '../src/screen/Browes';
import Account from '../src/screen/account';
import Manga_Makare from '../src/screen/Manga_makare';
import 'react-native-gesture-handler';

const TabNavigator = createBottomTabNavigator();

const customBottomTabNvigator=({children, onPress}) =>(
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
     onPress={onPress}
    >
        <view style={{
            width: 70,
            height: 70,
            borderRadius: 35, 
            backgroundColor: '#e32f45'
        }}
        >
            {children}
        </view>
    </TouchableOpacity>
);

const myTabs = () => {
    return(
        <Tabs.Navigator
        tabBarOption={{
            showLabel: false,
            style: {
                position: 'absolute' ,
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 15,
                height: 90,
                ...style.shadow

            }
        }}
        >
            <TabNavigator.Screen name="discover" component={Home_discover}  options={{
                tabBarIcon: ({focused}) => (
                    <view style={{alignItems: 'center', justifyContent:'center', top:10}}>
                        <image
                         source={require('../src/screen/assets/icon/discover.png')} 
                         resizeMode='cantain'
                         style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94' , 
                         }}
                         />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>discover</Text>
                    </view>
                ),
            }}/>
            <TabNavigator.Screen name="My list" component={my_list} />options={{
                tabBarIcon: ({focused}) => (
                    <view style={{alignItems: 'center', justifyContent:'center', top:10}}>
                        <image
                         source={require('../src/screen/assets/icon/mylist.png')} 
                         resizeMode='cantain'
                         style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94' , 
                         }}
                         />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>my list</Text>
                    </view>
                ),
            }}
            <TabNavigator.Screen name="Create Manga" component={Manga_Makare} 
            options={{
                 tabBarIcon: ({focused})=>(
                    <image
                    source={ require('../src/screen/assets/icon/Agontales.png')}
                    resizeMode="contain"
                    style={{
                        width:30,
                        height:30,
                        tintColor: '#fff'
                    }}
                    />
                 ),
                 tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                 )
            }}
            />
            <TabNavigator.Screen name="Borwer" component={Browes} options={{
                tabBarIcon: ({focused}) => (
                    <view style={{alignItems: 'center', justifyContent:'center', top:10}}>
                        <image
                         source={require('../src/screen/assets/icon/browes.png')} 
                         resizeMode='cantain'
                         style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94' , 
                         }}
                         />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Borwer</Text>
                    </view>
                ),
            }}/>
            <TabNavigator.Screen name="account" component={Account}  options={{
                tabBarIcon: ({focused}) => (
                    <view style={{alignItems: 'center', justifyContent:'center', top:10}}>
                        <image
                         source={require('../src/screen/assets/icon/account.png')} 
                         resizeMode='cantain'
                         style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? '#e32f45' : '#748c94' , 
                         }}
                         />
                        <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>Account</Text>
                    </view>
                ),
            }}/>
        </Tabs.Navigator>
    );
}  

const style = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})

export default myTabs;