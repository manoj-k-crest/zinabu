import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {commonIcons} from '../src/assets/commonIcons';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SingleReview({canDoAction = true}) {
  return (
    <View style={styles.reviewContainer}>
      <Image source={commonIcons.business} style={styles.reviewerImage} />
      <View style={styles.reviewContent}>
        <Text style={styles.reviewerName}>Veronika</Text>
        <View style={styles.starsRow}>
          {[...Array(4)].map((_, index) => (
            <Icon key={index} name="star" size={20} color="#ECA61B" />
          ))}
          <Icon name="star" size={20} color="#ECA61B" />
        </View>
        <Text style={styles.reviewText}>
          Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed ...
        </Text>

        {canDoAction && (
          <View style={styles.actionsRow}>
            <TouchableOpacity style={styles.actionButton}>
              <Image source={commonIcons.dislike} style={styles.actionIcon} />
              <Text style={styles.actionText}>20</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
              <Image source={commonIcons.like} style={styles.actionIcon} />
              <Text style={styles.actionText}>10</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.replyText}>Reply</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

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
