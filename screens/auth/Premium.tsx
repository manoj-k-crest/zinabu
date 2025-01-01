import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../src/assets/commonIcons';
import {Colors} from '../../src/styles/colors';

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
  innerContainer: {
    flex: 1,
  },
  innerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  featureList: {
    marginBottom: 30,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkMark: {
    fontSize: 18,
    color: '#000',
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pricingBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
  },
  pricingType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  pricingValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 5,
  },
  pricingDuration: {
    fontSize: 14,
    color: '#555',
  },
  headerRow: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  feature: {
    flex: 3,
    fontSize: 14,
    color: '#000',
  },
  value: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
  },
  footerHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  footerContainer: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#fff',
  },
});

const data = [
  {feature: 'Devices', free: '1', premium: '1-10'},
  {feature: 'Shop name', free: '✔', premium: '✔'},
  {feature: 'Address', free: '✔', premium: '✔'},
  {feature: "Product Listings 1-2 item's", free: '✘', premium: '✔'},
  {feature: 'Shop Description', free: '✔', premium: '✔'},
  {feature: 'Custom Branding', free: '✘', premium: '✔'},
  {feature: 'In-App Chat', free: '✘', premium: '✔'},
  {feature: 'Customer Reviews', free: '✘', premium: '✔'},
  {feature: 'Analytics & Insights', free: '✘', premium: '✔'},
  {feature: 'Social Media Links', free: '✘', premium: '✔'},
  {feature: 'Promotions & Discounts', free: '✘', premium: '✔'},
  {feature: 'Bulk Product Upload', free: '✘', premium: '✔'},
];

const renderRow = ({item}) => (
  <View style={styles.row}>
    <Text style={styles.feature}>{item.feature}</Text>
    <Text style={[styles.value, item.free === '✔' ? styles.green : styles.red]}>
      {item.free}
    </Text>
    <Text
      style={[styles.value, item.premium === '✔' ? styles.green : styles.red]}>
      {item.premium}
    </Text>
  </View>
);

export default function Premium() {
  return (
    <>
      <SafeAreaView />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              // onPress={() => navigation.navigate("guide")}
            >
              <Image
                source={commonIcons.backButton}
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>

            <Image source={commonIcons.appLogo} style={styles.appLogo} />

            <Text>Skip</Text>
          </View>
          <View style={styles.innerContainer}>
            <Text style={styles.innerTitle}>
              Unlock Premium Features for Your Shop with Our Business
              Registration App
            </Text>
            <View style={styles.featureList}>
              {[
                'Add unlimited products and showcase your shop’s full potential',
                'Get priority search placement for higher visibility',
                'Access detailed analytics and insights to track customer engagement',
                'Benefit from exclusive promotional tools to boost your shop’s reach',
              ].map((feature, index) => (
                <View key={index} style={styles.featureItem}>
                  <Text style={styles.checkMark}>✔</Text>
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
            <View style={styles.pricingContainer}>
              <TouchableOpacity style={styles.pricingBox}>
                <Text style={styles.pricingType}>Annual</Text>
                <Text style={styles.pricingValue}>$79.99</Text>
                <Text style={styles.pricingDuration}>per year</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.pricingBox}>
                <Text style={styles.pricingType}>Monthly</Text>
                <Text style={styles.pricingValue}>$7.99</Text>
                <Text style={styles.pricingDuration}>per month</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.headerRow}>
              <Text style={[styles.footerHeader, styles.feature]}>
                Features
              </Text>
              <Text style={[styles.footerHeader, styles.value]}>Free</Text>
              <Text style={[styles.footerHeader, styles.value]}>Premium</Text>
            </View>
            <FlatList
              data={data}
              renderItem={renderRow}
              keyExtractor={(item, index) => index.toString()}
            />
            <Text style={styles.footerHeader}>
              You can cancel your subscription at anytime
            </Text>
          </View>{' '}
        </View>
      </ScrollView>
    </>
  );
}
