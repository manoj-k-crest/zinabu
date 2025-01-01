import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../src/styles/colors';
import {AuthIcons} from '../../src/assets/AuthIcons';
import {commonIcons} from '../../src/assets/commonIcons';
import {NavigationProps} from '../../src/constants/types';
import {WIDTH} from '../../src/constants';

const AccountActivated: React.FC<{navigation: NavigationProps}> = ({
  navigation,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nextInputRef: TextInput[] = [];

  const [otp, setOtp] = useState(['', '', '', '']); // State for OTP

  const handleInputChange = (text: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text;

    if (text && index < 3) {
      nextInputRef[index + 1].focus(); // Move focus to next input
    }

    setOtp(updatedOtp);
  };

  const handleSignInClick = () => {
    // Navigation logic or any other action
    navigation.navigate('SignIn'); // Example: navigating to the "SignIn" screen
  };

  const handleSignUp = () => {
    navigation.navigate('termAndConditions'); // Example: navigating to the "SignIn" screen
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={commonIcons.logoZinabu} style={styles.appLogo} />
        </View>

        <Text style={styles.title}>Account Activated!</Text>

        <Text style={styles.subtitle}>
          Thank you and welcome to Zinabu! Your account is now activated.
        </Text>
        <View>
          <View
            style={{
              height: 200,
              borderWidth: 0.5,
              borderRadius: 50,
              padding: 25,
            }}>
            <Text style={{fontSize: 20, fontWeight: 600}}>
              Define your interest so we can help you find stuff quicker and
              easier.{' '}
            </Text>
          </View>
          <View style={{height: 130}}>
            <View
              style={{
                position: 'absolute',
                top: -100,
                left: 60,
              }}>
              <Image
                source={commonIcons.shopping}
                style={{
                  width: 180,
                  alignSelf: 'center',
                  height: 180,
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 400,
                  alignSelf: 'center',
                  color: '#6C757D',
                  marginVertical: 10,
                }}>
                Tell us products you are interested in.
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
          <Text style={styles.signInButtonText}>Start</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    paddingHorizontal: 25,
  },
  header: {
    display: 'flex',
    marginBottom: 50,
    alignSelf: 'center',
    width: WIDTH,
    justifyContent: 'center',
  },
  appLogo: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  backButton: {
    width: 45,
    height: 45,
    marginBottom: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECA61B',
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    lineHeight: 21.79,
  },
  input: {
    width: 70,
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 15,
  },
  signInButton: {
    width: '50%',
    alignSelf: 'center',
    height: 57,
    backgroundColor: '#F1C40F',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: 600,
    color: Colors.black,
  },
  childContainer: {
    marginTop: 50,
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    fontWeight: 600,
    alignSelf: 'center',
    lineHeight: 32.68,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  resendOTP: {
    color: 'red',
    alignSelf: 'center',
    marginVertical: 15,
    fontSize: 20,
    lineHeight: 27.24,
  },
});

export default AccountActivated;
