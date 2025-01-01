import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import {commonIcons} from '../src/assets/commonIcons';

const {width} = Dimensions.get('window');

// Sample data for the plans
const plans = [
  {
    id: '1',
    name: 'Akwaba',
    price: '10GHS',
    stars: 2,
    offer: 'Try 15 days for free',
  },
  {
    id: '2',
    name: 'Premium',
    price: '20GHS',
    stars: 3,
    offer: 'Try 7 days for free',
  },
  {id: '3', name: 'Gold', price: '50GHS', stars: 4, offer: 'Best value plan'},
];

const PlanCard = ({plan}) => (
  <View style={styles.card}>
    <Text style={styles.title}>
      {plan.name}{' '}
      <Text style={styles.price}>
        {plan.price}
        <Text style={styles.stars}>{'⭐'.repeat(plan.stars)}</Text>
      </Text>
    </Text>
    <Text style={styles.offer}>{plan.offer}</Text>
    {/*  */}
  </View>
);

const SwipeList = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to previous plan
  const scrollToPrevious = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({index: currentIndex - 1});
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Go to next plan
  const scrollToNext = () => {
    if (currentIndex < plans.length - 1) {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Left Arrow */}
      <TouchableOpacity onPress={scrollToPrevious}>
        <Image source={commonIcons.leftarrow} style={{width: 30, height: 30}} />
      </TouchableOpacity>
      {/* Swipable Plans */}
      <FlatList
        ref={flatListRef}
        data={plans}
        renderItem={({item}) => <PlanCard plan={item} />}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={() => {}}
      />

      {/* Right Arrow */}
      <TouchableOpacity onPress={scrollToNext}>
        <Image
          source={commonIcons.rightarrow}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFCF2',
    width: '90%',
  },
  card: {
    width: width * 0.7,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 18,
    color: '#F4A940',
  },
  offer: {
    fontSize: 16,
    color: '#181816',
    marginTop: 10,
    marginRight:40
  },
  stars: {
    fontSize: 18,
    color: '#FFD700',
    marginTop: 10,
  },
  arrowButton: {
    padding: 10,
    backgroundColor: '#FFFCF2',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  arrowText: {
    fontSize: 24,
    color: '#333',
  },
});

export default SwipeList;
