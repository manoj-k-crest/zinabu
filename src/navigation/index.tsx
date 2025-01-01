import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AddStoreStack from './AddStoreStack';
import MainNavigator from './MainNavigator';
import AddItem from '../../screens/item/AddItem';
import AddCampaign from './AddCampaign';
import CustomerFilter from '../../screens/filter/CustomerFilter';
import InitialInformation from './InitialInformation';

export default function RootNavigator() {
  const {user} = useSelector(state => state.auth);
  const Stack = createNativeStackNavigator();

  const isUserAuthencated = () => {
    return true;
    // return user?.data?.token || false;
  };

  console.log(isUserAuthencated(), user);

  return (
    <>
      <NavigationContainer>
        {/* {!isUserAuthencated() ? ( */}
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'AuthStack'}
            component={AuthStack}
          />

          {/* ) : (
          <Stack.Navigator> */}
          <Stack.Screen
            name={'CaptureInitialInformation'}
            component={InitialInformation}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name={'AddShops'}
            component={AddStoreStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'add-item'}
            component={AddItem}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'add-campaign'}
            component={AddCampaign}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'customer-filters'}
            component={CustomerFilter}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        {/* )} */}
      </NavigationContainer>
    </>
  );
}
