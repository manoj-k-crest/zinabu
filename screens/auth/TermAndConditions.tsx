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
import {Checkbox} from 'react-native-paper';
import {COLORS} from '../../src/constants';

const TermAndConditions: React.FC<{navigation: NavigationProps}> = ({
  navigation,
}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <Text style={styles.title}>Terms And Conditions </Text>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Sapien eget consectetur
          commodo orci parturient cras ipsum amet. Rhoncus gravida nibh tempor
          laoreet volutpat tristique tortor donec. Etiam sed orci at vitae nunc
          sed nulla sed mauris. Ullamcorper viverra aenean felis mattis duis
          eget eget.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Sapien eget consectetur
          commodo orci parturient cras ipsum amet. Rhoncus gravida nibh tempor
          laoreet volutpat tristique tortor donec. Etiam sed orci at vitae nunc
          sed nulla sed mauris. Ullamcorper viverra aenean felis mattis duis
          eget eget.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Sapien eget consectetur
          commodo orci parturient cras ipsum amet. Rhoncus gravida nibh tempor
          laoreet volutpat tristique tortor donec. Etiam sed orci at vitae nunc
          sed nulla sed mauris. Ullamcorper viverra aenean felis mattis duis
          eget eget.
        </Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. Sapien eget consectetur
          commodo orci parturient cras ipsum amet. Rhoncus gravida nibh tempor
          laoreet volutpat tristique tortor donec. Etiam sed orci at vitae nunc
          sed nulla sed mauris. Ullamcorper viverra aenean felis mattis duis
          eget eget.
        </Text>
        <View
          style={{padding: 10, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {}}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Checkbox
              uncheckedColor={Colors.equSecondary}
              color={Colors.equSecondary}
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={{fontSize: 16, color: '#444'}}>
              I agree with the Terms and Conditions
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => {
            navigation.navigate('CaptureInitialInformation');
          }}>
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

  appLogo: {
    width: 100,
    height: 100,
    backgroundColor: Colors.marketPlacePrimary,
    borderRadius: 10,
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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: 32.68,
    marginVertical: 40,
    textAlign: 'center',
    paddingHorizontal: 40,
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
    width: '90%',
    alignSelf: 'center',
    height: 57,
    backgroundColor: '#b6930b',
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
  footerTitle: {
    fontSize: 24,
    fontWeight: 400,
    alignSelf: 'center',
    color: '#999999',
  },
  paragraph: {
    fontWeight: 400,
    lineHeight: 21.4,
    fontSize: 16,
    marginBottom: 20,
  },
});

export default TermAndConditions;
