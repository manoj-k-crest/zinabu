import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDropdown from '../../../components/CustomDropdown';

export default function ServiceCategory({navigation, route}) {
  const {
    marketPlaceLocation,
    businessName,
    phoneNumber,
    description,
    openTime,
    closeTime,
    imageInfo,
  } = route.params;

  const [category, setCategory] = useState('');

  const handleNext = () => {
    // if (category == '') {
    //   Alert.alert('Error', 'Please select or take a photo to proceed.');
    //   return;
    // }

    navigation.navigate('service-business-type', {
      imageInfo,
      marketPlaceLocation,
      businessName,
      phoneNumber,
      description,
      openTime,
      closeTime,
      category,
    });
  };

  return (
    <>
      <StatusBar backgroundColor="#262832" barStyle="light-content" />
      <SafeAreaView style={styles.safeAreaView} />
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="chevron-back-outline" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading}>What industry do you operate in?</Text>
        <Text style={styles.subHeading}>Choose from the list below</Text>
        <CustomDropdown
          placeholder="Select a category from here"
          style={styles.dropdown}
          placeholderStyle={styles.dropdownPlaceholder}
          setSelectedItem={setCategory}
          selectedItem={category}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#262832',
  },
  mainContainer: {
    backgroundColor: '#262832',
    paddingHorizontal: 40,
    flex: 1,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1C40F',
    marginBottom: 10,
    marginTop: Platform.OS == 'android' ? 10 : 0,
  },
  heading: {
    fontSize: 26,
    color: 'white',
    textAlign: 'left',
    marginVertical: 10,
    fontWeight: '700',
    marginLeft: 50,
  },
  subHeading: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginVertical: 50,
    fontWeight: '400',
  },
  dropdown: {
    width: '100%',
    height: 60,
    backgroundColor: '#F1C40F',
  },
  dropdownPlaceholder: {
    fontSize: 17,
    marginLeft: 10,
    color: '#151414',
  },
  footer: {
    backgroundColor: 'white',
    height: '30%',
  },
  nextButton: {
    width: '40%',
    backgroundColor: '#f1c310',
    borderRadius: 50,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'center',
    marginVertical: 100,
  },
  nextButtonText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
});
