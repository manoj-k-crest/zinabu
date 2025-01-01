import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../src/assets/commonIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearBorderColorView from '../../components/LinearBorderColorView';
import CampaignHeader from '../../components/CampaignHeader';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f4f5',
    paddingHorizontal: 25,
  },

  headerTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    opacity: 0,
    marginTop: 20,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    borderBlockColor: 'pink',
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
    marginVertical: 40,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500', // Use string for compatibility across platforms
    textAlign: 'center', // Ensure text is centered
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  plus: {
    fontSize: 50,
    color: '#fff',
    fontWeight: '300',
  },
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDesc: {
    textAlign: 'center',
    marginVertical: 10,
  },
  headerImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1C40F',
  },
  targetParentView: {
    marginTop: 10,
  },
  targetTitle: {
    fontWeight: 400,
    fontSize: 22,
    alignSelf: 'center',
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
  },
  targetFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
});

interface NavigationProps {
  goBack(): unknown;
  navigate: (screen: string, params?: object) => void;
}

interface TargetScreensProps {
  navigation: NavigationProps;
  onArrowPress: () => void; // Include onArrowPress here
}

const TargetScreens: React.FC<TargetScreensProps> = ({
  navigation,
  onArrowPress,
}) => {
  const SingleTarget = ({title, target, description}) => {
    return (
      <View style={styles.targetParentView}>
        <Text style={styles.targetTitle}>{title}</Text>
        <View style={styles.targetFlex}>
          <Icon
            name="volume-high-outline"
            size={20}
            color="#EF1C69"
            style={{marginRight: 80}}
          />
          <LinearGradient
            colors={['#F9B04B', '#CF637E']} // Start and end colors of the gradient
            style={styles.linearGradient}>
            <Text style={{fontWeight: 400, fontSize: 20}}>{target}</Text>
            <Icon name="caret-forward-outline" size={20} color="black" />
          </LinearGradient>
        </View>
        <Text
          style={{
            width: 250,
            marginVertical: 10,
            textAlign: 'center',
            alignSelf: 'center',
          }}>
          {description}
        </Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView />

      <View style={styles.container}>
        <CampaignHeader
          title={'Set Target Screens'}
          description={
            'You have options to display your campaign ad on Zinabu. Choose below.Conditions may apply.'
          }
          navigation={navigation}
          onArrowPress={onArrowPress}
        />

        <SingleTarget
          title={'Set Screen'}
          target={'Home'}
          description={
            'Campaign content will be displayed on selected screen using advanced algorithm'
          }
        />
        <SingleTarget
          title={'Placement'}
          target={'Featured'}
          description={
            'Campaign content content will display at selected screen location'
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CampaignNotification')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TargetScreens;
