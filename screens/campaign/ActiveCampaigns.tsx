import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import CampaignHeader from '../../components/CampaignHeader';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
  },
  header: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  crossIconContainer: {
    height: 50,
    width: 50,
    borderRadius: 10,
    opacity: 0.7,
  },
  crossInnerContainer: {
    borderRadius: 5,
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  objectiveContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  objectiveTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    width: '60%',
    backgroundColor: '#f1c310',
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500', // Use string for compatibility across platforms
    textAlign: 'center', // Ensure text is centered
  },
  headerDesc: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  linearGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
    paddingHorizontal: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
  },
  innerContainer: {
    margin: 16,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Android shadow
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3, // iOS shadow
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200, // Adjust height as needed
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
});

interface NavigationProps {
  goBack(): void;
  navigate: (screen: string, params?: object) => void;
}

const ActiveCampaigns: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  const CloseoutSaleCard = () => {
    return (
      <View style={styles.innerContainer}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64,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',
          }} // Replace with your image URL
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlay}>
          <Text style={styles.title}>Closeout Sale Campaign</Text>
          <Text style={styles.date}>Posted on 22/11/2024</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.container}>
        <CampaignHeader
          title={'Campaign'}
          description={''}
          navigation={navigation}
          onArrowPress={onArrowPress}
        />

        <CloseoutSaleCard />
        <CloseoutSaleCard />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('campaignGoals')}>
          <Text style={styles.buttonText}>End Campign</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default ActiveCampaigns;
