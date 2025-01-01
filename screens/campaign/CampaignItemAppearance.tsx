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
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linearGradient: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 200,
    height: 50,
    borderRadius: 25,
  },
  ImageContanier: {
    width: 250,
    height: 250,
    borderWidth: 10,
  },
});

interface NavigationProps {
  goBack(): unknown;
  navigate: (screen: string, params?: object) => void;
}

const CampaignItemAppearance: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  return (
    <>
      <SafeAreaView />

      <View style={styles.container}>
        <CampaignHeader
          title={'Set Appearance'}
          description={
            'Use preset styles to change item appearance to distinguish it among search results'
          }
          navigation={navigation}
          onArrowPress={onArrowPress}
        />

        <View style={{alignItems: 'center', marginTop: 40}}>
          <Image source={commonIcons.shopping} style={styles.ImageContanier} />
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
            }}>
            <View>
              <View style={styles.flexDirection}>
                <Icon
                  name="volume-high-outline"
                  size={20}
                  color="#EF1C69"
                  style={{marginRight: 40}}
                />
                <LinearGradient
                  colors={['#F9B04B', '#CF637E']} // Start and end colors of the gradient
                  style={styles.linearGradient}>
                  <Text style={{fontWeight: 400, fontSize: 20}}>Styles</Text>
                  <Icon name="caret-forward-outline" size={20} color="black" />
                </LinearGradient>
              </View>
              <Text style={{width: 250, marginVertical: 10, marginLeft: 60}}>
                Swipe to change style preset
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
            }}>
            <Icon
              name="volume-high-outline"
              size={20}
              color="black"
              style={{marginRight: 20}}
            />
            <Text style={{fontSize: 16, fontWeight: 600, lineHeight: 21.79}}>
              Upload new image
            </Text>
          </View>
          <Icon name="camera" size={60} color="black" />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CampaignDuration')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CampaignItemAppearance;
