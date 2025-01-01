import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import FastImage from './Image';
import { log } from 'sonarqube-scanner/build/src/logging';

export default function CustomDropdown({
  iconLeft = {},
  placeholder = 'Select item',
  style = {},
  placeholderStyle = {},
  selectedTextStyle = {},
  inputSearchStyle = {},
  data = [],
  maxHeight = 0,
  searchPlaceholder = 'Search...',
  iconRight = {},
  setSelectedItem = () => {},
  selectedItem = '',
}) {
  const demoData = [
    {label: 'Option 1', value: '1'},
    {label: 'Option 2', value: '2'},
    {label: 'Option 3', value: '3'},
    {label: 'Option 4', value: '4'},
    {label: 'Option 5', value: '5'},
  ];

  
  return (
    <>
      <View style={{marginVertical: 5}}>
        <Dropdown
          style={{...styles.dropdown, ...style}}
          placeholderStyle={{...styles.placeholderStyle, ...placeholderStyle}}
          selectedTextStyle={{
            ...styles.selectedTextStyle,
            ...selectedTextStyle,
          }}
          inputSearchStyle={{...styles.inputSearchStyle, ...inputSearchStyle}}
          iconStyle={styles.iconStyle}
          data={demoData}
          search
          renderLeftIcon={() => {
            return (
              <View style={{...styles.renderLeftIcon, ...iconLeft}}>
                <Text style={styles.textLeft}>A</Text>
              </View>
            );
          }}
          renderRightIcon={() => {
            return (
              <Image
                style={{...styles.slectDown, ...iconRight}}
                source={require('../src/assets/commonIcons/selectDown.png')}
              />
            );
          }}
          maxHeight={maxHeight || 300}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          searchPlaceholder={searchPlaceholder}
          value={selectedItem}
          onChange={item => setSelectedItem(item)}
        />
      </View>
      ``
    </>
  );
}

const styles = StyleSheet.create({
  renderLeftIcon: {
    width: 30,
    borderWidth: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: '#31302A',
  },
  textLeft: {
    fontSize: 18,
    color: '#fff',
  },
  dropdown: {
    height: 60,
    width: 60,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 10,
  },

  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: '#151414',
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  slectDown: {
    width: 28,
    height: 28,
  },
});
