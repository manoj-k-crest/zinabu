import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import CheckBox from 'react-native-check-box';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonIcons} from '../../src/assets/commonIcons';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearBorderColorView from '../../components/LinearBorderColorView';
import CustomCalender from '../../components/CustomCalender';
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
});

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const CampaignDuration: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  return (
    <>
      <SafeAreaView />

      <View style={styles.container}>
        <CampaignHeader
          title={'Campaign Duration'}
          description={'Use the calender picker to set campaign duration'}
          navigation={navigation}
          onArrowPress={onArrowPress}
        />
        <CustomCalender />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CampaignPreview')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CampaignDuration;
