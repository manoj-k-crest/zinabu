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
import {NavigationProps} from '../../src/constants/types';
import {useDispatch} from 'react-redux';
import {login} from '../../src/redux/auth/authSlice';

const EnterPassword: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  route,
}) => {
  const {email} = route.params;

  const dispatch = useDispatch();

  const [password, setPassword] = useState('');

  const handleLogin = () => dispatch(login({email, password}));

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() =>
              navigation.navigate('Home', {
                screen: 'home',
              })
            }>
            <Image
              source={commonIcons.backButton}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <Image source={commonIcons.appLogo} style={styles.appLogo} />
          <View style={{width: '10%'}}></View>
        </View>

        <Text style={styles.title}>Welcome Back!</Text>

        <View style={styles.inputContainer}>
          <TextInput
            passwordRules={'true'}
            style={styles.input}
            placeholder="Enter Password"
            placeholderTextColor="#5B5656"
            value={password}
            onChangeText={setPassword}
            keyboardType="email-address"
          />
        </View>

        <Text style={styles.accountRecovery}>Account Recovery</Text>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => handleLogin()}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
  },
  header: {
    marginBottom: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appLogo: {
    width: 100,
    height: 100,
    backgroundColor: Colors.marketPlacePrimary,
    borderRadius: 10,
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
    borderWidth: 1,
    borderRadius: 35,
    borderColor: 'grey',
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    height: 60,
  },

  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
    color: '#333',
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
    fontWeight: 600,
    color: '#878080',
    textAlign: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 20,
  },
});

export default EnterPassword;
