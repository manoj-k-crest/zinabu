import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../../screens/auth/SignIn';
import SignUp from '../../screens/auth/SignUp';
import ForgetPassword from '../../screens/auth/ForgetPassword';
import SelectPurpose from '../../screens/auth/SelectPurpose';
import Guide from '../../screens/auth/Guide';
import OtpVerification from '../../screens/auth/OtpVerification';
import EnterPassword from '../../screens/auth/EnterPassword';
import AccountVerificaton from '../../screens/auth/AccountVerification';
import AccountActivated from '../../screens/auth/AccountActivated';
import TermAndConditions from '../../screens/auth/TermAndConditions';

export default function AuthStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="premium-features"
        options={{headerShown: false}}
        component={Premium}
      /> */}

      <Stack.Screen
        name="SignIn"
        options={{headerShown: false}}
        component={SignIn}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="SignUp"
        component={SignUp}
      />

      <Stack.Screen
        name="enterPassword"
        options={{headerShown: false}}
        component={EnterPassword}
      />

      <Stack.Screen
        name="accoutVerification"
        options={{headerShown: false}}
        component={AccountVerificaton}
      />

      <Stack.Screen
        name="accountActivated"
        options={{headerShown: false}}
        component={AccountActivated}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="selectPurpose"
        component={SelectPurpose}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="forgetPassword"
        component={ForgetPassword}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name="forgetPasswordVerification"
        component={OtpVerification}
      />

      <Stack.Screen
        name="termAndConditions"
        options={{headerShown: false}}
        component={TermAndConditions}
      />

      <Stack.Screen
        name="guide"
        options={{headerShown: false}}
        component={Guide}
      />
    </Stack.Navigator>
  );
}
