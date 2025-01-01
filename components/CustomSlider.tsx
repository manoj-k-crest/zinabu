import React, {useState} from 'react';
import {View} from 'react-native';
import Slider from '@react-native-community/slider';

export const CustomSlider = ({
  style = {},
  minimumValue = 0,
  maximumValue = 100,
}) => {
  return (
    <Slider
      style={style}

      thumbTintColor="#F1C40F"
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      minimumTrackTintColor="#262832"
      maximumTrackTintColor="#262832"
    />
  );
};
