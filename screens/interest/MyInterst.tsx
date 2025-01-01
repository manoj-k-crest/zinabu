import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../src/assets/commonIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDropdown from '../../components/CustomDropdown';
import {WIDTH} from '../../src/constants';

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  gradientBorder: {
    borderRadius: 20,
    margin: 8,
    padding: 2,
  },
  tag: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#444444',
    fontWeight: 'bold',
  },
  safeArea: {
    backgroundColor: '#EFB132',
  },
  header: {
    backgroundColor: '#EFB132',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  dropText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  tagsContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '50%',
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownContainer: {
    width: '100%',
    height: 50,
    borderColor: 'white',
    borderWidth: 2.4,
  },
  mainView: {
    width: WIDTH - 200,
    height: 120,
    justifyContent: 'center',
  },
  holderDrop: {
    textAlign: 'center',
    color: '#100D02',
    fontSize: 17,
    fontFamily: 'open-sans',
  },
  iconRight: {
    tintColor: '#fff',
  },
  iconLeft: {
    backgroundColor: 'white',
  },
  topIcons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginTop: 4,
  },
});

const MyInterst: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  const GradientTag = ({label}) => {
    return (
      <LinearGradient
        colors={['#F18D9E', '#FCE084']} // Gradient colors (pink to yellow)
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={styles.gradientBorder}>
        <View style={styles.tag}>
          <Text style={styles.text}>{label}</Text>
        </View>
      </LinearGradient>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#EFB132" barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea} />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('service-offer')}>
          <Image source={commonIcons.homeNew} style={styles.topIcons} />
        </TouchableOpacity>

        <Text style={styles.headerText}>My Interests</Text>
        <Image source={commonIcons.editnew} style={styles.topIcons} />
      </View>

      <View style={styles.tagsContainer}>
        <GradientTag label="Smart Phones" />

        <GradientTag label="Smart Phones" />

        <GradientTag label="Smart Phones" />
      </View>
      <LinearGradient
        colors={['#E87986', '#EFB42D']} // Gradient colors (pink to yellow)
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
        style={styles.footerContainer}>
        <View style={styles.mainView}>
          <Text style={styles.holderDrop}>I am interested in deals @</Text>
          <CustomDropdown
            placeholder="Makola"
            placeholderStyle={styles.dropText}
            iconRight={styles.iconRight}
            style={styles.dropdownContainer}
          />
        </View>
        <View style={styles.mainView}>
          <Text style={styles.holderDrop}>My favourite Marketplace</Text>
          <CustomDropdown
            placeholder="Madina"
            placeholderStyle={styles.dropText}
            iconRight={styles.iconRight}
            style={styles.dropdownContainer}
          />
        </View>
      </LinearGradient>
    </>
  );
};

export default MyInterst;
