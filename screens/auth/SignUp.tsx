import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../src/styles/colors';
import {AuthIcons} from '../../src/assets/AuthIcons';
import {commonIcons} from '../../src/assets/commonIcons';
import {NavigationProps} from '../../src/constants/types';
import {registerNewUser} from '../../src/api/register.service';

const SignUp: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleSignInClick = () => {
    navigation.goBack();
  };

  const handleSignUp = async () => {
    if (!email || !password || !fullName || !phoneNumber) {
      Alert.alert('Error', 'All fields are required!');
      return;
    }

    if (password != confirmPassword) {
      Alert.alert('Both password didnot match');
      return;
    }

    try {
      const res = await registerNewUser({
        email,
        password,
        confirmPassword,
        phoneNumber,
        name: fullName,
      });

      Alert.alert('Success', res.data, [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('accoutVerification', {
              email,
            }),
        },
      ]);
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
            <Image source={commonIcons.backButton} style={styles.backIcon} />
          </TouchableOpacity>

          <Image source={commonIcons.logoZinabu} style={styles.appLogo} />

          <Text style={styles.hiddenText}>LOGO</Text>
        </View>

        <Text style={styles.title}>Register</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            placeholderTextColor="#5B5656"
            value={fullName}
            onChangeText={setFullName}
            keyboardType="email-address"
          />
        </View>

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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter you phone number"
            placeholderTextColor="#5B5656"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="email-address"
          />
        </View>
        <Text style={styles.createPassword}>Create Password</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter New Password"
            placeholderTextColor="#5B5656"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!passwordVisible}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#5B5656"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!passwordVisible}
          />
        </View>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() =>
            navigation.navigate('accoutVerification', {
              email,
            })
          }>
          <Text style={styles.signInButtonText}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or Signup With</Text>

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
    paddingHorizontal: 25,
  },
  header: {
    display: 'flex',
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  appLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECA61B',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  hiddenText: {
    opacity: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 35,
    borderColor: '#999999',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    height: 60,
    backgroundColor: '#F2F4F5',
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
    color: '#333',
  },
  createPassword: {
    fontSize: 16,
    fontWeight: '500',
    color: '#878080',
    textAlign: 'center',
    marginBottom: 10,
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
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    textAlign: 'center',
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

export default SignUp;
