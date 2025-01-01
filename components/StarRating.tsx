import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default function StarRating() {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {[1, 2, 3, 4, 5].map(star => (
        <TouchableOpacity
          key={star}
          //   onPress={() => setRating(star)}
          activeOpacity={0.7}>
          <Icon
            name="star"
            size={35}
            color={'#d3d3d3'}
            style={{
              marginHorizontal: 10,
            }}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
