import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../../src/assets/commonIcons';
import CustomDropdown from '../../../components/CustomDropdown';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {WIDTH} from '../../../src/constants';

export default function ServiceLocation({navigation, route}) {
  // const {data} = useSelector(=>);
  const [marketPlaceLocation, setMarketPlace] = useState('');
  const handleNextButtonClick = () => {
    // if (marketPlaceLocation == '') {
    //   Alert.alert('Please enter service locaton');
    //   return;
    // }
    navigation.navigate('service-info', {marketPlaceLocation});
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View
        style={{
          marginBottom: 20,
        }}>
        <Text style={styles.title}>
          Let’s start with your business location
        </Text>
      </View>
      <Text style={styles.offerText}>
        Is your business in a marketplace below?
      </Text>
      <StatusBar backgroundColor="#fff" />

      <CustomDropdown
        placeholder="Select a marketplace locaion here"
        style={styles.dropdown}
        placeholderStyle={styles.dropdownPlaceholder}
        selectedTextStyle={styles.selectedTextStyle}
        iconRight={{tintColor: '#fff', marginBottom: 10}}
        setSelectedItem={setMarketPlace}
        selectedItem={marketPlaceLocation}
      />

      <Text style={styles.orText}>OR</Text>

      <View style={styles.mapContainer}>
        <Text style={styles.mapInstruction}>
          Set your business location on the map
        </Text>
        {/* <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: 37.7749, longitude: -122.4194}}
            pinColor="blue"
          />
        </MapView> */}
      </View>

      <View style={styles.nextButtonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNextButtonClick}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: '#F2F4F5',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
    marginVertical: 20,
    paddingHorizontal: 60,
  },
  offerText: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 40,
  },
  dropdown: {
    width: '100%',
    height: 60,
    backgroundColor: 'black',
  },
  dropdownPlaceholder: {
    color: 'white',
    fontSize: 16,
  },
  orText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 20,
  },
  mapContainer: {
    height: 300,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    elevation: 2,
  },
  mapInstruction: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  map: {
    flex: 1,
    borderRadius: 10,
  },
  nextButtonContainer: {
    flex: 1,
    marginTop: 15,
    borderWidth: 1,
    width: WIDTH,
    alignSelf: 'center',
    backgroundColor: '#262832',
  },
  nextButton: {
    width: '40%',
    backgroundColor: '#f1c310',
    borderRadius: 30,
    paddingVertical: 10,
    alignSelf: 'center',
    marginVertical: 40,
  },
  nextButtonText: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedTextStyle: {
    color: 'white',
  },
});
