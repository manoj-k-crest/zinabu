if (__DEV__) {
  require('./ReactotronConfig');
}

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {store} from './src/redux/store';
import {Provider, useSelector} from 'react-redux';
import AuthStack from './src/navigation/AuthStack';
import MainNavigator from './src/navigation/MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddStoreStack from './src/navigation/AddStoreStack';
import CustomerFilter from './screens/filter/CustomerFilter';
import AddItem from './screens/item/AddItem';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AddCampaign from './src/navigation/AddCampaign';
import {initializeTtsListeners, playTTS} from './ttsListeners';
import RootNavigator from './src/navigation';
import {StatusBar} from 'react-native';
// import GlobalFont from 'react-native-global-font';

function App(): React.JSX.Element {
  useEffect(() => {
    initializeTtsListeners();

    // setInterval(() => {
    //   playTTS(
    //     'Hello World! This is text to speech implementation, Keep Coding!!!.',
    //   ); // or Tts.speak(message)
    // }, 1000);
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar backgroundColor="#262832"></StatusBar>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
