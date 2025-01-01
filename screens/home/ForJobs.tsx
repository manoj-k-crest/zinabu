import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {commonIcons} from '../../src/assets/commonIcons';

export default function ForJob() {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    jobContainer: {
      backgroundColor: '#FFFAE86B',
      borderRadius: 10,
      padding: 15,
      margin: 10,
      borderWidth: 1,
      borderColor: '#E0E0E0',
    },
    jobTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#000',
    },
    jobTime: {
      backgroundColor: '#E8F8E8',
      color: '#32CD32',
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 5,
      fontWeight: '600',
      fontSize: 14,
    },
    jobSalary: {
      marginLeft: 10,
      fontSize: 14,
      color: '#000',
      fontWeight: '400',
    },
    jobCompanyContainer: {
      width: 40,
      height: 40,
      backgroundColor: '#4B0082',
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    jobDetailsContainer: {
      flexDirection: 'row',
      marginVertical: 8,
      alignItems: 'center',
    },
    companyInfoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    companyTextContainer: {
      marginLeft: 15,
      flex: 1,
    },
    companyNameText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    companyLocationText: {
      fontSize: 14,
      color: '#555',
    },
    companyLogoText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: 20,
    },
    heartIcon: {
      marginLeft: 'auto',
      marginRight: 30,
      marginBottom: 15,
    },
  });

  const SingleJob = () => {
    return (
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Salesman</Text>

        <View style={styles.jobDetailsContainer}>
          <Text style={styles.jobTime}>Full Time</Text>
          <Text style={styles.jobSalary}>Salary: GHS20,00 - GHS25,00</Text>
        </View>

        <View style={styles.companyInfoContainer}>
          <View style={styles.jobCompanyContainer}>
            <Text style={styles.companyLogoText}>H</Text>
          </View>
          <View style={styles.companyTextContainer}>
            <Text style={styles.companyNameText}>
              Hash Mart{' '}
              <Image
                source={commonIcons.verify}
                style={{width: 14, height: 14, resizeMode: 'contain'}}
              />
            </Text>
            <Text style={styles.companyLocationText}>
              <Icon name="location-outline" size={14} style={styles.icon} />{' '}
              Accra Makola
            </Text>
          </View>

          <Icon
            name="heart-outline"
            color={'#A3A0A0'}
            size={25}
            style={styles.heartIcon}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SingleJob />
      <SingleJob />
      <SingleJob />
      <SingleJob />
      <SingleJob />
      <SingleJob />
    </View>
  );
}
