import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Featured from '../../src/features/Home/components/Featured';
import LinearBorderColorView from '../../components/LinearBorderColorView';
import {WIDTH} from '../../src/constants';

export default function ForSale({
  navigation,
  data,
}: {
  navigation: {};
  data: [];
}) {
  // console.log('>>', data);

  const dummyData = [
    {
      imageurl: require('../../src/assets/commonIcons/ListDummy.png'),
      heading: 'Micheal Kors facial Oil',
      desc: 'Micheal Kors deep cleansing therapeutic grade quality',
      reviews: '45 Reviews',
      subHeading: '45GHS',
      id: 1,
      rating: '4.9',
      heartImage: require('../../src/assets/commonIcons/heart.png'),
    },
    {
      imageurl: require('../../src/assets/commonIcons/ListDummy.png'),
      heading: 'Micheal Kors facial Oil',
      desc: 'Micheal Kors deep cleansing therapeutic grade quality',
      reviews: '45 Reviews',
      subHeading: '45GHS',
      id: 2,
      rating: '4.9',
      heartImage: require('../../src/assets/commonIcons/heart.png'),
    },
    {
      imageurl: require('../../src/assets/commonIcons/ListDummy.png'),
      heading: 'Micheal Kors facial Oil',
      desc: 'Micheal Kors deep cleansing therapeutic grade quality',
      reviews: '45 Reviews',
      subHeading: '45GHS',
      id: 3,
      rating: '4.9',
      heartImage: require('../../src/assets/commonIcons/heart.png'),
    },
    {
      imageurl: require('../../src/assets/commonIcons/ListDummy.png'),
      heading: 'Micheal Kors facial Oil',
      desc: 'Micheal Kors deep cleansing therapeutic grade quality',
      reviews: '45 Reviews',
      subHeading: '45GHS',
      id: 4,
      rating: '4.9',
      heartImage: require('../../src/assets/commonIcons/heart.png'),
    },
    {
      imageurl: require('../../src/assets/commonIcons/ListDummy.png'),
      heading: 'Micheal Kors facial Oil',
      desc: 'Micheal Kors deep cleansing therapeutic grade quality',
      reviews: '45 Reviews',
      subHeading: '45GHS',
      id: 5,
      rating: '4.9',
      heartImage: require('../../src/assets/commonIcons/heart.png'),
    },
  ];

  return (
    <>
      <Featured />
      <View style={styles.container}>
        <FlatList
          data={dummyData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.card}
                onPress={() =>
                  navigation.navigate('itemDetails', {item_id: item.id})
                }>
                <Image style={styles.image} source={item.imageurl} />

                <View style={styles.details}>
                  <Text style={styles.heading}>{item.heading}</Text>
                  <Text style={styles.subHeading}>{item.subHeading}</Text>
                  <Text style={styles.desc}>{item.desc}</Text>
                  <View style={styles.review}>
                    <Text style={styles.reviews}>
                      ⭐ 4.9
                      <Text style={styles.reviews}>
                        {' '}
                        {'    '} {item.reviews}
                      </Text>
                    </Text>
                    <Image source={item.heartImage} style={styles.star} />
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false} // Optional
        />
      </View>
    </>
  );
}

const styles = {
  review: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  star: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 30,
  },
  container: {
    // padding: 20,
    width: WIDTH - 8,
    backgroundColor: '#FFFEFC',
    alignSlef: 'center',
    borderRadius: 10,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 7,
    padding: 8,
    backgroundColor: '#FBF7E8',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#FBF7E8',
    marginTop: 1,
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#5A5953',
  },
  desc: {
    fontSize: 17,
    color: '#666',
    marginVertical: 4,
  },
  reviews: {
    fontSize: 14,
    color: '#888',
  },
  subHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#C29706',
  },
};
