import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProps} from '../src/constants/types';
import {commonIcons} from '../src/assets/commonIcons';
import SingleReview from './SingleReview';

const BottomSheetItemReviews: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  handleCloseButton,
}) => {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Reviews</Text>
          <TouchableOpacity onPress={handleCloseButton}>
            <Image
              source={commonIcons.cross_black}
              style={styles.backButtonImage}
            />
          </TouchableOpacity>
        </View>
        {/* Ratings Section */}
        <View style={styles.ratingContainer}>
          <View style={styles.ratingRow}>
            {[...Array(5)].map((_, index) => (
              <Icon key={index} name="star" size={25} color="#ECA61B" />
            ))}
            <Text style={styles.ratingText}>4/5</Text>
          </View>
        </View>
        <SingleReview />
        <SingleReview /> <SingleReview /> <SingleReview /> <SingleReview />{' '}
        <SingleReview /> <SingleReview /> <SingleReview />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECA61B',
  },
  backButtonImage: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  hiddenHeader: {
    opacity: 0,
  },
  subtitle: {
    fontSize: 16,
    color: '#352F17',
    fontWeight: '600',
    lineHeight: 22,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
  },
  reviewContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  reviewerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
    borderWidth: 3,
    backgroundColor: 'pink',
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  reviewText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  actionIcon: {
    width: 24,
    height: 24,
  },
  actionText: {
    fontSize: 16,
    color: '#333',
    marginHorizontal: 4,
  },
  replyText: {
    fontSize: 16,
    color: 'black',
  },
});

export default BottomSheetItemReviews;
