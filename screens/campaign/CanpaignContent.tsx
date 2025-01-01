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
  text0: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 19.07,
  },
  text1: {
    fontWeight: 400,
    textAlign: 'center',
    paddingHorizontal: 22,
    marginVertical: 15,
  },
  text2: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 21.79,
  },
});

interface NavigationProps {
  goBack(): unknown;
  navigate: (screen: string, params?: object) => void;
}

const CanpaignContent: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  return (
    <>
      <SafeAreaView />
      <View style={styles.container}>
        <CampaignHeader
          title={'Create Campaign Content'}
          description={
            'Create content for your canpaign. Use the content creation tool or upload content.'
          }
          navigation={navigation}
          onArrowPress={onArrowPress}
        />
        <View style={{alignItems: 'center', marginTop: 40}}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
            }}>
            <Icon
              name="volume-high-outline"
              size={20}
              color="#EF1C69"
              style={{marginRight: 20}}
            />
            <Text style={styles.text0}>
              Click the plus icon to upload a file
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('campaignObjective')}>
            <LinearGradient
              colors={['#ea8476', '#efb927']}
              style={styles.circle}>
              <Text style={styles.plus}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.text1}>
            You may upload a video or a graphic banner. Restrictions apply{' '}
            <Icon name="information-circle" size={25} color="#fed017" />
          </Text>

          <Text style={{marginVertical: 25}}>OR</Text>

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
            }}>
            <Icon
              name="volume-high-outline"
              size={20}
              color="#EF1C69"
              style={{marginRight: 20}}
            />
            <Text style={styles.text2}>Create new live video</Text>
          </View>
          <Icon name="camera" size={60} color="black" />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TargetScreens')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CanpaignContent;
