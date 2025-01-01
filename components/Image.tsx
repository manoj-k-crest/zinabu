import React from 'react';
import {StyleSheet, Image} from 'react-native';

interface ImageProps {
  source: string;
  style?: any;
}

const FastImage: React.FC<ImageProps> = ({source, style}) => {
  return <Image src={source} style={[styles.image, style]} />;
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default FastImage;
