import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {commonIcons} from '../../src/assets/commonIcons';
import Slider from '@react-native-community/slider';
import CustomDropdown from '../../components/CustomDropdown';
import CustomSwitch from '../../components/CustomSwitch';
import StarRating from '../../components/StarRating';

export default function CustomerFilter({navigation}) {
  const [priceRange] = useState(10000); // Default value for slider

  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FBF7E8',
        }}></View>
    </>
  );
}

const styles = StyleSheet.create({});
