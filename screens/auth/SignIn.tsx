import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../src/styles/colors';
import {AuthIcons} from '../../src/assets/AuthIcons';
import {commonIcons} from '../../src/assets/commonIcons';
import {NavigationProps} from '../../src/constants/types';
import {validateEmail} from '../../src/api/validate-email.service';

const LoginScreen: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  const [email, setEmail] = useState('');

  // const handleButtonSubmit = async () => {
  //   try {
  //     const res = await validateEmail({email});

  //     // if (res.succeeded && res.data) {
  //     if (false) {
  //       navigation.navigate('enterPassword', {email});
  //     } else {
  //       navigation.navigate('SignUp', {email});
  //     }
  //   } catch (error) {
  //     console.error('Error validating email:', error);
  //     navigation.navigate('SignUp', {email});
  //   }
  // };

  return (
    <>
      <SafeAreaView />
      <StatusBar backgroundColor="#F2F4F5" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={commonIcons.logoZinabu} style={styles.appLogo} />
        </View>

        <Text style={styles.title}>Hello!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Email Address"
            placeholderTextColor="#5B5656"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.accountRecovery}>Account Recovery</Text>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => navigation.navigate('SignUp', {email})}>
          <Text style={styles.signInButtonText}>Sign in/Signup</Text>
        </TouchableOpacity>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={AuthIcons.GoogleLogin} style={styles.socialIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image source={AuthIcons.AppleLogin} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    paddingHorizontal: Platform.OS == 'android' ? 25 : 25,
  },
  header: {
    marginBottom: 50,
    alignItems: 'center',
  },
  appLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 170,
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: 'column',
    borderWidth: 1.3,
    borderRadius: 35,
    borderColor: '#999999',
    marginBottom: 5,
    // paddingVertical: 10,
    // paddingHorizontal: 17,
    elevation: 2,
    backgroundColor: '#F2F4F5',
    height: 50,
  },

  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#F2F4F5',
    backgroundColor: '#F2F4F5',
    borderColor: 'grey',
    borderRadius: 35,
    marginLeft: 20,
    fontFamily:'open-sans'


   
  },

  signInButton: {
    width: '100%',
    height: 57,
    backgroundColor: '#F1C40F',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: 600,
    color: Colors.black,
  },
  accountRecovery: {
    fontSize: 16,
    fontWeight: 500,
    color: '#878080',
    textAlign: 'center',
  },
  error: {
    color: 'red',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
  },
  socialButton: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
