import {View, Text, TextInput} from 'react-native';
import React from 'react';

export default function CustomTextInput({placeholder = ''}) {
  return (
    <View style={{marginVertical: 5}}>
      <TextInput
        style={[
          {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          ,
          {
            height: 60,
            borderColor: 'gray',
            borderWidth: 0.5,
            borderRadius: 25,
            paddingHorizontal: 20,
            marginVertical: 10,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={''}
        // onChangeText={}
      />
    </View>
  );
}
