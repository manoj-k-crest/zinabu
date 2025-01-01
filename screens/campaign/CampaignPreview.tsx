import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearBorderColorView from '../../components/LinearBorderColorView';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f4f5',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // backgroundColor: 'white',
    position: 'absolute',
    top: 100,
    zIndex: 1,
  },
  backButton: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5A5954',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  leftSection: {
    backgroundColor: '#F9B04B',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightSection: {
    backgroundColor: 'white',
    width: '60%',
  },
  button: {
    width: '40%',
    backgroundColor: '#f1c310',
    borderRadius: 24,
    paddingVertical: 15,
    alignSelf: 'center',
    marginVertical: 40,
  },
  buttonText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    textAlign: 'center',
  },
});

interface NavigationProps {
  navigate: (screen: string, params?: object) => void;
}

const CampaignPreview: React.FC<{navigation: NavigationProps}> = ({
  navigation,
  onArrowPress,
}) => {
  const {width, height} = Dimensions.get('window');

  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate('campaignObjective')}
          style={styles.backButton}>
          <Icon name="chevron-back-outline" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <LinearBorderColorView title="Review Campaign" />
          <Icon
            name="volume-high-outline"
            size={20}
            color="black"
            style={{marginLeft: 10}}
          />
        </View>
      </View>

      <View style={[styles.innerContainer, {width, height}]}>
        <View style={[styles.leftSection, {height}]}></View>
        <View style={[styles.rightSection, {height}]}>
          <Text>Hello</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>POST</Text>
      </TouchableOpacity>
      {/* </SafeAreaView> */}
    </>
  );
};

export default CampaignPreview;
