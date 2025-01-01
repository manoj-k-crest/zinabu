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
import {commonIcons} from '../../src/assets/commonIcons';

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const ForgetPassword: React.FC<{navigation: NavigationProps}> = ({
  navigation,
}) => {
  const [email, setEmail] = useState('');

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('SignIn')}>
            <Image
              source={commonIcons.backButton}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>

          <Image source={commonIcons.appLogo} style={styles.appLogo} />

          <Text style={{opacity: 0}}>LOGO</Text>
        </View>

        <Text style={styles.title}>Forgot password </Text>
        <Text style={styles.subtitle}>
          Enter your email account to reset your password
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="********@gmail.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.orContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Phone Numner</Text>

          <TextInput
            style={styles.input}
            placeholder="9988776655"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => navigation.navigate('forgetPasswordVerification')}>
            <Text style={styles.continueButtonText}>Continue </Text>
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
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appLogo: {
    width: 100,
    height: 100,
    backgroundColor: Colors.marketPlacePrimary,
    borderRadius: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6C757D',
    fontWeight: 400,
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    height: 69,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
    color: '#333',
  },

  continueButton: {
    width: '100%',
    height: 57,
    backgroundColor: '#FFD700',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 80,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: 600,
    color: Colors.black,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    marginVertical: 40,
    flex: 1,
    height: 1,
    backgroundColor: '#000',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 10,
    fontWeight: 600,
    color: Colors.lightYellow,
  },
});

export default ForgetPassword;
