import React, {useRef, useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

import {commonIcons} from '../../src/assets/commonIcons';

import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from '../../components/Image';
import {HomeTabIcons} from '../../src/assets/HomeTabIcons';
import {NavigationProps} from '../../src/constants/types';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheetItemReviews from '../../components/BottomSheetItemReviews';
import SingleReview from '../../components/SingleReview';
import Featured from '../../src/features/Home/components/Featured';

const {width, height} = Dimensions.get('window');

// Dummy Data
const slides = [
  {
    id: '1',
    text: 'Lorem Ipsum is simply dummy ..',
    image: commonIcons.backButton,
  },
  {
    id: '2',
    text: 'Another beautiful slide ..',
    image: commonIcons.backButton,
  },
  {
    id: '3',
    text: 'Enjoy the experience ..',
    image: commonIcons.backButton,
  },
];

const ViewService: React.FC<{navigation: NavigationProps}> = ({navigation}) => {
  const renderItem = () => (
    <View style={styles.slide}>
      <FastImage
        source={
          'data:image/jpeg;base64,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'
        }
        style={{
          width: '100%',
          height: 250,
        }}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'home',
          })
        }>
        <Image
          source={commonIcons.backButton}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
    </View>
  );

  const refRBSheet = useRef();
  const viewReviews = useRef();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRating = star => {
    setRating(star);
  };

  return (
    <ScrollView>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View style={{padding: 20}}>
          <View
            style={{
              flexDirection: 'row',
              borderRadius: 12,
              marginVertical: 10,
              alignItems: 'flex-start',
            }}>
            <Image
              source={commonIcons.business}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                marginRight: 20,
                borderWidth: 3,
              }}
            />

            <View style={{flex: 1}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#333',
                  marginBottom: 4,
                }}>
                Veronika
              </Text>

              <Text
                style={{
                  fontSize: 14,
                  color: '#555',
                  lineHeight: 20,
                }}>
                Customer
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 8}}>
            {[...Array(4)].map((_, index) => (
              <Icon
                name="star"
                size={35}
                color={'#ECA61B'}
                style={{marginLeft: 10}}
              />
            ))}
            <Icon
              name="star-outline"
              size={35}
              color={'#ECA61B'}
              style={{marginLeft: 10}}
            />
          </View>
          <TextInput
            style={{
              width: '100%',
              height: 120,

              borderRadius: 5,
              padding: 10,
              textAlignVertical: 'top',
              marginTop: 10,
              backgroundColor: 'rgba(255, 250, 232, 0.60)',
            }}
            placeholder="Write a review"
            multiline
            value={review}
            onChangeText={setReview}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity
              style={{
                marginTop: 15,
                backgroundColor: '#F1C40F',
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 25,
                width: '80%',
                alignItems: 'center',
                padding: 5,
              }}>
              <Text style={{fontWeight: 'bold'}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => refRBSheet.current.close()}
              style={{
                marginTop: 15,
                backgroundColor: '#F1C40F',
                paddingVertical: 15,
                paddingHorizontal: 20,
                borderRadius: 30,
              }}>
              <Image
                source={commonIcons.cross_black}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <RBSheet
        ref={viewReviews}
        useNativeDriver={true}
        height={800}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <BottomSheetItemReviews
          handleCloseButton={() => viewReviews.current.close()}
        />
      </RBSheet>
      <View style={styles.imageView}>
        <FlatList
          data={slides}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === 0 ? styles.activeDot : null]}
            />
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            <Text style={styles.servicePrice}>
              <Text style={{color: '#F1C40F'}}>100GHS</Text>/Hour
            </Text>
          </View>
          <View style={styles.actionsContainer}>
            <Icon
              name="chatbubbles-outline"
              size={20}
              color="black"
              style={styles.actionIcon}
            />
            <Icon
              name="share-outline"
              size={20}
              color="black"
              style={styles.actionIcon}
            />
          </View>
        </View>
        <View style={styles.serviceName}>
          <Text style={{color: '##828282'}}>
            <Text style={{...styles.text, color: 'black'}}>
              Mariana Pedroza
            </Text>{' '}
            {'  '}Hair Stylist
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            marginVertical: 10,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={commonIcons.verify}
              style={styles.serviceFeatureImage}
            />
            <Text style={styles.serviceFeature}>Box Braids</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={commonIcons.verify}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'contain',
                marginHorizontal: 10,
              }}
            />
            <Text style={{fontSize: 18, fontWeight: 800, color: '#828282'}}>
              Senegalese Twist
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: 5,
            backgroundColor: 'white',
            padding: 12,
            borderRadius: 15,
          }}>
          <Text style={{fontSize: 18, marginVertical: 2, color: '#4F4F4F'}}>
            Availability
          </Text>
          <Text style={{fontSize: 18, marginVertical: 2, color: '#999999'}}>
            Mon-Sat <Text>{'     '}Hours: 8am-5pm</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}>
            <Image
              source={HomeTabIcons.Location}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginRight: 2,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                marginRight: 10,
                color: '#999999',
              }}>
              Congo 1234 city,ave 2,apt 3434
            </Text>
          </View>
        </View>
      </View>
      <Featured />
      <View style={styles.container}>
        <View style={styles.ratingContainer}>
          <View style={styles.starsContainer}>
            <View style={styles.stars}>
              <Icon name="star" size={20} color="black" />
              <Icon name="star" size={20} color="black" />
              <Icon name="star" size={20} color="black" />
              <Icon name="star" size={20} color="black" />
              <Icon name="star" size={20} color="black" />
            </View>
            <Text style={styles.ratingText}>4/5</Text>
          </View>
          <View style={styles.actionsContainer}>
            <Icon
              name="heart"
              size={20}
              color="red"
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>2,343</Text>
            <Icon
              name="eye-off"
              size={20}
              color="black"
              style={styles.actionIcon}
            />
            <Text style={styles.actionText}>2,343</Text>
          </View>
        </View>

        <Text
          style={{
            marginVertical: 5,
            fontSize: 16,
            fontWeight: 600,
            marginTop: 20,
          }}>
          Rating & Reviews
        </Text>
        <SingleReview canDoAction={false} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => viewReviews.current.open()}>
            <Text style={styles.buttonText}>View All Reviews</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => refRBSheet.current.open()}>
            <Text style={styles.buttonText}>Rate it</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#f2f4f5',
  },
  imageView: {
    flex: 1,
    height: 250,
    position: 'relative',
  },
  flatListContainer: {
    flexGrow: 1,
  },
  slide: {
    width: width,
    height: height,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: '600',
    width: '70%',
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FFD700',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10, // Moved to container for consistency
  },
  button: {
    backgroundColor: '#f1c310',
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500', // Use string for compatibility across platforms
    textAlign: 'center', // Ensure text is centered
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  starsContainer: {
    flexDirection: 'row',
  },
  stars: {
    flexDirection: 'row',
  },
  ratingText: {
    marginLeft: 20,
    backgroundColor: '#F1C40F99',
    borderRadius: 5,
    padding: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionIcon: {
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 25,
  },
  actionText: {
    padding: 5,
    borderRadius: 25,
  },
  serviceName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  servicePrice: {
    fontSize: 27,
    fontWeight: 700,
  },
  serviceFeature: {
    fontSize: 18,
    fontWeight: 800,
    color: '#828282',
  },
  serviceFeatureImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: 10,
  },
});

export default ViewService;
