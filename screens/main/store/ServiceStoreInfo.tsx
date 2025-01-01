import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const ServiceStoreInfo = ({navigation, route}) => {
  const {marketPlaceLocation} = route.params;
  const [businessName, setBusinessName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [openTime, setOpenTime] = useState(new Date());
  const [closeTime, setCloseTime] = useState(new Date());
  const [showOpenPicker, setShowOpenPicker] = useState(false);
  const [showClosePicker, setShowClosePicker] = useState(false);

  const formatTime = time => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const handleNext = () => {
    // Validation logic
    // if (!businessName.trim()) {
    //   Alert.alert('Error', 'Please enter your business name.');
    //   return;
    // }
    // if (!phoneNumber.trim()) {
    //   Alert.alert('Error', 'Please enter your business phone number.');
    //   return;
    // }
    // if (!description.trim()) {
    //   Alert.alert('Error', 'Please enter your business description.');
    //   return;
    // }
    // If validation passes
    navigation.navigate('service-image', {
      businessName,
      phoneNumber,
      description,
      openTime: formatTime(openTime),
      closeTime: formatTime(closeTime),
      marketPlaceLocation,
    });
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
            Now provide information about your business
          </Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.validText}>All fields below are required</Text>
        </View>
        <View style={styles.inputForm}>
          <Text style={styles.label}>Business name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your business name"
            value={businessName}
            onChangeText={setBusinessName}
          />
          <Text style={styles.label}>Business phone number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your business phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Text style={styles.label}>Business description</Text>
          <TextInput
            style={styles.desInput}
            placeholder="Enter your business description"
            multiline
            value={description}
            onChangeText={setDescription}
          />
          <Text style={styles.label}>Business timings</Text>
          <View style={styles.timingContainer}>
            <TouchableOpacity
              onPress={() => setShowOpenPicker(true)}
              style={styles.timingButton}>
              <Text style={styles.openText}>Open at</Text>
              <Text style={styles.timingText}>{formatTime(openTime)}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setShowClosePicker(true)}
              style={styles.timingButton}>
              <Text style={styles.openText}>Close at</Text>
              <Text style={styles.timingText}>{formatTime(closeTime)}</Text>
            </TouchableOpacity>
          </View>

          {showOpenPicker && (
            <DateTimePicker
              value={openTime}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={(event, selectedDate) => {
                setShowOpenPicker(false);
                if (selectedDate) setOpenTime(selectedDate);
              }}
            />
          )}

          {showClosePicker && (
            <DateTimePicker
              value={closeTime}
              mode="time"
              is24Hour={false}
              display="default"
              onChange={(event, selectedDate) => {
                setShowClosePicker(false);
                if (selectedDate) setCloseTime(selectedDate);
              }}
            />
          )}
        </View>
        <View style={styles.nextButton}>
          <TouchableOpacity style={styles.nextView} onPress={handleNext}>
            <Text style={styles.nextText}> Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  nextText: {
    fontSize: 26,
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
    height: 300,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputForm: {
    marginTop: 30,
  },
  validText: {
    color: '#232020',
    textAlign: 'center',
    fontSize: 20,
  },
  info: {
    width: '80%',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2F4F5',
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
  },
  headerText: {
    fontSize: 26,
    textAlign: 'left',
    fontWeight: '700',
    color: '#252323',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 5,
    color: '#111111',
    left: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
    width: '95%',
    alignSelf: 'center',
    elevation: 10,
  },
  desInput: {
    height: 150,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
    width: '95%',
    alignSelf: 'center',
    elevation: 10,
  },
  timingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  timingButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#fff',
    elevation: 10,
  },
  timingText: {
    marginTop: 5,
    fontWeight: '400',
    color: '#999999',
  },
});

export default ServiceStoreInfo;
