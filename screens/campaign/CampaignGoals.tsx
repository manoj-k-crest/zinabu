import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../../src/styles/colors';
import {commonIcons} from '../../src/assets/commonIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomDropdown from '../../components/CustomDropdown';
import LinearBorderColorView from '../../components/LinearBorderColorView';
import CampaignHeader from '../../components/CampaignHeader';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f4f5',
    paddingHorizontal: 25,
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 0,
    marginTop: 20,
  },
  headerImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1C40F',
  },
  objectiveContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginVertical: 20,
  },
  objectiveTitle: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginRight: 25,
    marginBottom: 30,
  },
  objectiveDescription: {
    fontSize: 11,
    fontWeight: 400,
    marginVertical: 5,
    lineHeight: 14.98,
    width: '80%',
  },
  containerTitleView: {
    borderWidth: 4,
    width: '80%',
    borderBlockColor: 'pink',
    alignSelf: 'center',
    borderRadius: 35,
    paddingVertical: 20,
    marginRight: 10,
  },
  containerTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },

  button: {
    width: '40%',
    backgroundColor: '#f1c310',
    borderRadius: 24,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignSelf: 'center',
    marginVertical: 30,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500', // Use string for compatibility across platforms
    textAlign: 'center', // Ensure text is centered
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDesc: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});

interface NavigationProps {
  goBack(): unknown;
  navigate: (screen: string, params?: object) => void;
}

const CampaignGoals: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  const SingleGoals = () => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={styles.objectiveTitle}>Goal #1</Text>
          <View>
            <CustomDropdown
              placeholder="Get 1k Views"
              style={{width: '60%', height: 50}}
            />
            <Text style={styles.objectiveDescription}>
              This campaign will generate 1K views using advance algorithm
            </Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <CampaignHeader
          title={'Set Campaign Goals'}
          description={'Please set your campaign goals below'}
          navigation={navigation}
          onArrowPress={onArrowPress}
        />

        <SingleGoals />

        <SingleGoals />

        <SingleGoals />

        <SingleGoals />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('campaignTargetGroup')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CampaignGoals;
