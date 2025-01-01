import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/main/Home';
import ItemDetails from '../../screens/item/ItemDetails';
import ItemReviews from '../../screens/item/ItemReviews';
import ViewService from '../../screens/services/ViewService';

export default function HomeTabRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{gestureEnabled: false, headerTitleAlign: 'center'}}
      initialRouteName="home">
      <Stack.Screen
        name={'home'}
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={'itemDetails'}
        component={ItemDetails}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={'itemReviews'}
        component={ItemReviews}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name={'viewService'}
        component={ViewService}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}
