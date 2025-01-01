import React, {useState, useRef} from 'react';
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
import {commonIcons} from '../../src/assets/commonIcons';
import {NavigationProps} from '../../src/constants/types';
import {confirmEmail} from '../../src/api/register.service';

const AccountVerification: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  route,
}) => {
  const {email} = route.params;

  const [otp, setOtp] = useState(''); // Single state for OTP
  const otpInputRefs = useRef<TextInput[]>([]); // Refs for managing input focus

  const handleOtpChange = (text: string, index: number) => {
    if (text.length <= 1) {
      const newOtp = otp.split('');
      newOtp[index] = text;
      setOtp(newOtp.join(''));

      // Move focus to the next input if available
      if (text && index < 3) {
        otpInputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleSignInClick = () => {
    navigation.navigate('SignIn');
  };

  const handleSignUp = async () => {
    try {
      const res = await confirmEmail(email, otp);

      navigation.navigate('accountActivated'); // Example: navigating to the "SignIn" screen
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleSignInClick}>
            <Image
              source={commonIcons.backButton}
              style={styles.backButtonIcon}
            />
          </TouchableOpacity>
          <Image source={commonIcons.logoZinabu} style={styles.appLogo} />
          <Text style={styles.logoPlaceholder}>LOGO</Text>
        </View>

        <Text style={styles.title}>Account Activate</Text>
        <Text style={styles.subtitle}>
          Check your email. We’ve sent a validation code to activate your
          account. Enter OTP below.
        </Text>

        <View style={styles.childContainer}>
          <Text style={styles.label}>Enter OTP Code</Text>
          <View style={styles.otpContainer}>
            {Array.from({length: 4}).map((_, index) => (
              <TextInput
                key={index}
                ref={ref => (otpInputRefs.current[index] = ref!)}
                style={styles.input}
                maxLength={1}
                keyboardType="number-pad"
                value={otp[index] || ''}
                onChangeText={text => handleOtpChange(text, index)}
              />
            ))}
          </View>
          <Text style={styles.resendOTP}>Resend OTP</Text>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
          <Text style={styles.signInButtonText}>Activate Account</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  backButton: {
    width: 45,
    height: 45,

    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECA61B',
  },
  backButtonIcon: {
    width: 24,
    height: 24,
  },
  appLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 40,
  },
  logoPlaceholder: {
    opacity: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    fontWeight: '400',
    //  textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
    lineHeight: 21.79,
    alignSelf:'center',
    marginLeft:10
  },
  input: {
    width: 72,
    height: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 18,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 10,
    
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
    fontWeight: '600',
    color: Colors.black,
  },
  childContainer: {
    marginTop: 50,
  },
  label: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    fontWeight: '600',
    alignSelf: 'center',
    lineHeight: 32.68,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
   
  },
  resendOTP: {
    color: 'red',
    alignSelf: 'center',
    marginVertical: 15,
    fontSize: 20,
    lineHeight: 27.24,
  },
});

export default AccountVerification;
