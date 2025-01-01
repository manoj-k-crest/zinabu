import {View, Text, Image, TouchableOpacity, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../../src/assets/commonIcons';

export default function Serviceoffer({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F2F4F5" />
      <SafeAreaView />
      <Text style={styles.title}>Take your store online</Text>
      <Image source={commonIcons.interest} style={styles.image} />
      <View style={styles.offerContainer}>
        <Text style={styles.offerText}>
          Get free online store directory today!
        </Text>
      </View>
      <View style={{
      
        flex:1,
        backgroundColor:'#E6E9F4'
      }}>

      <TouchableOpacity
        style={styles.enrollButton}
        onPress={() => navigation.navigate('service-location')}>
        <Text style={styles.enrollButtonText}>Enroll</Text>
      </TouchableOpacity>
      <Text style={styles.freeText}>It’s absolutely free!!!</Text>
      <TouchableOpacity
        style={styles.noThanksButton}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.noThanksText}>No Thanks</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F2F4F5'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
    marginVertical: 20,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 20,
    width: 150,
    height: 150,
  },
  offerContainer: {
    backgroundColor: 'black',
    marginTop: 20,
    padding: 20,
  },
  offerText: {
    fontSize: 32,
    fontWeight: '700',
    color: 'white',
    lineHeight: 40,
  },
  enrollButton: {
    width: '40%',
    backgroundColor: '#f1c310',
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginVertical: 40,
  },
  enrollButtonText: {
    fontSize: 32,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
  freeText: {
    fontSize: 30,
    fontWeight: '700',
    alignSelf: 'center',
  },
  noThanksButton: {
    marginTop: 80,
  },
  noThanksText: {
    fontSize: 24,
    color: '#8C8A8A',
    fontWeight: '400',
    textAlign: 'center',
  },
});
