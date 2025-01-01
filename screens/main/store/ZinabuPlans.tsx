import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {commonIcons} from '../../../src/assets/commonIcons';
import {HEIGHT, WIDTH} from '../../../src/constants';
import SwipeList from '../../../components/SwipeList';
import FeatureList from '../../../components/FeatureList';

const ZinabuPlace = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#262832'}} />
      <StatusBar backgroundColor={'#262832'} />
      <ScrollView style={styles.container}>
        <View style={styles.homeContainer}>
          <View style={styles.zinabuLogo}>
            <Image source={commonIcons.vectorHome} style={styles.imageHome} />
          </View>
          <View style={styles.priceContainer}>
            <Image source={commonIcons.logoZinabu} style={styles.zinabuImage} />
            <Text style={styles.PriceText}>Plans $ Pricing</Text>
          </View>
        </View>
        <View style={styles.DesView}>
          <Text style={styles.FlexiPlans}>
            Flexible plans allows everyone to be able to promote thir products.
            Choose the plan thats right for you.
          </Text>
        </View>
        <View style={styles.DesPlans}>
          <SwipeList />
        </View>
        <View style={styles.featureList}>
          <FeatureList />
        </View>
        <View style={{backgroundColor: '#262832'}}>
          <TouchableOpacity
            style={styles.nextView}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.nextText}> Subscribe</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  featureList: {
    flex: 1,
  },
  FlexiPlans: {
    margin: 10,
    fontSize: 17,
    color: '#393939',
  },
  DesView: {
    backgroundColor: '#F2F4F5',
    height: 100,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  DesPlans: {
    backgroundColor: '#FFFCF2',
    height: 100,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },

  PriceText: {
    textAlign: 'center',
    color: '#C3BFBF',
    fontSize: 24,
    marginRight: 24,
  },
  priceContainer: {
    width: '50%',
    height: '100%',

    justifyContent: 'space-evenly',
  },
  zinabuLogo: {
    width: '30%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    height: HEIGHT * 0.15,
    width: WIDTH,

    flexDirection: 'row',
    backgroundColor: '#262832',
  },
  nextView: {
    borderWidth: 2,
    width: 150,
    height: 60,
    borderRadius: 300,
    backgroundColor: '#F1C40F',
    justifyContent: 'center',
    marginTop: 40,
    alignSelf: 'center',
    marginBottom: 30,
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
    height: 500,
    // padding: 20,
    // borderRadius: 10,
    // marginHorizontal: 20,
    // marginBottom: 20,
  },
  imageHome: {
    width: 30,
    height: 30,
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

export default ZinabuPlace;
