import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView} from 'react-native-safe-area-context';

const ServiceStoreImage = ({navigation, route}) => {
  const {
    marketPlaceLocation,
    businessName,
    phoneNumber,
    description,
    openTime,
    closeTime,
  } = route.params;

  const [imageInfo, setImageInfo] = useState({
    name: '',
    extension: '',
    data: '',
  });

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.error('ImagePicker Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const {fileName, type, base64} = response.assets[0];
          setImageInfo({
            name: fileName || 'unknown',
            extension: type?.split('/').pop() || 'unknown',
            data: base64 || '',
          });
          Alert.alert('Image Selected', `Selected image: ${fileName}`);
        }
      },
    );
  };

  const handleTakePhoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled camera');
        } else if (response.errorMessage) {
          console.error('Camera Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const {fileName, type, base64} = response.assets[0];
          setImageInfo({
            name: fileName || 'unknown',
            extension: type?.split('/').pop() || 'unknown',
            data: base64 || '',
          });
          Alert.alert('Photo Taken', `Captured image: ${fileName}`);
        }
      },
    );
  };

  const handleNext = () => {
    // if (!imageInfo.name || !imageInfo.extension || !imageInfo.data) {
    //   Alert.alert('Error', 'Please select or take a photo to proceed.');
    //   return;
    // }

    navigation.navigate('service-category', {
      imageInfo,
      marketPlaceLocation,
      businessName,
      phoneNumber,
      description,
      openTime,
      closeTime,
    });
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={20} />
        </TouchableOpacity>
        <View style={styles.InfoView}>
          <Text style={styles.headerText}>
            Let's provide an image to represent your storefront
          </Text>
        </View>
        <View style={styles.uploadImage}>
          <Text style={styles.uploadText}>
            Upload a photo from your library
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
          <Icon name="image" size={46} />
          <Text style={styles.text}>Select an image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
          <Text style={styles.text}>Take a photo</Text>
          <Icon name="camera" size={56} style={styles.iconPhoto} />
        </TouchableOpacity>
        <View style={styles.nextButton}>
          <TouchableOpacity style={styles.nextView} onPress={handleNext}>
            <Text style={styles.nextText}> Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ServiceStoreImage;

const styles = StyleSheet.create({
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
    height: 450,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
    color: '#111111',
  },
  iconPhoto: {marginTop: 10},
  uploadImage: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    alignSelf: 'center',
  },
  uploadText: {
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'open-sans',
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
    fontWeight: '700',
    color: '#252323',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 1,
    width: 320,
  },
  button: {
    width: '70%',
    height: 150,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 2.2,
    justifyContent: 'center',
    borderColor: '#111111',
    alignSelf: 'center',
    marginTop: 30,
  },
  photoButton: {
    alignItems: 'center',
    marginTop: 30,
    height: 100,
  },
  text: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});
