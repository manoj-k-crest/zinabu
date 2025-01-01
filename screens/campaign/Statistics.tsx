import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

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
});

interface NavigationProps {
  goBack(): void;
  navigate: (screen: string, params?: object) => void;
}

const Statistics: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  const SingleObjective = ({title}) => {
    return (
      <>
        <View style={styles.objectiveContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LinearGradient
              colors={['#fbd786', '#f7797d']}
              style={styles.linearGradient}>
              <Text style={styles.objectiveTitle}>3467724</Text>
            </LinearGradient>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <SafeAreaView />
      <ScrollView style={styles.container}>
        <CampaignHeader
          title={'Campaign'}
          description={'Closout Sale Campaign'}
          navigation={navigation}
          onArrowPress={onArrowPress}
        />

        <SingleObjective title={'Views'} />
        <SingleObjective title={'Likes'} />
        <SingleObjective title={'Share'} />
        <SingleObjective title={'Rating'} />
        <SingleObjective title={'Reviews'} />
        <SingleObjective title={'Messages'} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('campaignGoals')}>
          <Text style={styles.buttonText}>End Campign</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Statistics;
