import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {commonIcons} from '../../../src/assets/commonIcons';
import {Colors} from '../../../src/styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, {Marker} from 'react-native-maps';
import {Screen} from 'react-native-screens';

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const AddStore: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  const [openingTime, setOpeningTime] = useState('07:30 AM');
  const [closingTime, setClosingTime] = useState('10:30 PM');

  return (
    <ScrollView
      style={{
        backgroundColor: '#F8F8F8',

        paddingHorizontal: 10,
        marginBottom: 20,
      }}>
      <SafeAreaView />
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AuthStack', {
                screen: 'selectPurpose',
              })
            }
            style={styles.backButton}>
            <Image
              source={commonIcons.backButton}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>

          <Image source={commonIcons.appLogo} style={styles.appLogo} />
          <Text style={{opacity: 0}}>LOGO</Text>
        </View>

        {/* Logo Upload Section */}
        <View style={styles.logoSection}>
          <TouchableOpacity style={styles.logoContainer}>
            <View style={styles.plusIconContainer}>
              <Icon name="add-outline" size={20} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={styles.logoText}>Upload your business logo</Text>
        </View>

        {/* Form Section */}
        <View style={styles.formSection}>
          <Text style={styles.label}>Enter your Details</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Business name</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your business name"
              placeholderTextColor="#999"
              value={''}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Email</Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your contact number"
              placeholderTextColor="#999"
              value={''}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Business description </Text>

            <TextInput
              style={styles.input}
              placeholder="Enter your business details"
              placeholderTextColor="#999"
              value={''}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.timmingParentContainer}>
            <Text style={{...styles.inputTitle, marginVertical: 10}}>
              Business timings{' '}
            </Text>
            <View style={styles.inputContainerTimming}>
              <View style={styles.timingInput}>
                <Text style={styles.label}>Open at</Text>
                <TextInput
                  style={styles.input}
                  value={openingTime}
                  onChangeText={setOpeningTime}
                />
              </View>
              <View style={styles.timingInput}>
                <Text style={styles.label}>Close at</Text>
                <TextInput
                  style={styles.input}
                  value={closingTime}
                  onChangeText={setClosingTime}
                />
              </View>
            </View>
          </View>

          <View style={styles.timingSection}></View>

          <View style={styles.mapContainer}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="location-outline" size={20} color="black" />
                <Text
                  style={{
                    ...styles.label,
                    marginLeft: 5,
                    textAlign: 'center',
                  }}>
                  Set your location
                </Text>
              </View>
              <Icon
                name="pencil-outline"
                onPress={() =>
                  navigation.navigate('AddShops', {
                    screen: 'EditLocation',
                  })
                }
                size={20}
                color="black"
              />
            </View>
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
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={() =>
            navigation.navigate('AddShops', {
              screen: 'SelectCategory',
            })
          }>
          <Text style={{fontWeight: 600, fontSize: 18}}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  formSection: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 60,
    fontSize: 16,
    color: '#333',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  timingSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  timingInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  mapContainer: {
    height: 200,
    borderRadius: 25,
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  map: {
    flex: 1,
    borderRadius: 8,
  },
  continueButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    marginBottom: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appLogo: {
    width: 50,
    height: 50,
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

  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  plusIconContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
  },
  logoText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 500,
    color: 'black',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    height: 70,
  },
  timmingParentContainer: {
    flexDirection: 'column',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    height: 130,
  },
  inputContainerTimming: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    height: 69,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 600,
  },
});

export default AddStore;
