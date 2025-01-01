import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../src/assets/commonIcons';

import LinearBorderColorView from '../../components/LinearBorderColorView';
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
    marginVertical: 20,
  },
  objectiveTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
  },
  objectiveDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    width: '40%',
    backgroundColor: '#f1c310',
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: 'center',
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
});

interface NavigationProps {
  goBack(): void;
  navigate: (screen: string, params?: object) => void;
}

const CreateObjective: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  const SingleObjective = () => {
    return (
      <>
        <View style={styles.objectiveContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LinearGradient
              colors={['#fbd786', '#f7797d']}
              style={styles.linearGradient}>
              <Text style={styles.objectiveTitle}>Discounted</Text>
            </LinearGradient>
            <Icon name="volume-high-outline" size={20} color="#EF1C69" />
          </View>
          <Text style={styles.objectiveDescription}>
            This item is now sold at a discounted price through this campaign
          </Text>
        </View>
      </>
    );
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <CampaignHeader
          title={'Define Campaign Objective'}
          description={' Select one of the objectives below'}
          navigation={navigation}
          onArrowPress={onArrowPress}
        />

        <SingleObjective />
        <SingleObjective />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('campaignGoals')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CreateObjective;
