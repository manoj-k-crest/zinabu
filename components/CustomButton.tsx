import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const CustomButton = ({ label, onPress, style, textStyle, isFocused }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style, isFocused && styles.focusedButton]} 
      onPress={onPress}
    >
      <View>
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFD54F', // Yellow background
    borderRadius: 20, // Rounded corners
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    margin: 5, // Space between buttons
  },
  focusedButton: {
    borderWidth: 2,
   
  },
  text: {
    color: '#000', // Black text
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '300',
    fontFamily:'open-sans'
  },
});

export default CustomButton;
