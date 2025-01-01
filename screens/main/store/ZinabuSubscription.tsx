import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {commonIcons} from '../../../src/assets/commonIcons';

const ZinabuSubscription = ({navigation}) => {
  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={commonIcons.logo} style={styles.zinabuImage} />
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.title}>Welcome to our eDirectory</Text>
          <Text style={styles.subtitle}>
            People can now easily locate your business through Zinabu no matter
            your business location.
          </Text>
        </View>

        {/* Promotion Section */}
        <View style={styles.promotion}>
          <Text style={styles.promotionTitle}>
            Take your business beyond eDirectory
          </Text>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.freeTrial}>
            ⭐ Try MyStore 15 days for free ⭐
          </Text>
          <Text style={styles.freeTrialSubtext}>
            Cancel any time at no cost
          </Text>
          <Text style={styles.featuresText}>Features</Text>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View style={styles.featureItem}>
              <Icon name="bag" color="#F1C40F" size={30}></Icon>
              <Text style={styles.featureText}>
                Sell fast via our online store
              </Text>
            </View>

            <View style={styles.featureItem}>
              <Icon name="clipboard" color="#F1C40F" size={30}></Icon>
              <Text style={styles.featureText}>
                Full product catalog with photos
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="clipboard" color="#F1C40F" size={30}></Icon>
              <Text style={styles.featureText}>Powerful Campaign Tools</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="bag-add" color="#F1C40F" size={30}></Icon>
              <Text style={styles.featureText}>Video advertisement</Text>
            </View>
            <View style={styles.featureItem}>
              <Icon name="bag-add" color="#F1C40F" size={30}></Icon>
              <Text style={styles.featureText}>Custom branding</Text>
            </View>
          </View>

          {/* Explore Plans Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Zinabu-plans')}
            style={styles.exploreButton}>
            <Text style={styles.exploreButtonText}>Explore plans</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextView}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.nextText}> Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  nextView: {
    borderWidth: 2,
    width: 150,
    height: 40,
    borderRadius: 300,
    backgroundColor: '#F1C40F',
    justifyContent: 'center',
    marginTop: 40,
    alignSelf: 'center',
  },
  nextButton: {
    backgroundColor: '#262832',
    height: 250,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 600,
    color: '#111111',
  },
  featuresText: {
    color: '#F1C40F',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 10,
    left: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  welcomeSection: {
    padding: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'left',
    color: '#111111',
    fontWeight: 300,
    width: '90%',
    paddingLeft: 20,
  },
  promotion: {
    padding: 15,
    backgroundColor: '#ffff',
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 20,
  },
  promotionTitle: {
    fontSize: 22,
    fontWeight: '700',
  },
  featuresSection: {
    backgroundColor: '#252832',
    height: 600,
    
  },
  zinabuImage: {width: 200, height: 80, resizeMode: 'contain'},
  freeTrial: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffd700',

    textAlign: 'center',
    marginTop: 10,
    fontFamily: 'open-sans',
    width: '100%',
  },
  freeTrialSubtext: {
    fontSize: 12,
    color: '#ccc',
    textAlign: 'right',
    marginBottom: 15,
    right: 50,
    fontWeight: '400',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  featureIcon: {
    fontSize: 18,
    color: '#ffd700',
    marginRight: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#ffffff',
    marginLeft: 10,
  },
  exploreButton: {
    marginTop: 15,
    backgroundColor: '#ffc107',
    borderRadius: 5,
    alignItems: 'center',
    width: 150,
    height: 20,
    alignSelf: 'center',
  },
  exploreButtonText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#ffc107',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 100,
    marginBottom: 20,
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ZinabuSubscription;
