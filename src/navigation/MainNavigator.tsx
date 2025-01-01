import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Home from '../../screens/main/Home';
import Favourite from '../../screens/main/Favourite';
import Post from '../../screens/main/Post';
import MyStore from '../../screens/main/MyStore';
import {BottonTabIcons} from '../assets/BottomTabIcons';
import HomeTabRoutes from './HomeTabRoutes';
import AccountActivated from '../../screens/auth/AccountActivated';
import AccountSetting from '../../screens/settings/AccountSetting';

export default function MainNavigator(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#FFC700',
        tabBarStyle: {
          backgroundColor: '#262832',
          height: 90, // Increased height for better spacing
          paddingVertical: 10, // Added vertical padding
          // borderTopLeftRadius: 15, // Rounded corners
          // borderTopRightRadius: 15, // Rounded corners
        },
        tabBarIconStyle: {
          marginTop: 5, // Adjust spacing above icons
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: 10, // Increased margin to create more space between icon and label
          marginBottom: 15, // Added extra space below the label
          // fontWeight: 'bold', // Bold label for better readability
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeTabRoutes}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? BottonTabIcons.activeHome : BottonTabIcons.Home}
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: focused ? '#fff' : '#FFC700',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountSetting}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? BottonTabIcons.activeAccount
                  : BottonTabIcons.activeAccount
              }
              style={{
                height: 25,
                width: 25,
                resizeMode: 'contain',
                tintColor: focused ? '#fff' : '#FFC700',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused
                  ? BottonTabIcons.activeFavourite
                  : BottonTabIcons.Favourite
              }
              style={{
                height: 28,
                width: 28,
                resizeMode: 'contain',
                tintColor: focused ? '#fff' : '#FFC700',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? BottonTabIcons.activePost : BottonTabIcons.Post}
              style={{
                height: 28,
                width: 28,
                resizeMode: 'contain',
                tintColor: focused ? '#fff' : '#FFC700',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={MyStore}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={
                focused ? BottonTabIcons.activeMyStore : BottonTabIcons.MyStore
              }
              style={{
                height: 28,
                width: 28,
                resizeMode: 'contain',
                tintColor: focused ? '#fff' : '#FFC700',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#F7CF46',
    height: 60,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  labelStyle: {
    fontSize: 12,
    fontWeight: '600',
  },
});
