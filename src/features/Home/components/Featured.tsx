import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {WIDTH} from '../../../constants';

const Featured = () => {
  const categories = [
    {
      id: 1,
      label: 'Face Care',
      image:
        'https://nycphoto.com/wp-content/uploads/2020/05/187a497b-hands-near-face.jpg',
    },
    {
      id: 2,
      label: 'Eyes Care',
      image:
        'https://media.istockphoto.com/id/1280410981/photo/brown-eyed-woman-is-looking-tenderly-at-viewer-make-up-hairdressing-and-emotions.jpg?s=612x612&w=0&k=20&c=S5w3dRnbzeN7vo43UaXTmouqVnyXajdTiX4JOW8hNxI=',
    },
    {
      id: 3,
      label: 'Skin Care',
      image:
        'https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg',
    },
    {
      id: 4,
      label: 'Hair Care',
      image:
        'https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg',
    },
    {
      id: 5,
      label: 'Body Care',
      image:
        'https://thumbs.dreamstime.com/b/beauty-model-girl-fashion-manicure-make-up-35653081.jpg',
    },
  ];

  const renderItem = ({item}: {item: any}) => (
    <View style={styles.categoryContainer}>
      <Image source={{uri: item.image}} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Leading Products</Text>
      <FlatList
        horizontal
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 6,
  },
  heading: {
    fontSize: 13,
    marginLeft: 12,
    marginVertical: 3,
    fontWeight: 'bold',
  },
  categoryContainer: {
    width: WIDTH * 0.45,
    height: 100,
    marginRight: 10,
    margin: 2,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default React.memo(Featured);
