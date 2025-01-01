import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDropdown from '../../../components/CustomDropdown';
import {CustomSlider} from '../../../components/CustomSlider';
import {createStore} from '../../../src/api/store.service';

const ServiceBusinessType = ({navigation, route}) => {
  const {
    imageInfo,
    marketPlaceLocation,
    businessName,
    phoneNumber,
    description,
    openTime,
    closeTime,
  } = route.params;
  const [value, setValue] = useState(0.2);
  const [subCategory, setCategory] = useState('');
  const [businessSize, setBusinessSize] = useState('');

  const handleNext = async () => {
    // if (!subCategory || !businessSize) {
    //   Alert.alert(
    //     'Missing Information',
    //     'Please fill out all required fields.',
    //   );
    //   return;
    // }

    // await createStore({
    //   subCategory,
    //   businessSize,
    //   imageInfo,
    //   marketPlaceLocation,
    //   businessName,
    //   phoneNumber,
    //   description,
    //   openTime,
    //   closeTime,
    // });

    navigation.navigate('Zinabu-subscription');
  };

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Icon name="chevron-back-outline" size={20} />
        </TouchableOpacity>
        <View style={styles.InfoView}>
          <Text style={styles.headerText}>
            Now let’s describe the nature of your business
          </Text>
        </View>
        <Text style={styles.businessText}>
          What’s the type of business operation?
        </Text>
        <CustomDropdown
          placeholder="Select a category from here"
          style={styles.dropdown}
          placeholderStyle={styles.dropdownPlaceholder}
          iconLeft={styles.downDownLeft}
          iconRight={styles.dropDownRight}
          setSelectedItem={setCategory}
          selectedItem={subCategory}
        />
        <Text style={styles.businessText}>What’s the size of business?</Text>
        <CustomDropdown
          placeholder="Medium size ( employ 20 - 100 )"
          style={styles.dropdown}
          placeholderStyle={styles.dropdownPlaceholder}
          iconLeft={styles.downDownLeft}
          iconRight={styles.dropDownRight}
          setSelectedItem={setBusinessSize}
          selectedItem={businessSize}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.businessText}>Number of years in business?</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '89%',
              alignItems: 'center',
            }}>
            <Text style={styles.sliderText}>{value}</Text>
            <CustomSlider
              minimumValue={0}
              maximumValue={100}
              value={value}
              onValueChange={setValue}
              style={{width: '89%', height: 150, color: '#282632'}}
            />
            <Text style={styles.sliderText}>100+</Text>
          </View>
        </View>
        <View style={styles.nextButton}>
          <TouchableOpacity style={styles.nextView} onPress={handleNext}>
            <Text style={styles.nextText}> Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default ServiceBusinessType;

const styles = StyleSheet.create({
  nextText: {
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '600',
    color: '#111111',
  },
  openText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111111',
  },
  nextView: {
    borderWidth: 2,
    width: 200,
    height: 60,
    borderRadius: 300,
    backgroundColor: '#F1C40F',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#262832',
    // flex:1,
    height: 400,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderText: {
    color: '#BDBDBD',
    fontWeight: '700',
  },
  businessText: {
    marginTop: 14,
    textAlign: 'center',
    marginRight: 50,
    color: '#232020',
  },
  downDownLeft: {
    backgroundColor: '#F1C40F',
  },
  dropDownRight: {
    tintColor: '#fff',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
    margin: 17,
    backgroundColor: '#F1C40F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  InfoView: {
    alignContent: 'center',
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 24,
    textAlign: 'left',
    fontWeight: '700',
    color: '#252323',
  },
  container: {
    flex: 1,
  },
  dropdown: {
    width: '80%',
    height: 50,
    backgroundColor: '#262832',
    alignSelf: 'center',
  },
  dropdownPlaceholder: {
    fontSize: 15,
    marginLeft: 10,
    color: '#fff',
  },
});
