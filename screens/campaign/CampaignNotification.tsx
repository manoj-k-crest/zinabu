import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CheckBox from 'react-native-check-box';

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
  header: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerImageContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1C40F',
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
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
  },
  notificationText: {
    fontWeight: 400,
    fontSize: 20,
  },
  notificationDesc: {
    alignSelf: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const CampaignNotification: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  const SingleNotifications = ({target, description}) => {
    return (
      <View style={{marginTop: 20, paddingHorizontal: 20}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Icon
            name="volume-high-outline"
            size={20}
            color="#EF1C69"
            style={{marginRight: 40}}
          />
          <LinearGradient
            colors={['#F9B04B', '#CF637E']} // Start and end colors of the gradient
            style={styles.linearGradient}>
            <Text style={styles.notificationText}>{target}</Text>
          </LinearGradient>
          <CheckBox style={{flex: 1, padding: 10}} isChecked={false} />
        </View>
        <Text style={styles.notificationDesc}>{description}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView />

      <View style={styles.container}>
        <CampaignHeader
          title={'Set Notification'}
          description={'Define how your target users are notified'}
          navigation={navigation}
          onArrowPress={onArrowPress}
        />
        <SingleNotifications
          target={'SMS'}
          description={
            'Campaign content content will display at selected screen location'
          }
        />

        <SingleNotifications
          target={'EMAIL'}
          description={
            'Campaign content content will display at selected screen location'
          }
        />

        <SingleNotifications
          target={'IN-APP'}
          description={
            'Campaign content content will display at selected screen location'
          }
        />

        <SingleNotifications
          target={'PUSH'}
          description={
            'Campaign content content will display at selected screen location'
          }
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CampaignItemAppearance')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CampaignNotification;
