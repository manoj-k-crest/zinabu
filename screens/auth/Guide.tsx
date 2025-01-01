import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ViewToken,
} from 'react-native';
import {Colors} from '../../src/styles/colors';
import {guidePageSlides} from '../../src/constants';

const {width} = Dimensions.get('window');

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const Guide: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentSlideIndex == guidePageSlides.length - 1) {
      navigation.navigate('SignIn');
    }

    if (currentSlideIndex < guidePageSlides.length - 1) {
      flatListRef?.current?.scrollToIndex({index: currentSlideIndex + 1});
    }
  };

  const handleViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      setCurrentSlideIndex(viewableItems[0]?.index || 0);
    },
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={guidePageSlides}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>{' '}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <View style={styles.footer}>
        <View style={styles.pagination}>
          {guidePageSlides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlideIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentSlideIndex === guidePageSlides.length - 1
              ? 'Finish'
              : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    paddingHorizontal: 20,
    marginTop: 75,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 400,
    textAlign: 'center',
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 700,
    marginBottom: 10,
    color: Colors.black,
  },
  description: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 8,
    borderRadius: 5,
    backgroundColor: Colors.black,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 80,
    height: 8,
    backgroundColor: '#F1C40F',
  },
  button: {
    backgroundColor: '#F1C40F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 600,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});

export default Guide;
