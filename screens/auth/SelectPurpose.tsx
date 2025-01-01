import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../src/styles/colors';
import {commonIcons} from '../../src/assets/commonIcons';
import {PurposeIcons} from '../../src/assets/PurposeIcons';

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const SelectPurpose: React.FC<{navigation: NavigationProps}> = ({
  navigation,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={commonIcons.appLogo} style={styles.appLogo} />
        </View>

        <Text style={styles.title}>Select your purpose</Text>

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate('AddShops');
            }}>
            <Text style={styles.subtitle}>Business Owner</Text>
            <Text style={styles.description}>
              I’d like to register my business
            </Text>
            <Image source={PurposeIcons.Owner} style={styles.image} />
          </TouchableOpacity>

          {/* Customer Section */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate('define-interst');
            }}>
            <Text style={styles.subtitle}>Customer</Text>
            <Text style={styles.description}>
              I am consumer and looking for shops
            </Text>
            <Image source={PurposeIcons.Customer} style={styles.image} />
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
    marginBottom: 50,
    alignItems: 'center',
  },
  appLogo: {
    width: 100,
    height: 100,
    backgroundColor: Colors.marketPlacePrimary,
    borderRadius: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 25,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 213,
    height: 160,
    resizeMode: 'contain',
  },
});

export default SelectPurpose;
